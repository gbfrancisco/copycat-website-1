const Header = () => {
  return (
    <nav>
      <div className="header-language bg-yellow-400 py-5 px-3.5">
        <div className="max-w-[1200px] mx-auto">Language Stuff</div>
      </div>
      <div className="header-main bg-blue-400 py-7 px-3.5">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="header-main-logo flex items-center">
            <img
              alt="unilanguage"
              className="logo-image h-10 w-auto rounded-md items-center"
              src="/unilangauge.jpg"
            />
            <span className="logo-title ml-1 font-bold text-2xl tracking-wider">
              U&I Language
            </span>
          </div>
          <div className="header-main-buttons flex items-center">
            <button className="bg-gray-200 font-semibold text-md py-2.5 px-5 mx-2 border-4 border-yellow-400 rounded-xl">
              Instructor registration
            </button>
            <button className="bg-gray-200 font-semibold text-md py-2.5 px-5 mx-2 border-4 border-yellow-400 rounded-xl">
              Login
            </button>
            <button className="bg-yellow-400 font-semibold text-md py-2.5 px-5 mx-2 border-4 border-yellow-400 rounded-xl">
              Free membership registration
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
