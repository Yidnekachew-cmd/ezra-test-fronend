import TextEditor from "./TextEditor";
import PropTypes from "prop-types"

const Form = ({data, setData}) => {

  
  return (
    <div className="hidden md:block border border-blue-200 w-1/3 h-auto rounded mx-auto ">
     
        <input
          type="text"
          name="title"
          placeholder="Heading"
          className=" px-2 border border-blue-100 rounded outline-slate-500 "
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextEditor />
       
    </div>
  );
};

Form.propTypes = {
  data: PropTypes.object.isRequired, // Specify the expected data prop as an object
  setData: PropTypes.func.isRequired, // Specify the expected setData prop as a function
};


export default Form;
