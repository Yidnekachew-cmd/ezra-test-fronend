function ElementsAdd() {
  return (
    <div className="bg-white w-[16%] p-6">
      <p>Insert Element</p>
      <div>
        <select name="elements" id="elements">
          <option value="">Choose Type</option>
          <option value="title">title</option>
          <option value="sub">sub</option>
          <option value="img">img</option>
        </select>
        <button className="px-2 font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600">
          Add
        </button>
      </div>
    </div>
  );
}

export default ElementsAdd;
