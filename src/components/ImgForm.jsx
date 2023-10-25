import { useState } from "react";
import axios from "axios";

function ImgForm() {
  const [elements, setElements] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    elements.forEach((element) => {
      if (element.type === "image") {
        formData.append(element.id, element.value);
      } else {
        formData.append(element.id, element.value);
      }
    });

    axios
      .post("/course/create", formData)
      .then((res) => {
        window.location.reload(true);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleAddElement = (type) => {
    const newElement = {
      type,
      id: `${type}${elements.length + 1}`,
      value: "",
    };
    setElements((prevElements) => [...prevElements, newElement]);
  };

  const handleInputChange = (id, value) => {
    setElements((prevElements) =>
      prevElements.map((el) => (el.id === id ? { ...el, value: value } : el))
    );
  };

  const handleFileChange = (id, file) => {
    setElements((prevElements) =>
      prevElements.map((el) => (el.id === id ? { ...el, value: file } : el))
    );
  };

  return (
    <div>
      <button onClick={() => handleAddElement("title")}>Add Title</button>
      <button onClick={() => handleAddElement("sub")}>Add Sub</button>
      <button onClick={() => handleAddElement("image")}>Add Image</button>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {elements.map((element) => (
          <div key={element.id}>
            <label>{element.id}</label>
            {element.type === "image" ? (
              <input
                type="file"
                onChange={(e) =>
                  handleFileChange(element.id, e.target.files[0])
                }
              />
            ) : (
              <input
                type="text"
                value={element.value}
                onChange={(e) => handleInputChange(element.id, e.target.value)}
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ImgForm;
