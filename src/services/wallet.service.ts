import { Account, MessageHasher, SignMessageResult, SignUnsignedTxResult, SignerProvider } from '@alephium/web3'

export const getExplorerBaseUrl = (): string | undefined => {
  return 'http://localhost:23000'
}

export const signMessage = async (alephium: SignerProvider | undefined, account: Account | undefined, message: string, messageHasher: MessageHasher): Promise<SignMessageResult> => {
  if (alephium === undefined || account === undefined) {
    throw Error("Alephium object not initialized")
  }

  return await alephium.signMessage({
    signerAddress: account.address,
    message,
    messageHasher
  })
}

export const signUnsignedTx = async (alephium: SignerProvider | undefined, account: Account | undefined, unsignedTx: string): Promise<SignUnsignedTxResult> => {
  if (alephium === undefined || account === undefined) {
    throw Error("Alephium object not initialized")
  }

  return await alephium.signUnsignedTx({
    signerAddress: account.address,
    signerKeyType: account.keyType,
    unsignedTx
  })
}
