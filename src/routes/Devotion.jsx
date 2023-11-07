import { useState, useEffect } from "react";
import axios from "axios";
import DevotionForm from "../features/DevotionComponents/DevotionForm";
import DevotionDisplay from "../features/DevotionComponents/DevotionDisplay";

const Devotion = () => {
  const [devotions, setDevotions] = useState([]);

  useEffect(() => {
    const fetchDevotions = async () => {
      try {
        const response = await axios.get("/devotion/show");
        setDevotions(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDevotions();
  }, []);

  // useState for adding multiple paragraphs
  const [paragraphs, setParagraphs] = useState([]);
  const addPara = () => {
    setParagraphs([...paragraphs, ""]);
  };

  // Handle changes in the text area for the paragraphs
  const handleParaChange = (e, index) => {
    const updatedParagraphs = [...paragraphs];
    updatedParagraphs[index] = e.target.value;
    setParagraphs(updatedParagraphs);
    setForm({
      ...form,
      body: updatedParagraphs,
    });
  };

  // useState for form
  const [form, setForm] = useState({
    month: "",
    day: "",
    title: "",
    chapter: "",
    verse: "",
    prayer: "",
  });

  const handleChange = (e) => {
    const file = e.target.files[0];
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Append paragraphs data to the FormData object
    paragraphs.forEach((paragraph, index) => {
      formData.append(`paragraph${index + 1}`, paragraph);
    });

    // Append the selected file to the FormData object
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    try {
      const response = await axios.post("/devotion/create", formData);
      // console.log(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePara = (index) => {
    const newPara = [...paragraphs];
    newPara.splice(index, 1);
    setParagraphs(newPara);
    setForm({
      ...form,
      body: newPara,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/devotion/${id}`);
      // Remove the deleted devotion from the devotions array
      setDevotions(devotions.filter((devotion) => devotion._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // useState for Photo preview
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setPreviewUrl(reader.result);
        const newPara = [...paragraphs];
        setForm({
          ...form,
          body: newPara,
          image: reader.result,
        });
      };

      reader.readAsDataURL(file);
    } else {
      setPreviewUrl("");
    }
  };

  return (
    <div className=" flex bg-gray-200">
      <DevotionDisplay devotions={devotions} handleDelete={handleDelete} />
      <DevotionForm
        form={form}
        handleParaChange={handleParaChange}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        paragraphs={paragraphs}
        addPara={addPara}
        handleFileChange={handleFileChange}
        deletePara={deletePara}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Devotion;
