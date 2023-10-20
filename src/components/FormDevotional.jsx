import { useState } from 'react'
import axios from 'axios'
const FormDevotional = () => {
    

    // state object to hold the form data 
   const [state, setState] = useState({
        title: '',
        mainScripture: '', 
        content: '',
        prayer: '',
        image: "",
    })

    // handle change function to update the state
    const handleChange = (e) => {
        setState((state) => ({
            ...state, [e.target.name]: e.target.value
        }))
    }
 

    // form submit handler
    const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post('/devotional/create', state)
    .then((res) => {
        window.location.reload(true);
        console.log(res);
    })
    .catch((err) =>  console.log(err));
  };

  return (
    <div className='container mx-auto flex justify-center items-center bg-gray-100 rounded mt-12'>
        
        <div div className='containermx-auto  p-4 w-2/3'>
            <h1 className='font-bold text-center pb-5'>
                Devotional Form
            </h1>
            <form action="" onSubmit={handleSubmit}  className='bg-gray-200 p-5 w-[80%] container mx-auto rounded pb-6'>
        
                <label>
                    Title: <input name="title" type="text" value={state.title} onChange={handleChange} placeholder='Title' className='px-2 py-1 w-[100%]' />
                </label>
                <br />
                <label>
                    Main Scripture: <input name="mainScripture" type="text" value={state.mainScripture} onChange={handleChange} placeholder='Main Scripture' className='px-2 py-1 w-[100%]' />
                </label>
                <br />
                <label>
                Content:
                <textarea
                name="content"
                value={state.content}
                onChange={handleChange}
                className='w-[100%]'
                />
            </label>
            <br />
            <label>
                Prayer:
                <textarea
                name="prayer"
                value={state.prayer}
                onChange={handleChange}
                className='w-[100%]'
                />
            </label>
            <br />
        <label>
            <input
            type="file"
            name="image"
            value={state.image}
            accept='image/*'
            onChange={handleChange}
            />
        </label>
        <br />
        <button className='bg-blue-300 rounded px-2 mt-3 cursor-pointer' type='submit'>Create</button>
            </form>
        </div>
        <div className='container w-[50%] p-4'>
            <h5>
               Title : {state.title}
            
            </h5>
            <h5>
            Main Script : {state.mainScripture}
            </h5>
            <p> Content: {state.content}</p>
            <h5>Prayer: {state.prayer}</h5>
            <h5>Image : {state.image}</h5>
        </div>
    </div>
  )
}

export default FormDevotional