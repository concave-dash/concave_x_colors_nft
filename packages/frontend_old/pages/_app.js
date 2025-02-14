import React from 'react'
import { Toaster } from 'react-hot-toast'
import 'tailwindcss/tailwind.css'
import Web3 from 'web3'
import Web3Provider, { Connectors } from 'web3-react'
const { InjectedConnector } = Connectors

const MetaMask = new InjectedConnector()

const connectors = { MetaMask }

function SyncXColors({ Component, pageProps }) {
  return (
    <Web3Provider
      connectors={connectors}
      libraryName={'web3.js'}
      web3Api={Web3}
    >
      <Component {...pageProps} />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            border: '1px solid #fff',
            padding: '16px',
            color: 'white',
            background: 'rgb(110, 170, 250)',
            fontWeight: 'bold',
          },
          success: {
            style: {
              background: 'green',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
        }}
      />
    </Web3Provider>
  )
}

export default SyncXColors
