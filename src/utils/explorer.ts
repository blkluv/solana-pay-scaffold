import { PublicKey } from '@solana/web3.js'

export function getExplorerUrl(
  endpoint: string,
  viewTypeOrItemAddress: 'inspector' | PublicKey | string,
  itemType = 'address' // | 'tx' | 'block'
) {
  const getClusterUrlParam = () => {
    let cluster = ''
    if (endpoint === 'localnet') {
      cluster = `custom&customUrl=${encodeURIComponent(
        'http://127.0.0.1:8899'
      )}`
    } else if (endpoint === 'https://api.devnet.solana.com') {
      cluster = 'devnet'
    } else if (endpoint === 'https://api.mainnet.solana.com') {
      cluster = 'mainnet'
    }

    return cluster ? `?cluster=${cluster}` : ''
  }

  const domain = 'https://solpay.luvnft.com'; // Add your domain here

  return `${domain}/${itemType}/${viewTypeOrItemAddress}${getClusterUrlParam()}`
}
