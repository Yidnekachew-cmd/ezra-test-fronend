import { useState } from "react";

function ElementsAdd() {
  const [elements, setElements] = useState([]);
  const [currentElement, setCurrentElement] = useState("");

  const handleDropdownChange = (e) => {
    setCurrentElement(e.target.value);
  };

  const handleAddButtonClick = () => {
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
    console.log(elements);
  };

  const handleInputChange = (id, value) => {
    setElements(
      elements.map((el) => (el.id === id ? { ...el, value: value } : el))
    );
  };

  return (
    <div className="bg-white w-[16%] p-6">
      <p>Insert Element</p>
      <div>
        <select
          name="elements"
          id="elements"
          value={currentElement}
          onChange={handleDropdownChange}
        >
          <option value="">Choose Type</option>
          <option value="title">title</option>
          <option value="sub">sub</option>
          <option value="img">img</option>
        </select>
        <button
          onClick={handleAddButtonClick}
          className="px-2 font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600"
        >
          Add
        </button>
      </div>
      {elements.map((element, index) => (
        <input
          key={index}
          id={element.id}
          placeholder={`Enter ${element.type}`}
          value={element.value}
          onChange={(e) => handleInputChange(element.id, e.target.value)}
        />
      ))}
    </div>
  );
}

export default ElementsAdd;
