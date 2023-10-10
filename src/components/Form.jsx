import TextEditor from "./TextEditor"
const Form = () => {
    return (
        <div className="hidden md:block border border-blue-200 w-1/3 h-auto rounded mx-auto ">
            <form action="" className="p-3 md:flex flex-col justify-start space-y-3 ">
                
                <input type="text" placeholder="Heading" className=" px-2 border border-blue-100 rounded outline-slate-500 "/>
                <TextEditor />
                <button className=" bg-blue-500 self-end w-1/3 rounded items-end">
                    <h3 className="text-white">
                        Create
                    </h3>
                </button>
            </form>
        </div>
    )
}

export default Form