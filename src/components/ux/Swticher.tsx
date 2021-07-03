import React from "react";
import "../../css/switcher.css";
import { TabItem } from "../../data/menu";

interface Switcher {
  selectedItem: number;
  setSelectedItem: Function;
}

/**
 * switcher component
 * @param {selectedItem, setSelectedItem } ,
 * @returns Swticher Component
 */
const Switcher: React.FC<Switcher> = ({ selectedItem, setSelectedItem }) => {
  return (
    <div className="switcher-container-style">
      <ul>
        {TabItem.map((e, index) => {
          const active = selectedItem === index ? "active" : "";
          return (
            <li className={active} onClick={() => setSelectedItem(index)}>
              {e.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Switcher.defaultProps = {
  selectedItem: 0,
  setSelectedItem: () => {},
};

export default Switcher;
