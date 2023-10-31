import {useState} from 'react'

const AddParagraph = ({handleParaChange, addPara, paragraphs}) => {
   
    
  return (
    <div>
        <button onClick={addPara} className='bg-gray-500 p-1 rounded-sm cursor-pointer'>
            Add Paragraph
        </button>
        {paragraphs.map((para, paragraphIndex) => (
            <div key={paragraphIndex}>
                <textarea 
                    type="text"
                    name='para'
                    id={`body-${paragraphIndex}`} 
                    placeholder={`para-${paragraphIndex}`}
                    className='w-full border-2 border-gray-300 rounded-md px-2 py-1'
                    value={para}
                    onChange={(e) => handleParaChange(e, paragraphIndex)}
                />
                <br />
            </div>
        ))}
    </div>
  )
}

export default AddParagraph