import type { NextPage } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"
import { TokenDapp } from "../components/TokenDapp"
import styles from "../styles/Home.module.css"
import { AlephiumConnectButton, useWallet } from '@alephium/web3-react'

const Home: NextPage = () => {
  const { connectionStatus, account } = useWallet()

  return (
    <div className={styles.container}>
      <Head>
        <title>Alephium Test dApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {connectionStatus === 'connected' ? (
          <>
            {/* <button className={styles.connect} onClick={handleDisconnectClick}>
              Disconnect
            </button> */}
            <AlephiumConnectButton />
            <h3 style={{ margin: 0 }}>
              Wallet address: <code>{account.address}</code>
            </h3>
            <h3 style={{ margin: 0 }}>
              Network: <code>{"Devnet"}</code>
            </h3>
            {account.address && (
              <TokenDapp address={account.address} />
            )}
          </>
        ) : (
          <>
            {/* <button className={styles.connect} onClick={handleConnectClick}>
              Connect Wallet
            </button> */}
            <AlephiumConnectButton />
            <p>First connect wallet to use dapp.</p>
          </>
        )}
      </main>
    </div>
  )
}

export default Home
