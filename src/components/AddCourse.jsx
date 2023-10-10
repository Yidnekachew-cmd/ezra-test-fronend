import { useState } from "react"

import DisplayCourse from "./DisplayCourse";
import Form from "./Form";

const AddCourse = () => {
    const [show, setShow] = useState(false);
    const addCourse = () => {
        setShow(true);
    }
     
  return (
    <div className=" container ">
      <button className="bg-blue-500 rounded px-12 md:px-2 md:py-1" onClick={addCourse}>
        <h3 className="text-white">
            Add Course
        </h3>
      </button>
      {
        show && (
            <div className="container flex justify-between pl-32  space-x-6 mt-12 ">
                <DisplayCourse />
                <Form />
            </div>
        )
      }
    </div>
  )
}

export default AddCourse