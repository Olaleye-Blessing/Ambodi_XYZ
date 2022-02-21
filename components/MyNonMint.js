import Image from 'next/image'
import React from 'react'
import { MintContext } from '../context/MintContext.js'

import { useContext } from 'react'

const Minting = () => {
  const { bool, changeBool } = useContext(MintContext)

  return (
    <div className="-mt-20 bg-[url('../images/featuring-bg.png')]">
      <div className="max-w-xs lg:max-w-full h-auto  flex justify-center items-center">
        {/* <Image
          src={require()}
          layout="fixed"
          alt=""
          className="object-scale-down lg:object-contain"
        /> */}
      </div>
      <h1>Minter</h1>
      <div className="flex -mt-[170px] ml-40 lg:-mt-[100px] lg:ml-56 h-[50px] w-[100px] lg:h-[50px] lg:w-[250px]">
        <Image
          src={require('../images/mint.png')}
          layout="fixed"
          alt=""
          className="cursor-pointer"
          onClick={changeBool}
        />
      </div>
    </div>
  )
}

export default Minting
