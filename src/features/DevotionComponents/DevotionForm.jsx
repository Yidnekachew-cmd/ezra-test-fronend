import props from 'prop-types'
import AddParagraph from "./AddParagraph"
import PhotoUploader from "./PhotoUploader"

const DevotionForm = ({form, handleChange, handleSubmit, addPara, handleParaChange, paragraphs, handleFileChange }) => {

  return (
    <form onSubmit={handleSubmit} className='w-[30%] bg-gray-300 p-3 rounded pb-4 space-y-2'>
      <label >
        Month:
      </label>
      <select className="  py-2 rounded" name="month" value={form.month} onChange={handleChange}>
        <option value="" disabled>-- ምረጥ --</option>
        <option value="መስከረም">መስከረም</option>
        <option value="ጥቅምት">ጥቅምት</option>
        <option value="ህዳር">ህዳር</option>
        <option value="ታህሳስ">ታህሳስ</option>
        <option value="ጥር">ጥር</option>
        <option value="የካቲት">የካቲት</option>
        <option value="መጋቢት">መጋቢት</option>
        <option value="ሚያዚያ">ሚያዚያ</option>
        <option value="ግንቦት">ግንቦት</option>
        <option value="ሰኔ">ሰኔ</option>
        <option value="ሐምሌ">ሐምሌ</option>
        <option value="ነሀሴ">ነሀሴ</option>
      </select>
      <label className="ml-1">
        Day:
      </label>
      <input
        type="number"
        name='day'
        min="1"
        max="31"
        placeholder='day'
        className='cursor-pointer border-2 border-gray-300 rounded-md px-2 py-1'
        value={form.day}
        onChange={handleChange}
      />
      <br />
      <label >
        Title:
      </label>
      <input
        type="text"
        name='title'
        placeholder='Title'
        className='w-full border-2 border-gray-300 rounded-md px-2 py-1'
        value={form.title}
        onChange={handleChange}
      />
      <br />
      <label >
        Chapter:
      </label>
      <input
        type="text"
        name='chapter'
        placeholder='chapter'
        className='w-full border-2 border-gray-300 rounded-md px-2 py-1'
        value={form.chapter}
        onChange={handleChange}
      />
      <br />
      <label >
        verse:
      </label>
      <input
        type="text"
        name='verse'
        placeholder='verse'
        className='w-full border-2 border-gray-300 rounded-md px-2 py-1'
        value={form.verse}
        onChange={handleChange}
      />
      <br />
      <AddParagraph
        form={form}
        handleChange={handleChange}
        addPara={addPara}
        handleParaChange={handleParaChange}
        paragraphs={paragraphs}
      />
      <br />
      <label >
        Prayer:
      </label>
      <textarea
        type="text"
        name='prayer'
        placeholder='prayer'
        className='w-full border-2 border-gray-300 rounded-md px-2 py-1'
        value={form.prayer}
        onChange={handleChange}
      />
      <br />
      <PhotoUploader
        handleFileChange={handleFileChange}
      />
      {/* <label >
        Image:
      </label>
      <input
        type="file"
        name='image'
        placeholder='image'
        className='cursor-pointer border-2 border-gray-300 rounded px-2 py-1'
        value={form.image}
        onChange={handleChange}
      /> */}
      <br />
      <button className=' bg-blue-500 text-white px-4 py-2 rounded-md '>
        Submit
      </button>
    </form>
  )
}

DevotionForm.propTypes = {
  form: props.object,
  handleChange: props.func,
  handleSubmit: props.func,
  addPara: props.func,
  handleParaChange: props.func,
  paragraphs: props.array,
  handleFileChange: props.func
}

export default DevotionForm
