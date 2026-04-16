import React from "react";
import cx from "classix";
import { Form, useSubmit } from "@remix-run/react";
import { BiSearch } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

export const ProjectSearch = ({ initialSearch }: ProjectSearchProps): JSX.Element => {
  const submit = useSubmit();
  const [search, setSearch] = React.useState(initialSearch);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSearch(value);
    
    const formData = new FormData();
    formData.set("search", value);
    submit(formData, { method: "get" });
  };

  const clearSearch = () => {
    setSearch("");
    const formData = new FormData();
    formData.set("search", "");
    submit(formData, { method: "get" });
  };

  const renderIcon = (): JSX.Element => {
    return search.length === 0 ? (
      <SearchIcon />
    ) : (
      <ClearIcon onClick={clearSearch} />
    );
  };

  return (
    <Form method="get" className="relative w-fit">
      <input
        type="text"
        name="search"
        value={search}
        placeholder="Filter projects"
        onChange={handleChange}
        className={cx(
          "h-[40px] w-[120px] rounded border-none bg-background-input py-2 hover:bg-background-input-hovered",
          "border-1 box-border pl-2 pr-8 outline outline-2 outline-border-input duration-200 ease-in-out",
          "placeholder:font-primary-light placeholder:text-xs placeholder:text-font-subtlest",
          "placeholder:duration-200 placeholder:ease-in-out focus:w-[190px]",
          "focus:bg-background-input-pressed focus:shadow-blue focus:outline-border-brand"
        )}
      />
      <span className="absolute right-0 top-1/2 -translate-y-1/2 px-2">
        {renderIcon()}
      </span>
    </Form>
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
  // onMouseDown is needed because blur (unfocus) happens
  // before 'click' event, but not before 'onMouseDown'
  <button
    type="button"
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
  initialSearch: string;
}

interface ClearIconProps {
  onClick: () => void;
}
