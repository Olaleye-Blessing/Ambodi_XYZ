import React from 'react'
import { useState } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { useEffect } from 'react'

export const MintContext = React.createContext()

export const MintProvider = ({ children }) => {
  const [bool, setBool] = useState(false)
  const [account, setAccount] = useState('')

  const [count, setCount] = useState(0)

  const increaseCount = () => {
    if (count === 0) {
      setCount(1)
    }
    if (count === 1) {
      setCount(2)
    }
  }

  const decreaseCount = () => {
    if (count === 2) {
      setCount(1)
    }
    if (count === 1) {
      setCount(0)
    }
  }

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
    <MintContext.Provider
      value={{
        bool,
        changeBool,
        account,
        connectWallet,
        count,
        increaseCount,
        decreaseCount,
      }}
    >
      {children}
    </MintContext.Provider>
  )
}

export default MintContext
