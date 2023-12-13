import { useState } from "react";

function AddElements() {
  const [elements, setElements] = useState([]);
  const [currentElement, setCurrentElement] = useState("");

  const handleDropdownChange = (e) => {
    setCurrentElement(e.target.value);
  };

  const handleAddButtonClick = () => {
    console.log(elements);
    if (currentElement) {
      setElements([
        ...elements,
        {
          type: currentElement,
          id: `${currentElement}${elements.length + 1}`,
          value: "",
        },
      ]);
      setCurrentElement(""); // Reset dropdown if needed
    }
  };

  const handleInputChange = (id, value) => {
    setElements(
      elements.map((el) => (el.id === id ? { ...el, value: value } : el))
    );
  };

  return (
    <div className="bg-white w-[16%] p-6">
      <p className="font-bold py-2">Insert Element</p>
      <div className="flex justify-between">
        <select
          name="elements"
          id="elements"
          value={currentElement}
          onChange={handleDropdownChange}
          className="border-2 border-accent-6 rounded-lg"
        >
          <option value="">Choose Type</option>
          <option value="title">title</option>
          <option value="sub">sub</option>
          <option value="img">img</option>
        </select>
        <button
          onClick={handleAddButtonClick}
          className="px-2 font-semibold text-white bg-accent-6 rounded-md hover:bg-accent-7"
        >
          Add
        </button>
      </div>

      {elements.map((element, index) => (
        <div key={index} className="py-2">
          <div className="flex justify-between items-center pb-2">
            <label className="text-accent-6 font-bold">{element.type}</label>
            <button className="flex items-center text-orange-400 hover:text-accent-6">
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
          <input
            id={element.id}
            placeholder={`Enter ${element.type}`}
            value={element.value}
            onChange={(e) => handleInputChange(element.id, e.target.value)}
            className="w-full border-2 border-accent-6 rounded-lg text-accent-6 font-bold pl-4"
          />
        </div>
      ))}
    </div>
  );
}

export default AddElements;
