import { useState } from "react";
import TextEditor from "./TextEditor";
import axios from "axios";

const Form = () => {
  const [data, setData] = useState({
    title: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/course/create", data)
      .then((res) => {
        window.location.reload(true);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hidden md:block border border-blue-200 w-1/3 h-auto rounded mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="p-3 md:flex flex-col justify-start space-y-3 "
      >
        <input
          type="text"
          name="title"
          placeholder="Heading"
          className=" px-2 border border-blue-100 rounded outline-slate-500 "
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextEditor />
        <button
          type="submit"
          className=" bg-blue-500 self-end w-1/3 rounded items-end"
        >
          <h3 className="text-white">Create</h3>
        </button>
      </form>
    </div>
  );
};

export default Form;
