import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
    const [content, setContent] = useState('');
    const handleContentChange = (newContent) => {
        setContent(newContent);
    };
    return (
        <div className="border  border-blue-200 rounded outline-slate-500" >
            {/* <ReactQuill value={content} onChange={handleContentChange} /> */}
            <ReactQuill
    value={content}
    onChange={handleContentChange}
    placeholder='Enter your text here...'
    modules={{
        toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'link'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        ['clean'],
        ],
    }}
    formats={[
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'link',
        'list',
        'bullet',
        'indent',
    ]}
/>
        </div>
    );
};


export default TextEditor;

