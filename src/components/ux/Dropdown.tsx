import * as React from "react";

interface DropdownProps {
  name?: string;
}
/**
 * dropdown component
 * @param {name} ,
 * @returns Dropdown Component
 */
const Dropdown: React.FC<DropdownProps> = ({ name }) => {
  return (
    <div className="pr-5 flex items-center">
      <span className="text-gray-400 text-sm ">{name}:</span>
      <div className="flex">
        <span className="text-gray-400 text-sm font-bold ml-1">Any</span>
        <i className="fas fa-sort-down ml-1 text-gray-400"></i>
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  name: "",
};

export default Dropdown;
