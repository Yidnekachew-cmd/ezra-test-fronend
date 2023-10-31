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
    // console.log(form);
  }

  // useState for adding multiple paragraphs
  const [paragraphs, setParagraphs] = useState([]);
  const addPara = () => {
      console.log('add para')
      setParagraphs([...paragraphs, '']);
  };

  // Handle changes in the text area for the paragraphs
  const handleParaChange = (e, index) => {
      const updatedParagraphs = [...paragraphs];
      updatedParagraphs[index] = e.target.value;
      setParagraphs(updatedParagraphs);
    };

  // useState for Photo preview
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setPreviewUrl(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviewUrl('');
    }
  };
  return (
    <div className="mt-12 flex bg-gray-200">
      <DevotionDisplay
        form={form}
        paragraphs={paragraphs}
        previewUrl={previewUrl}
      />
      <DevotionForm
        form={form} 
        handleParaChange={handleParaChange} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
        paragraphs={paragraphs}
        addPara={addPara}
        handleFileChange={handleFileChange}
        
      />
    </div>
  )
}

export default Devotion