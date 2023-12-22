// DevotionFormPage.jsx
import { useState } from "react";
import DevotionForm from "../features/DevotionComponents/DevotionForm";
import { useAuthContext } from "../hooks/useAuthContext";
import useAxiosInstance from "../api/axiosInstance";

const CreateDevotion = () => {
  const { token, role } = useAuthContext(); // get the authentication token
  const [devotions, setDevotions] = useState([]);
  const [editingDevotion, setEditingDevotion] = useState(null);
  const [formSubmitCount, setFormSubmitCount] = useState(0);
  const instance = useAxiosInstance(token);

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
    // const file = e.target.files[0];
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      // image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    paragraphs.forEach((paragraph, index) => {
      formData.append(`paragraph${index + 1}`, paragraph);
    });

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    try {
      let response;
      if (editingDevotion) {
        response = await instance.put(
          `/devotion/${editingDevotion._id}`,
          formData
        );
      } else {
        response = await instance.post("/devotion/create", formData);
      }

      console.log(response);

      const devotionsResponse = await instance.get("/devotion/show");
      setDevotions(devotionsResponse.data);

      setForm({
        month: "",
        day: "",
        title: "",
        chapter: "",
        verse: "",
        prayer: "",
      });
      setParagraphs([]);
      setSelectedFile(null);
      setPreviewUrl("");
      setFormSubmitCount(formSubmitCount + 1);
      setEditingDevotion(null); // Reset the editing devotion
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
      await instance.delete(`/devotion/${id}`);
      // Remove the deleted devotion from the devotions array
      setDevotions(devotions.filter((devotion) => devotion._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // useState for Photo preview
  const [selectedFile, setSelectedFile] = useState(null);
  // eslint-disable-next-line no-unused-vars
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
    console.log(role);
  };

  return (
    <div className="flex h-auto mt-12 mx-auto justify-center">
      <div className="w-2/4 ">
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
          key={formSubmitCount}
        />
      </div>
    </div>
  );
};

export default CreateDevotion;
