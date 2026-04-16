import React from "react";
import cx from "classix";
import { BiSearch } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

export const ProjectSearch = ({ value, onChange }: ProjectSearchProps): JSX.Element => {
  const clearSearch = () => onChange("");
  const renderIcon = (): JSX.Element => {
    return value.length === 0 ? <SearchIcon /> : <ClearIcon onClick={clearSearch} />;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return (
    <div className="relative w-fit">
      <input
        type="text"
        name="search"
        value={value}
        placeholder="Search projects, tasks..."
        onChange={handleChange}
        aria-label="Search projects and tasks"
        className={cx(
          "h-[40px] w-[220px] rounded border-none bg-background-input py-2 hover:bg-background-input-hovered",
          "border-1 box-border pl-2 pr-8 outline outline-2 outline-border-input duration-200 ease-in-out",
          "placeholder:font-primary-light placeholder:text-xs placeholder:text-font-subtlest",
          "placeholder:duration-200 placeholder:ease-in-out focus:w-[300px]",
          "focus:bg-background-input-pressed focus:shadow-blue focus:outline-border-brand"
        )}
      />
      <span className="absolute right-0 top-1/2 -translate-y-1/2 px-2">{renderIcon()}</span>
    </div>
  );
};

const iconBaseClass = cx("flex border-none justify-center items-center font-icon z-10");

const SearchIcon = (): JSX.Element => (
  <span className={iconBaseClass}>
    <BiSearch size={16} />
  </span>
);

const ClearIcon = ({ onClick }: ClearIconProps): JSX.Element => (
  <button
    onMouseDown={onClick}
    className={cx(iconBaseClass, "cursor-pointer rounded hover:bg-background-neutral")}
    aria-label="Clear search"
  >
    <IoCloseOutline size={16} />
  </button>
);

interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
}

interface ClearIconProps {
  onClick: () => void;
}
