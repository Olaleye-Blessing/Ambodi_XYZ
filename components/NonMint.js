import Image from 'next/image'
import React from 'react'
import { MintContext } from '../context/MintContext.js'
import { useContext } from 'react'

const NonMint = () => {
  const { bool, changeBool, account } = useContext(MintContext)

  console.log(bool)
  return (
    <div className="flex items-center justify-center">
      <div className="bg-[url('../images/featuring-bg.png')] mt-[20vh] lg:mt-[40vh]  lg:h-[130vh] h-[50vh] w-full max-w-xs md:max-w-3xl lg:max-w-4xl lg:w-auto  bg-contain bg-no-repeat items-center justify-center">
        <div className=" -mt-8  flex justify-end -mr-6">
          <Image
            alt=""
            src={require('../images/mascot.png')}
            className="object-scale-down lg:object-fill"
            layout="fixed"
            height={70}
            width={100}
          />
        </div>
        <div className="mt">
          <Image src={require('../images/featuring.png')} alt="" />
        </div>
        <div className=" flex justify-center -mt-10  items-center">
          <Image
            src={require('../images/mint.png')}
            className="h-[5vh] w-[10vh] object-scale-down"
            alt=""
            // height={50}
            // width={100}
            // objectFit="scale-down"
            onClick={changeBool}
          />
        </div>
      </div>
    </div>
  )
}

export default NonMint
