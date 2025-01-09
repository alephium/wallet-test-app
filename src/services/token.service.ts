import * as web3 from '@alephium/web3'
import { binToHex, contractIdFromAddress, DUST_AMOUNT, stringToHex, TransactionBuilder } from '@alephium/web3'
import { Destroy, ShinyToken, ShinyTokenInstance, Transfer } from '../../artifacts/ts'
import { setCurrentNodeProvider } from '@alephium/web3/dist/src/global'

export const erc20TokenAddressByNetwork = {
  "goerli-alpha":
    "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
  "mainnet-alpha":
    "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
}

export type TokenBalance = {
  id: string
  balance: {
    balance: bigint
    lockedBalance: bigint
  }
}

export const getTokenBalances = async (alephium: web3.SignerProvider | undefined, address: string): Promise<TokenBalance[]> => {
  if (!alephium || !alephium.explorerProvider) {
    console.log("Alephium explorer provider not initialized")
    return []
  }

  const tokens: TokenBalance[] = []
  const addressTokens = await alephium.explorerProvider.addresses.getAddressesAddressTokens(address)

  for (const addressToken of addressTokens) {
    const tokensEntry = tokens.find((token) => token.id === addressToken)
    const addressTokenBalance = await alephium.explorerProvider.addresses.getAddressesAddressTokensTokenIdBalance(address, addressToken)

    if (tokensEntry) {
      tokensEntry.balance.balance += BigInt(addressTokenBalance.balance)
      tokensEntry.balance.lockedBalance += BigInt(addressTokenBalance.lockedBalance)
    } else {
      tokens.push({
        id: addressToken,
        balance: {
          balance: BigInt(addressTokenBalance.balance),
          lockedBalance: BigInt(addressTokenBalance.lockedBalance)
        }
      })
    }
  }

  return tokens
}

export const getAlphBalance = async (alephium: web3.SignerProvider | undefined, address: string) => {
  if (!alephium || !alephium.explorerProvider) {
    console.log("Alephium explorer provider not initialized")
    return undefined
  }

  const balance = await alephium.explorerProvider.addresses.getAddressesAddressBalance(address)

  return balance
}

export const mintToken = async (
  alephium: web3.SignerProvider | undefined,
  mintAmount: string,
): Promise<web3.DeployContractResult<ShinyTokenInstance>> => {
  if (alephium === undefined) {
    throw Error("alephium object not initialized")
  }

  return ShinyToken.deploy(alephium, {
    initialFields: {
      name: stringToHex("ShinyToken"),
      symbol: stringToHex("SHINY"),
      decimals: 0n,
      totalSupply: BigInt(mintAmount)
    },
    initialAttoAlphAmount: BigInt(1100000000000000000),
    issueTokenAmount: BigInt(mintAmount),
  })
}

export const withdrawMintedToken = async (
  alephium: web3.SignerProvider | undefined,
  amount: string,
  tokenId: string
): Promise<web3.SignExecuteScriptTxResult> => {
  if (alephium === undefined) {
    throw Error("alephium object not initialized")
  }

  return Transfer.execute(
    alephium,
    {
      initialFields: {
        shinyTokenId: binToHex(contractIdFromAddress(tokenId)),
        to: (await alephium.getSelectedAccount()).address,
        amount: BigInt(amount)
      }
    }
  )
}

export const transferToken = async (
  alephium: web3.SignerProvider | undefined,
  tokenId: string,
  transferTo: string,
  transferAmount: string,
): Promise<web3.SignTransferTxResult> => {
  if (alephium === undefined) {
    throw Error("alephium object not initialized")
  }

  return await alephium.signAndSubmitTransferTx({
    signerAddress: (await alephium.getSelectedAccount()).address,
    destinations: [{
      address: transferTo,
      attoAlphAmount: DUST_AMOUNT,
      tokens: [{
        id: tokenId,
        amount: BigInt(transferAmount)
      }
      ]
    }]
  })
}

export const transferTokenSignAndSubmitUnsignedTx = async (
  alephium: web3.SignerProvider | undefined,
  tokenId: string,
  transferTo: string,
  transferAmount: string
): Promise<web3.SignTransferTxResult> => {
  if (alephium === undefined) {
    throw Error("alephium object not initialized");
  }

  const builder = TransactionBuilder.from(alephium.nodeProvider!);
  const account = await alephium.getSelectedAccount();
  const buildResult = await builder.buildTransferTx(
    {
      signerAddress: account.address,
      destinations: [
        {
          address: transferTo,
          attoAlphAmount: DUST_AMOUNT,
          tokens: [
            {
              id: tokenId,
              amount: BigInt(transferAmount),
            },
          ],
        },
      ],
    },
    account.publicKey
  );

  return await alephium.signAndSubmitUnsignedTx({
    signerAddress: account.address,
    unsignedTx: buildResult.unsignedTx,
  });
};

export const destroyTokenContract = async (
  alephium: web3.SignerProvider | undefined,
  tokenId: string,
): Promise<web3.ExecuteScriptResult> => {
  if (alephium === undefined) {
    throw Error("alephium object not initialized")
  }

  return Destroy.execute(
    alephium,
    {
      initialFields: {
        shinyTokenId: binToHex(contractIdFromAddress(tokenId)),
        to: (await alephium.getSelectedAccount()).address,
      }
    }
  )
}
