const Header = () => {
  return (
    <nav>
      <div className="container flex justify-between mt-6 px-12 items-center">
        <div className=" cursor-pointer ">
          <h3>
            <strong className="text-2xl">Ezra</strong> Seminary
          </h3>
        </div>
        <button className="hidden md:flex space-x-4">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Sabbath School</a>
          <a href="#">Devotion</a>
          <a href="#">About Us</a>
        </button>
      </div>
    </nav>
  );
};

export default Header;
