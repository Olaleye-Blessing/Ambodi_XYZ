import Image from 'next/image'
import React from 'react'
import { MintContext } from '../context/MintContext.js'

import { useContext } from 'react'

const Minting = () => {
  const { bool, changeBool } = useContext(MintContext)

  return (
    <div className="-mt-20 flex flex-col items-center justify-center">
      <div className="bg-[#\\] bg-[url('../images/featuring-bg.png')]   bg-contain bg-no-repeat flex flex-col items-center justify-center">
        <Image
          alt=""
          src={require('../images/mint-desc.png')}
          className="object-scale-down"
          layout="fixed"
          height={100}
          width={900}
        />
        <div className="flex items-center justify-center">
          <Image
            alt=""
            src={require('../images/minus.png')}
            layout="fixed"
            className="nav-items object-scale-down "
          />
          <div className="-ml-32">
            <Image
              alt=""
              src={require('../images/zero.png')}
              layout="fixed"
              className="nav-items object-scale-down "
            />
          </div>

          <Image
            alt=""
            src={require('../images/plus.png')}
            layout="fixed"
            className="nav-items object-scale-down "
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
