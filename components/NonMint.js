import Image from 'next/image'
import React from 'react'
import { MintContext } from '../context/MintContext.js'
import { useContext } from 'react'

const NonMint = () => {
  const { bool, changeBool, account } = useContext(MintContext)

  console.log(bool)
  return (
    <div className="">
      <div className=" flex flex-col items-center justify-center mt-20">
        <div className="bg-[url('../images/featuring-bg.png')] h-[100vh] bg-contain bg-no-repeat flex flex-col items-center justify-center">
          <div className="-mt-56">
            <div className=" -mt-10 flex justify-end">
              <Image
                alt=""
                src={require('../images/mascot.png')}
                className="object-scale-down"
                layout="fixed"
                height={100}
                width={200}
              />
            </div>

            <div className="flex flex-col items-center justify-center mt">
              <Image
                alt=""
                src={require('../images/featuring.png')}
                layout="fixed"
                className="nav-items object-scale-down"
              />
              <div>
                <Image
                  src={require('../images/mint.png')}
                  layout="fixed"
                  alt=""
                  className="cursor-pointer"
                  onClick={changeBool}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

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
  )
}

export default NonMint
