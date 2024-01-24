import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

type Option = {
  value: number | string;
  display: string;
};

type SelectProps = {
  options: Option[];
  value: number | string;
  onSelect: Dispatch<SetStateAction<number | string>>;
  style?: React.CSSProperties;
};

type MappedObject = {
  [value: string]: Option;
};

const Select = ({ value, options, style, onSelect }: SelectProps) => {
  const [mappedOptions, setMappedOptions] = useState<MappedObject>({});
  const [isShowingDropdown, setIsShowingDropdown] = useState(false);
  const selectWrapper = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsShowingDropdown((state) => !state);
  };

  const handleSelectOption = (value: number | string) => {
    setIsShowingDropdown(false);
    onSelect(value);
  };

  useEffect(() => {
    const obj = options.reduce((a: MappedObject, c) => ({ ...a, [c.value]: c }), {});
    setMappedOptions(obj);
  }, [options]);

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
          <span className="text-sm">{mappedOptions[value]?.display}</span>
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
                  onClick={() => handleSelectOption(option.value)}
                >
                  {option.display}
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
