import { useState } from 'react';
import DevotionForm from '../features/DevotionComponents/DevotionForm';
import DevotionDisplay from '../features/DevotionComponents/DevotionDisplay';
const Devotion = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form);
  }
  return (
    <div className="mt-12 flex bg-gray-200">
      <DevotionDisplay form={form}/>
      <DevotionForm form={form} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Devotion