import { createKeyPair } from 'ed25519.js/index'

let publicKey = ''
let privateKey = ''

export const createKey = (): string[] => {
  const keys = createKeyPair()
  const pub = keys.publicKey
  const priv = keys.privateKey

  for (let i = 0; i < 32; i++) {
    publicKey = publicKey + pub[i].toString(16).padStart(2, '0')
  }

  for (let i = 0; i < 32; i++) {
    privateKey = privateKey + priv[i].toString(16).padStart(2, '0')
  }
  
  const keyPair = [publicKey, privateKey]
  return keyPair
}
