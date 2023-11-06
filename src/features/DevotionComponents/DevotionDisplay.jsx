import PropTypes from 'prop-types';

const DevotionDisplay = ({ form, paragraphs, previewUrl  }) => {

  const advertImage = 'src/assets/Advert-Image.svg';
  return (
    <div className="w-[70%]   bg-gray-100 container mx-auto">
      <div className="mt-6">
        <h1 className='font-customBold text-3xl text-[#EA9215]'>
          Daily Devotional
        </h1>
      </div>
      <div  className='flex space-x-12 '>
        {form.month !== '' || form.day !== '' ?
        <div className=' rounded w-[20%] h-36 my-1 border-2 bg-[#fff] border-[#EA9215] mt-8 text-[#3A4750] '>
        <div className=" w-[95%]  mx-auto flex flex-col justify-center items-center border-2  bg-[#3A4750] p-3 rounded">
          <p className=' font-customBold text-3xl text-[#fff]'>
            {form.month}
          </p>
          <p className='text-7xl font-customBold text-[#fff]'>
            {form.day}
          </p>
        </div>
      </div> : <div className='hidden rounded w-[20%] h-36 my-1 border-2 bg-[#fff] border-[#EA9215] mt-8 text-[#3A4750] '>
        <div className=" w-[95%]  mx-auto flex flex-col justify-center items-center border-2  bg-[#3A4750] p-3 rounded">
          <p className=' font-customBold text-3xl text-[#fff]'>
            {form.month}
          </p>
          <p className='text-7xl font-customBold text-[#fff]'>
            {form.day}
          </p>
        </div>
      </div>}

      <div className='flex flex-col w-[50%] space-y-2 mt-8'>
        <h1 className='font-customBold text-4xl text-justify text-[#3A4750]'>
          {form.title}
        </h1>
        <h2 className='font-customBold text-lg text-[#EA9215]'>
          {form.chapter}
        </h2>
        {form.chapter !== ''? <hr className="border-[#EA9215]"/> : <hr className="hidden border-[#3A4750]"/>}


        <p className='font-customBold text-1xl text-[#3A4750]'>
          {form.verse}
        </p>

        {paragraphs.map((para, paragraphIndex) => (
          <p className='font-customLight text-sm text-justify text-[#3A4750]' key={paragraphIndex}>{para}</p>
        ))}

        {form.prayer !== ''?
          <p className=' font-customBold text-1xl text-center border-2 border-[#EA9215] p-2 rounded text-[#EA9215]'>
          {form.prayer}
        </p> :
          <p className='hidden font-customBold text-1xl text-center border-2 border-[#EA9215] p-2 rounded text-[#EA9215]'>
          {form.prayer}
        </p>}



      </div>
      <div className='w-[25%] mt-12 flex flex-col space-y-12'>
      {previewUrl && <img src={previewUrl} alt="Preview" />}
      {previewUrl !== '' ?  <img src={advertImage} alt="" className=""/> : <img src={advertImage} alt="" className="hidden"/>}

      </div>



    </div>
    </div>

  )
}

DevotionDisplay.propTypes = {
  form: PropTypes.object.isRequired,
  paragraphs: PropTypes.array.isRequired,
  previewUrl: PropTypes.string.isRequired
}

export default DevotionDisplay
