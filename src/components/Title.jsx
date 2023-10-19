import { useState } from "react";

function Title() {
  const [showTitle1, setShowTitle1] = useState(false);
  const [showTitle2, setShowTitle2] = useState(false);
  const [showSub1, setShowSub1] = useState(false);
  const [showSub2, setShowSub2] = useState(false);
  const [formData, setFormData] = useState({
    title: [{ title1: "", title2: "" }],
    sub: [{ sub1: "", sub2: "" }],
  });

  const handleTitleButton = () => {
    if (!showTitle1) {
      setShowTitle1(true);
    } else if (showTitle1 && !showTitle2) {
      setShowTitle2(true);
    }
  };

  const handleSubButton = () => {
    if (!showSub1) {
      setShowSub1(true);
    } else if (showSub1 && !showSub2) {
      setShowSub2(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      title: [{ ...formData.title[0], [name]: value }],
      sub: [{ ...formData.sub[0], [name]: value }],
    });
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
      <div className="flex flex-col w-[10%]">
        {showTitle1 && (
          <input
            type="text"
            name="title1"
            placeholder="Title 1"
            className="px-2 border border-blue-100 rounded outline-slate-500 my-2"
            value={formData.title[0].title1}
            onChange={handleInputChange}
          />
        )}

        {showTitle2 && (
          <input
            type="text"
            name="title2"
            placeholder="Title 2"
            className="px-2 border border-blue-100 rounded outline-slate-500 my-2"
            value={formData.title[0].title2}
            onChange={handleInputChange}
          />
        )}
      </div>
      <div className="flex flex-col w-[10%]">
        {showSub1 && (
          <input
            type="text"
            name="title1"
            placeholder="Sub 1"
            className="px-2 border border-blue-100 rounded outline-slate-500 my-2"
            value={formData.sub[0].sub1}
            onChange={handleInputChange}
          />
        )}

        {showSub2 && (
          <input
            type="text"
            name="title2"
            placeholder="Sub 2"
            className="px-2 border border-blue-100 rounded outline-slate-500 my-2"
            value={formData.sub[0].sub2}
            onChange={handleInputChange}
          />
        )}
      </div>
    </div>
  );
}

export default Title;
