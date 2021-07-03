import "../../css/appHeader.css";

/**
 * appHeader component
 * @returns AppHeader Component
 */

function AppHeader() {
  return (
    <div className="p-7 header-border-style">
      <h1 className="text-gray-300 text-3xl font-bold">Trending</h1>
      <h4 className="text-gray-300 text-sm mt-2 text-gray-500">
        See what the Github community is most excited about today.
      </h4>
    </div>
  );
}

export default AppHeader;
