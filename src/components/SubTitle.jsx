import { useState } from "react";
import axios from "axios";

function SubTitle() {
  const [elements, setElements] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const imageIds = []; // Create an array to store the ids of image elements

    elements.forEach((element) => {
      if (element.type === "img") {
        formData.append("images", element.value); // Add the image file to "images" field
        imageIds.push(element.id); // Add the id of the image to the "imageIds" array
      } else {
        formData.append(element.id, element.value); // Add the value of the element to the corresponding id field
      }
    });

    // Append the "imageIds" array to the FormData
    formData.append("imageIds", JSON.stringify(imageIds));

    // Send the elements array to the backend
    axios
      .post("/course/create", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleTitleButton = () => {
    const newElement = {
      type: "title",
      id: `title${elements.filter((el) => el.type === "title").length + 1}`,
      value: "",
    };
    setElements((prevElements) => [...prevElements, newElement]);
  };

  const handleSubButton = () => {
    const newElement = {
      type: "sub",
      id: `sub${elements.filter((el) => el.type === "sub").length + 1}`,
      value: "",
    };
    setElements((prevElements) => [...prevElements, newElement]);
  };

  const handleImgButton = () => {
    const newElement = {
      type: "img",
      id: `img${elements.filter((el) => el.type === "img").length + 1}`,
      value: "",
    };
    setElements((prevElements) => [...prevElements, newElement]);
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
    };
    setElements((prevElements) =>
      prevElements.map((el) => (el.id === id ? { ...el, ...imageObject } : el))
    );
  };

  return (
    <div>
      <button
        className="bg-blue-500 rounded px-2 md:px-2 md:py-1 text-white mx-2"
        onClick={handleTitleButton}
      >
        Add Title
      </button>
      <button
        className="bg-blue-500 rounded px-2 md:px-2 md:py-1 text-white"
        onClick={handleSubButton}
      >
        Add Sub
      </button>
      <button
        className="bg-blue-500 rounded px-2 md:px-2 md:py-1 text-white"
        onClick={handleImgButton}
      >
        Add Image
      </button>
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