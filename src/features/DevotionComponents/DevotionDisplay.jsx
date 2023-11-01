import React from 'react'

const DevotionDisplay = ({ form, paragraphs, previewUrl  }) => {
  return (
    <div  className='w-[70%]  flex space-x-12  bg-gray-100 container mx-auto'>
      <div className='flex flex-col border-2 rounded h-24 p-3 w-[20%] justify-center items-center border-amber-500 mt-8'>
        <p className=' font-customBold text-4xl'>
          {form.month}
        </p>
        <p className='text-3xl font-customBold'>
          {form.day}
        </p>
      </div>
      <div className='flex flex-col w-[50%] space-y-2 mt-8'>
        <h1 className='font-customBold text-4xl text-justify'>
          {form.title}
        </h1>
        <h2 className='font-customBold text-lg'>
          {form.chapter}
        </h2>
        <p className='font-customLight text-xl'>
          {form.verse}
        </p>

        {paragraphs.map((para, paragraphIndex) => (
          <p className='font-customLight text-1xl text-justify' key={paragraphIndex}>{para}</p>
        ))}
        <p className='font-customBold text-1xl border-2 border-amber-400 p-2 rounded'>
          {form.prayer}
        </p>
      </div>
      <div className='w-[25%] mt-12'>
      {previewUrl && <img src={previewUrl} alt="Preview" />}
      </div>
      

     
    </div>
  )
}

export default DevotionDisplay