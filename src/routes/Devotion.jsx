import { useState } from 'react';
import DevotionForm from '../features/DevotionComponents/DevotionForm';
import DevotionDisplay from '../features/DevotionComponents/DevotionDisplay';
import axios from 'axios';
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

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();

    // Append form data to the FormData object
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Append paragraphs data to the FormData object
    paragraphs.forEach((paragraph, index) => {
      formData.append(`paragraph${index + 1}`, paragraph);
    });

    // Append the selected file to the FormData object
    if (selectedFile) {
      formData.append('image', selectedFile);
    }

    // Send a POST request to the backend API
    const response = await axios.post('/devotion/create', formData);

    // Handle the response from the backend if needed
    console.log(response.data);

    // Reset the form after successful submission
    setForm({
      month: '',
      day: '',
      title: '',
      chapter: '',
      verse: '',
      body: '',
      prayer: '',
      image: '',
    });

    // Clear the paragraphs
    setParagraphs([]);

    // Clear the selected file and preview URL
    setSelectedFile(null);
    setPreviewUrl('');
  } catch (error) {
    // Handle the error if the request fails
    console.error(error);
  }
};

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
