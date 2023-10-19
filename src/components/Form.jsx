import PropTypes from "prop-types";

const Form = ({ formData, setFormData }) => {
  return (
    <div className="hidden md:block border border-blue-200 w-1/3 h-auto rounded mx-auto ">
      <input
        type="text"
        name="title1"
        placeholder="Title 1"
        className="px-2 border border-blue-100 rounded outline-slate-500"
        onChange={(e) =>
          setFormData({
            ...formData,
            title: [{ ...formData.title[0], title1: e.target.value }],
          })
        }
      />

      <input
        type="text"
        name="title2"
        placeholder="Title 2"
        className="px-2 border border-blue-100 rounded outline-slate-500"
        onChange={(e) =>
          setFormData({
            ...formData,
            title: [{ ...formData.title[0], title2: e.target.value }],
          })
        }
      />
    </div>
  );
};

Form.propTypes = {
  formData: PropTypes.object.isRequired, // Specify the expected formData prop as an object
  setFormData: PropTypes.func.isRequired, // Specify the expected setFormData prop as a function
};

export default Form;
