import React from 'react'

const Notes = () => {
  return (
    <div className='h-[50vh] w-[100vw] mt-[5rem] lg:mt-[10rem] bg-[#0E0224] flex flex-col justify-end gap-[50px] lg:bg-[#171717]'>
        <div className='box flex  flex-col justify-center items-center text-black text-[40px] list-none font-bold bg-[#5F37AA] lg:bg-[#EFB495]  w-[300px] mx-auto rounded-[30px] '>
            <li>SubhanAllah</li>
            <li> Alhamdulillah </li>
            <li>Allahu Akbar</li>
        </div>
        <div className='flex  flex-col justify-center items-end text-white text-[16px] list-none font-bold bg-[#5F37AA] lg:bg-[#171717]  font-serif  h-[400px]'>
            <p className='max-w-[80%] mx-auto '> Encourage users to engage in daily dhikr by reciting phrases such as SubhanAllah, Alhamdulillah, and Allahu Akbar.</p>
        </div>
    </div>
  )
}

export default Notes