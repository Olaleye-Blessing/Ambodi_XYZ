/* eslint-disable @next/next/link-passhref */
import Image from 'next/image'
import React from 'react'
import { MintContext } from '../context/MintContext.js'
import { useContext } from 'react'
import { useEffect } from 'react'
import { MenuIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import Authereum from 'authereum'
import Link from 'next/link'

const Navbar = () => {
  const { account, connectWallet } = useContext(MintContext)
  const providerOptions = {
    authereum: {
      package: Authereum, // required
    },
  }

  const [connected, setConnected] = useState(require('../images/connect.png'))

  const [drop, setDrop] = useState(false)

  const changeBool = () => {
    if (drop === false) {
      setDrop(true)
    } else if (drop === true) {
      setDrop(false)
    }
  }

  const NonDropdown = () => {
    return (
      <div className="bg-[#4C577C]">
        <div className="mt-2 hidden lg:flex">
          <Link href="/collections">
            <div className="cursor-pointer">
              <Image
                src={require('../images/collection-logo.png')}
                alt="logo"
                height={70}
                width={200}
                // layout="fill"
                className="nav-items"
              />
            </div>
          </Link>
          <div className="-ml-5">
            <Image
              src={require('../images/team.png')}
              alt="logo"
              height={70}
              width={200}
              // layout="fill"
              className="nav-items"
            />
          </div>
          <div className="-ml-5">
            <Image
              src={connected}
              alt="logo"
              height={70}
              width={240}
              // layout="fill"
              className="nav-items cursor-pointer"
              onClick={() => {
                connectWallet()
              }}
            />
          </div>
          <h1 className="text-sm">{account}</h1>
        </div>
      </div>
    )
  }

  const Dropdown = () => {
    return (
      <div className="bg-[#4C577C]">
        <div className="mt-2  flex flex-col lg:hidden items-center justify-center">
          <Link href="/collections">
            <div className="cursor-pointer">
              <Image
                src={require('../images/collection-logo.png')}
                alt="logo"
                height={70}
                width={200}
                // layout="fill"
                className="nav-items"
              />
            </div>
          </Link>
          <div className="-ml-5">
            <Image
              src={require('../images/team.png')}
              alt="logo"
              height={70}
              width={200}
              // layout="fill"
              className="nav-items"
            />
          </div>
          <div className="-ml-5">
            <Image
              src={connected}
              alt="logo"
              height={70}
              width={240}
              // layout="fill"
              className="nav-items cursor-pointer"
              onClick={() => {
                connectWallet()
                walletImage()
              }}
            />
          </div>
          <h1 className="text-sm">{account}</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[url('../images/NavBar.png bg-[#4C577C] sticky top-0 w-full z-50 flex flex-col lg:flex-row items-center p-4 pt-6 justify-evenly ">
      <div className="flex items-center">
        <Image
          src={require('../images/logo.png')}
          alt="logo"
          height={50}
          width={350}
          layout="fixed"
          className="nav-items"
          // objectFit="cover"
        />
        <div className="-ml-14">
          <Image
            src={require('../images/mascot-2.png')}
            alt="logo"
            height={70}
            width={140}
            // layout="fill"
            className="nav-items"
          />
        </div>
        <div className="lg:hidden">
          <MenuIcon
            className="h-8 w-8 text-white cursor-pointer"
            onClick={changeBool}
          />
        </div>
      </div>
      <NonDropdown />

      {drop && <Dropdown />}
    </div>
  )
}

export default Navbar
