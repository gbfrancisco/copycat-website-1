import React, { useEffect, useRef, useState } from 'react';

type SelectProps = {
  options: string[];
  value?: number | string;
  style?: React.CSSProperties;
};

const Select = ({ options, style }: SelectProps) => {
  const [isShowingDropdown, setIsShowingDropdown] = useState(false);
  const selectWrapper = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsShowingDropdown((state) => !state);
  };

  useEffect(() => {
    const handleHideOptions = (event: MouseEvent) => {
      const element = event.target as Node;
      if (selectWrapper.current && !selectWrapper.current.contains(element)) {
        setIsShowingDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleHideOptions);

    return () => {
      document.removeEventListener('mousedown', handleHideOptions);
    };
  }, [selectWrapper]);

  return (
    <>
      <div ref={selectWrapper} className="relative">
        <button
          className="px-2 py-1 bg-gray-100 text-left flex justify-between hover:bg-gray-50 focus:outline-none"
          style={{ width: style?.width ?? '160px' }}
          onClick={toggleDropdown}
        >
          <span className="text-sm">Dropdown</span>
          <svg className="h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
              transform="rotate(90 12 12)"
              fill="currentColor"
            />
          </svg>
        </button>
        {isShowingDropdown ? (
          <div className="absolute flex flex-col bg-white shadow" id="dropdownMenu">
            {options.map((option, index) => {
              return (
                <button
                  key={index}
                  className="p-2 text-gray-700 text-sm text-left hover:bg-gray-100"
                  style={{ width: style?.width ?? '160px' }}
                >
                  {option}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Select;
