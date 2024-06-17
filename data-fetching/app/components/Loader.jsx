'use client'
import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'



const Loader = () => {
    return (
       <div className='flex justify-center items-center h-[98vh]'>
         <ThreeCircles
        height="400"
        width="400"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="red"
        innerCircleColor="yellow"
        middleCircleColor="green"
      />
       </div>
    )
}

export default Loader;