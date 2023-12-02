import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  polygonMumbai,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
const { chains, publicClient } = configureChains(
  [ polygon,polygonMumbai],
  [
    alchemyProvider({ apiKey: "5X67mECr7ossT3Z8zGy35omNJcHvV3h6" }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: '812919eb2ab3bb1c9e092cf4204b2a1b',
  chains
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <WagmiConfig config={wagmiConfig}>
  <RainbowKitProvider chains={chains}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RainbowKitProvider>
  </WagmiConfig>
)
