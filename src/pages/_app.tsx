import { AlephiumConnectButton, AlephiumWalletProvider } from '@alephium/web3-react'
import "../styles/globals.css"

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return <AlephiumWalletProvider theme='retro' network='devnet'>
    <Component {...pageProps} />
  </AlephiumWalletProvider>
}

export default MyApp
