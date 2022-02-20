import Image from 'next/image'
import React from 'react'
import MyNonMint from './MyNonMint.js'
import NonMint from './NonMint.js'

import Minting from './Minting'

import { MintContext } from '../context/MintContext.js'
import { useContext } from 'react'

const Hero = () => {
  const { bool, changeBool } = useContext(MintContext)
  console.log(bool)

  return (
    <div className="flex items-center justify-center bg-no-repeat bg-cover -mt-3 h-[100vh] lg:h-[150vh]  bg-[url('../images/landing-bg.png')]">
      <div className="flex flex-col  items-center justify-start">
        {bool ? <Minting /> : <NonMint />}
        {/* <div className="flex -mt-[170px] ml-40 lg:-mt-[100px] lg:ml-56 h-[50px] w-[100px] lg:h-[50px] lg:w-[250px]">
          <Image
            src={require('../images/mint.png')}
            layout="fixed"
            alt=""
            className="cursor-pointer"
            onClick={changeBool}
          />
        </div> */}
      </div>
    </div>
  )
}

export default Hero

// <div className="relative -mt-6">
// <div className=" relative top-0 left-0">
//   <Image
//     src={require('../images/featuring-bg.png')}
//     alt="logo"
//     layout="fixed"
//   />
// </div>

// <div className=" absolute top-[28vh] right-[160px]">
//   <Image
//     src={require('../images/mascot.png')}
//     alt="logo"
//     height={100}
//     width={150}
//     // layout="fixed"
//   />
// </div>

// <div className=" absolute top-[40vh] left-[280px]">
//   <Image
//     src={require('../images/featuring.png')}
//     alt="logo"
//     layout="fixed"
//     //   height={1000}
//     //   width={1000}
//   />
// </div>
// <div className="nav-items absolute bottom-[50vh] right-[400px]">
//   <Image
//     src={require('../images/mint.png')}
//     alt="logo"
//     height={100}
//     width={180}
//   />
// </div>
// </div>
