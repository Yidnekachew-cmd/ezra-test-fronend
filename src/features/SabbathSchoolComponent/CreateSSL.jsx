const CreateSSL = () => {
  return (
    <div className="flex gap-4 w-[80%] h-screen mx-auto my-4">
      <div className="w-[70%] border border-accent-6 rounded-lg">
        <p className="px-2 py-2 font-nokia-bold text-xl text-accent-6">
          Create Sabbath School Lesson
        </p>
        <div className="flex justify-between">
          <div className="">
            <select>
              <option value="1">የእግዚአብሔርን ተልዕኮ...</option>
              <option value="1">የእግዚአብሔርን ተልዕኮ...</option>
              <option value="1">የእግዚአብሔርን ተልዕኮ...</option>
            </select>
            <select>
              <option value="1">Week 1</option>
              <option value="1">Week 2</option>
              <option value="1">Week 3</option>
            </select>
            <select>
              <option value="1">Sabbath</option>
              <option value="1">Day 1</option>
              <option value="1">Day 2</option>
              <option value="1">Day 3</option>
              <option value="1">Day 4</option>
              <option value="1">Day 5</option>
              <option value="1">Further Thought</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-[30%] border border-accent-6 rounded-lg"></div>
    </div>
  );
};

export default CreateSSL;
