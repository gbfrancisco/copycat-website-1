import { Link } from 'react-router-dom';
import Select from './Select.tsx';
import { useState } from 'react';

const Header = () => {
  const [languageSelectValue, setLanguageSelectValue] = useState<number | string>('en');
  const languages = [
    { value: 'en', display: 'English' },
    { value: 'ja', display: 'Japanese' },
    { value: 'ko', display: 'Korean' }
  ];

  return (
    <nav>
      <div className="header-language bg-yellow-400 py-5 px-3.5">
        <div className="language-selection-container flex justify-end">
          <Select
            value={languageSelectValue}
            options={languages}
            onSelect={setLanguageSelectValue}
            style={{ width: '110px' }}
          />
        </div>
      </div>
      <div className="header-main py-7 pb-3 px-3.5">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="header-main-logo flex items-center">
            <img alt="unilanguage" className="logo-image h-10 w-auto rounded-md items-center" src="/unilangauge.jpg" />
            <span className="logo-title ml-1 font-bold text-2xl tracking-wider">U&I Language</span>
          </div>
          <div className="header-main-buttons flex items-center">
            <button className="bg-gray-200 font-semibold text-md py-1.5 px-5 mx-2 border-4 border-yellow-400 rounded-xl">
              Instructor registration
            </button>
            <button className="bg-gray-200 font-semibold text-md py-1.5 px-5 mx-2 border-4 border-yellow-400 rounded-xl">
              Login
            </button>
            <button className="bg-yellow-400 font-semibold text-md py-1.5 px-5 mx-2 border-4 border-yellow-400 rounded-xl">
              Free membership registration
            </button>
          </div>
        </div>
      </div>
      <div className="header-sub-list py-4 px-3.5">
        <ul className="flex max-w-[1200px] mx-auto">
          <Link className="mr-14 py-1 font-semibold" to="/">
            Home
          </Link>
          <Link className="mr-14 py-1 font-semibold" to="/">
            Lesson board
          </Link>
          <Link className="mr-14 py-1 font-semibold" to="/">
            Instructor list
          </Link>
          <Link className="mr-14 py-1 font-semibold" to="/">
            Event
          </Link>
          <Link className="mr-14 py-1 font-semibold" to="/">
            Company info
          </Link>
          <Link className="py-1 font-semibold" to="/">
            Contact us
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
