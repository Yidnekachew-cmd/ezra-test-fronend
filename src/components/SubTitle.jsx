import { useState } from "react";
import axios from "axios";

function SubTitle() {
  const [elements, setElements] = useState([]);
  const [selectedType, setSelectedType] = useState("title");

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleAddButton = () => {
    const newElement = {
      type: selectedType,
      id: `${selectedType}${elements.filter((el) => el.type === selectedType).length + 1}`,
      value: "",
    };
    setElements((prevElements) => [...prevElements, newElement]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const imageIds = [];

    elements.forEach((element) => {
      if (element.type === "img") {
        formData.append("images", element.value);
        imageIds.push(element.id);
      } else {
        formData.append(element.id, element.value);
      }
    });

    formData.append("imageIds", JSON.stringify(imageIds));

    axios
      .post("/course/create", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (id, value) => {
    setElements((prevElements) =>
      prevElements.map((el) => (el.id === id ? { ...el, value: value } : el))
    );
  };

  const handleImageChange = (id, img) => {
    const imageObject = {
      type: "img",
      id: id,
      value: img,
      img: img,
    };
    setElements((prevElements) =>
      prevElements.map((el) => (el.id === id ? { ...el, ...imageObject } : el))
    );
  };

  return (
    <div>
      <div className="flex items-center">
        <select
          value={selectedType}
          onChange={handleTypeChange}
          className="border p-2 rounded"
        >
          <option value="title">Title</option>
          <option value="sub">Sub</option>
          <option value="img">Image</option>
        </select>
        <button
          className="bg-blue-500 rounded px-2 md:px-2 md:py-1 text-white mx-2"
          onClick={handleAddButton}
        >
          Add
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-3 md:flex flex-col justify-start space-y-3"
      >
        {elements.map((element) => (
          <div key={element.id}>
            <label>{element.id}</label>
            {element.type === "img" ? (
              <input
                key={element.id}
                type="file"
                name={element.id}
                className="px-2 border border-blue-100 rounded outline-slate-500 my-2"
                onChange={(e) =>
                  handleImageChange(element.id, e.target.files[0])
                }
              />
            ) : (
              <input
                key={element.id}
                type="text"
                name={element.id}
                placeholder={`${
                  element.type.charAt(0).toUpperCase() + element.type.slice(1)
                } ${element.id.slice(-1)}`}
                className="px-2 border border-blue-100 rounded outline-slate-500 my-2"
                value={element.value}
                onChange={(e) => handleInputChange(element.id, e.target.value)}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 self-end w-1/3 rounded items-end text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SubTitle;
