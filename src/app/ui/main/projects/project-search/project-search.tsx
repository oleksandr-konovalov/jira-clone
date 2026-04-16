import React, { useEffect, useState } from "react";
import { useSearchParams } from "@remix-run/react";
import cx from "classix";
import { BiSearch } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

// Debounce delay to avoid excessive server requests while user is typing
const SEARCH_DEBOUNCE_MS = 300;

export const ProjectSearch = ({
  initialValue,
}: ProjectSearchProps): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(initialValue || "");

  // Debounce search input to reduce server load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchValue) {
        searchParams.set("search", searchValue);
      } else {
        searchParams.delete("search");
      }
      setSearchParams(searchParams, { replace: true });
    }, SEARCH_DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [searchValue, searchParams, setSearchParams]);

  const clearSearch = () => setSearchValue("");

  const hasSearchValue = searchValue.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="relative w-fit">
      <input
        type="text"
        name="search"
        value={searchValue}
        placeholder="Search projects..."
        onChange={handleChange}
        className={cx(
          "h-[40px] w-[250px] rounded border-none bg-background-input py-2 hover:bg-background-input-hovered",
          "border-1 box-border pl-2 pr-8 outline outline-2 outline-border-input duration-200 ease-in-out",
          "placeholder:font-primary-light placeholder:text-xs placeholder:text-font-subtlest",
          "placeholder:duration-200 placeholder:ease-in-out focus:w-[350px]",
          "focus:bg-background-input-pressed focus:shadow-blue focus:outline-border-brand"
        )}
      />
      <span className="absolute right-0 top-1/2 -translate-y-1/2 px-2">
        {hasSearchValue ? <ClearIcon onClick={clearSearch} /> : <SearchIcon />}
      </span>
    </div>
  );
};

const iconBaseClass = cx(
  "flex border-none justify-center items-center font-icon z-10"
);

const SearchIcon = (): JSX.Element => (
  <span className={iconBaseClass}>
    <BiSearch size={16} />
  </span>
);

const ClearIcon = ({ onClick }: ClearIconProps): JSX.Element => (
  // Using onMouseDown instead of onClick because the input blur event
  // fires before click, which would prevent the click from being registered
  <button
    onMouseDown={onClick}
    className={cx(
      iconBaseClass,
      "cursor-pointer rounded hover:bg-background-neutral"
    )}
    aria-label="Clear search"
  >
    <IoCloseOutline size={16} />
  </button>
);

interface ProjectSearchProps {
  initialValue?: string;
}

interface ClearIconProps {
  onClick: () => void;
}
