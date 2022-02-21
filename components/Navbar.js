import Image from 'next/image'
import React from 'react'
import { MintContext } from '../context/MintContext.js'
import { useContext } from 'react'
import { useEffect } from 'react'

const Navbar = () => {
  const { account, connectWallet } = useContext(MintContext)

  return (
    <div className="bg-[url('../images/NavBar.png')] fixed w-full z-50 flex items-center p-4 justify-evenly ">
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
      </div>
      <div className="flex">
        <div className="">
          <Image
            src={require('../images/collection-logo.png')}
            alt="logo"
            height={70}
            width={200}
            // layout="fill"
            className="nav-items"
          />
        </div>
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
            src={require('../images/connect.png')}
            alt="logo"
            height={70}
            width={240}
            // layout="fill"
            className="nav-items"
            onClick={connectWallet}
          />
        </div>
      </div>
      <h1 className="text-sm">{account}</h1>
    </div>
  )
}

export default Navbar
