import React, { useState } from 'react';

type SelectProps = {
  options: string[];
  value?: number | string;
  style?: React.CSSProperties;
};

const Select = ({ options, style }: SelectProps) => {
  const [isShowingDropdown, setIsShowingDropdown] = useState(false);

  const toggleDropdown = () => {
    setIsShowingDropdown((state) => !state);
  };
  return (
    <>
      <div className="relative">
        <button
          className="px-2 py-1 bg-gray-100 text-left text-sm hover:bg-gray-50 focus:outline-none"
          style={{ width: style?.width ?? '160px' }}
          onClick={toggleDropdown}
        >
          Dropdown
        </button>
        {isShowingDropdown ? (
          <div className="absolute flex flex-col bg-white shadow" id="dropdownMenu">
            {options.map((option, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="p-2 text-gray-700 hover:bg-gray-100"
                  style={{ width: style?.width ?? '160px' }}
                >
                  {option}
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Select;
