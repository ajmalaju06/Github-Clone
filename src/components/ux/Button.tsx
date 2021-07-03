import React from "react";
import "../../css/button.css";

interface ButttonProps {
  name: string;
  iconName: string;
  color: string;
}

/**
 * button component
 * @param {name, iconName, color}
 * @returns Button Component
 */

const Button: React.FC<ButttonProps> = ({ name, iconName, color }) => {
  return (
    <div className="button-container-style bg-gray-800 text-sm p-1 flex justify-center items-center mr-3">
      {iconName !== "" ? (
        <i className={`${iconName} ${color} text-xs mr-2`}></i>
      ) : (
        ""
      )}
      <span className="text-gray-400 text-xs font-semibold">{name}</span>
    </div>
  );
};

Button.defaultProps = {
  name: "",
  iconName: "",
  color: "",
};

export default Button;
