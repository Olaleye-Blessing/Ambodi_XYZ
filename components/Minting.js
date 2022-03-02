import Image from 'next/image'
import React, { useState } from 'react'
import { MintContext } from '../context/MintContext.js'

import { useContext } from 'react'

const Minting = () => {
  const { bool, changeBool, count, increaseCount, decreaseCount } = useContext(
    MintContext,
  )
  const [myImage, setImage] = useState(require('../images/zero.png'))

  const img0 = require('../images/zero.png')
  const img1 = require('../images/one.png')
  const img2 = require('../images/two.png')

  const putImage = () => {
    if (count === 0) {
      setImage(img0)
    } else if (count === 1) {
      setImage(img1)
    } else if (count === 2) {
      setImage(img2)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="bg-[url('../images/featuring-bg.png')] mt-24 lg:-mt-3  h-[50vh] max-w-xs md:max-w-3xl bg-contain bg-no-repeat items-center justify-center">
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
        <div className="-mt-7">
          <Image
            src={require('../images/mint-desc.png')}
            alt=""
            height={150}
            width={850}
          />
        </div>

        <div className="flex items-center justify-center -mt-9 h-[9vh]">
          <div
            onClick={() => {
              decreaseCount(), putImage(), console.log(count)
            }}
          >
            <Image
              alt=""
              src={require('../images/minus.png')}
              // layout="fixed"
              className="nav-items object-scale-down cursor-pointer "
            />
          </div>
          <div className="-ml-10">
            <Image
              alt=""
              src={myImage}
              // layout="fixed"
              className="nav-items object-scale-down "
            />
          </div>

          <div
            onClick={() => {
              increaseCount()
              putImage()
              console.log(count)
            }}
          >
            <Image
              alt=""
              src={require('../images/plus.png')}
              // layout="fixed"
              className="nav-items object-scale-down cursor-pointer -ml-20 "
            />
          </div>
        </div>

        <div className="flex items-center justify-center -mt-4 lg:mt-10">
          <Image
            alt=""
            src={require('../images/cost.png')}
            height={50}
            width={200}
          />
          <Image
            alt=""
            src={require('../images/max.png')}
            height={50}
            width={200}
          />
        </div>

        <div className=" flex justify-center -mt-12 lg:-mt-5  items-center">
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

export default Minting

// <div className="max-w-xl lg:max-w-full h-auto relative top-0 left-0  flex justify-center items-center">
//         <Image
//           src={require('../images/featuring-bg.png')}
//           layout="fixed"
//           alt=""
//           className=" "
//         />
//       </div>

//

//       <div className="flex  -mt-[170px] ml-40 lg:-mt-[100px] lg:ml-56 h-[50px] w-[100px] lg:h-[50px] lg:w-[250px]">
//         <Image
//           src={require('../images/mint.png')}
//           layout="fixed"
//           alt=""
//           className="cursor-pointer"
//           onClick={changeBool}
//         />
//       </div>
