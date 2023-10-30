import Header from "./components/Header";
import AddCourse from "./components/AddCourse";

function App() {
  return (
    <>
      <div className="container flex flex-col justify-center mx-auto">
        <Header />
        <div className="container flex justify-between px-12  space-x-12 mt-12">
          <AddCourse />
        </div>
      </div>
    </>
  );
}

export default App;
