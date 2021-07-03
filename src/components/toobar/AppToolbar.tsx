import "../../css/appToolbarStyle.css";
import Switcher from "../ux/Swticher";
import Dropdown from "../ux/Dropdown";

interface AppToolbarProps {
  selectedItem: number;
  setSelectedItem: Function;
}

/**
 * appToolbar component
 * @param {selectedItem, setSelectedItem}
 * @returns AppToolbar Component
 */

const AppToolbar: React.FC<AppToolbarProps> = ({
  selectedItem,
  setSelectedItem,
}) => {
  return (
    <div className="p-3 bg-gray-900 toolbar-border-style flex">
      <div className="flex flex-1 pl-1">
        <Switcher
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
      <div className="flex flex-1 justify-end">
        {selectedItem === 0 && <Dropdown name="Spoken Language" />}
        <Dropdown name="Language" />
        <Dropdown name="Date Range" />
      </div>
    </div>
  );
};

AppToolbar.defaultProps = {
  selectedItem: 0,
  setSelectedItem: () => {},
};

export default AppToolbar;
