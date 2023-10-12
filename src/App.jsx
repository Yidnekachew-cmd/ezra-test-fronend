// import { useState } from "react";
// import './App.css'
import Header from "./components/Header";
// import Form from './components/Form'
import AddCourse from "./components/AddCourse";
// import DisplayCourse from './components/DisplayCourse'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container flex flex-col justify-center mx-auto">
        <Header />
        <div className="container flex justify-between px-12  space-x-12 mt-12">
          <AddCourse />
          {/* <DisplayCourse />
          <Form /> */}
        </div>
      </div>
    </>
  );
}

export default App;
