import { useRef } from "react";
import cx from "classix";
import {
  Form,
  useSubmit,
  useSearchParams,
  useNavigate,
} from "@remix-run/react";
import { BiSearch } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

export const ProjectSearch = (): JSX.Element => {
  const submit = useSubmit();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  const query = searchParams.get("q") || "";

  // Navigate to base path to clear search params and reset the list
  const clearSearch = (): void => {
    navigate("/projects");
  };

  // Submit form on every keystroke for instant search feedback
  const handleChange = (): void => {
    if (formRef.current) {
      submit(formRef.current);
    }
  };

  const hasQuery = query.length > 0;

  return (
    <div className="relative w-fit">
      <Form method="get" ref={formRef}>
        <input
          type="text"
          name="q"
          defaultValue={query}
          placeholder="Search projects"
          onChange={handleChange}
          className={cx(
            "h-[40px] w-[200px] rounded border-none bg-background-input py-2 hover:bg-background-input-hovered",
            "border-1 box-border pl-2 pr-8 outline outline-2 outline-border-input duration-200 ease-in-out",
            "placeholder:font-primary-light placeholder:text-xs placeholder:text-font-subtlest",
            "placeholder:duration-200 placeholder:ease-in-out focus:w-[280px]",
            "focus:bg-background-input-pressed focus:shadow-blue focus:outline-border-brand"
          )}
        />
      </Form>
      <span className="absolute right-0 top-1/2 -translate-y-1/2 px-2">
        {hasQuery ? <ClearIcon onClick={clearSearch} /> : <SearchIcon />}
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
  // Use onMouseDown instead of onClick to prevent blur event from firing first,
  // which would cause the input to lose focus before the clear action triggers
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

interface ClearIconProps {
  onClick: () => void;
}
