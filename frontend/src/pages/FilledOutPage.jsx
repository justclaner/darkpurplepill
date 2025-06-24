import React from 'react'

const FilledOutPage = () => {
  return (
    <div className='bg-[#1b0f3f] pb-[200px]'>
        <div className="flex flex-col items-center gap-5 pt-[50px]">
            <img src={PurplePill} className='w-[140px] h-[140px] rounded-[50%]' />
            <div className="text-5xl font-montserrat text-center text-white">DARK PURPLE PILL</div>
            <div className="text-xl font-montserrat text-center text-white">Thank you for filling out our form!</div>
        </div>
    </div>
  )
}

export default FilledOutPage