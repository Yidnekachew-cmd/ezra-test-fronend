import { useState } from 'react'

const DevotionForm = () => {
  const [form, setForm] = useState({
    month: '',
    day: '',
    title: '',
    chapter: '',
    verse: '',
    body: '',
    prayer: '',
    image: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  return (
    <form className='w-[30%] bg-gray-300 p-3 rounded pb-4'>
      <label >
        Title:
      </label>
      <input 
        type="text"
        name='title' 
        placeholder='Title'
        className=' border-2 border-gray-300 rounded-md px-2 py-1'
        value={form.title}
        onChange={() => handleChange}
      />
      <br />
      <label >
        Chapter:
      </label>
      <input 
        type="text"
        name='chapter' 
        placeholder='chapter'
        className=' border-2 border-gray-300 rounded-md px-2 py-1'
        value={form.chapter}
        onChange={() => handleChange}
      />
      <br />
      <label >
        verse:
      </label>
      <input 
        type="text"
        name='verse' 
        placeholder='verse'
        className=' border-2 border-gray-300 rounded-md px-2 py-1'
        value={form.verse}
        onChange={() => handleChange}
      />
      <br />
      <label >
        Body:
      </label>
      <input 
        type="text"
        name='body' 
        placeholder='body'
        className=' border-2 border-gray-300 rounded-md px-2 py-1'
        value={form.body}
        onChange={() => handleChange}
      />
      <br />
      <label >
        Prayer:
      </label>
      <input 
        type="text"
        name='prayer' 
        placeholder='prayer'
        className=' border-2 border-gray-300 rounded-md px-2 py-1'
        value={form.prayer}
        onChange={() => handleChange}
      />
      <br />
      <label >
        Image:
      </label>
      <input 
        type="text"
        name='image' 
        placeholder='image'
        className=' border-2 border-gray-300 rounded-md px-2 py-1'
        value={form.image}
        onChange={() => handleChange}
      />
      <br />
      <label >
        Month:
      </label>
      <input 
        type="date"
        name='month' 
        placeholder='month'
        className=' border-2 border-gray-300 rounded-md px-2 py-1'
        value={form.month}
        onChange={() => handleChange}
      />
      <br />
    </form>
  )
}

export default DevotionForm