import { useState } from "react";
import axios from "axios";

function SubTitle() {
  const [elements, setElements] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = elements.reduce(
      (acc, el) => {
        if (el.type === "title") {
          acc.title = [...acc.title, { [el.id]: el.value }];
        } else if (el.type === "sub") {
          acc.sub = [...acc.sub, { [el.id]: el.value }];
        }
        return acc;
      },
      { title: [], sub: [] }
    );
    console.log(formData);
    // Send the formData object to the backend
    axios
      .post("/course/create", formData)
      .then((res) => {
        window.location.reload(true);
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

  const handleInputChange = (id, value) => {
    setElements((prevElements) =>
      prevElements.map((el) => (el.id === id ? { ...el, value: value } : el))
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
      <form
        onSubmit={handleSubmit}
        className="p-3 md:flex flex-col justify-start space-y-3"
      >
        {elements.map((element) => (
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
