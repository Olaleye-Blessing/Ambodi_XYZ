import React from 'react'
import { useState } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { useEffect } from 'react'

export const MintContext = React.createContext()

export const MintProvider = ({ children }) => {
  const [bool, setBool] = useState(false)
  const [account, setAccount] = useState('')
  const changeBool = () => {
    if (bool === false) {
      setBool(true)
    } else if (bool === true) {
      setBool(false)
    }
  }
  const providerOptions = {
    walletconnect: {},
  }

  const connectWallet = async () => {
    const web3Modal = new Web3Modal({
      network: 'rinkeby',
      providerOptions,
      disableInjectedProvider: false,
    })

    const instance = await web3Modal.connect()

    const provider = new ethers.providers.Web3Provider(instance)
    const signer = provider.getSigner()
    setAccount((await signer.getAddress()).toString())
    console.log(account)
  }

  // useEffect(() => {
  //   connectWallet()
  // }, [connectWallet])

  return (
    <MintContext.Provider value={{ bool, changeBool, account, connectWallet }}>
      {children}
    </MintContext.Provider>
  )
}

export default MintContext
