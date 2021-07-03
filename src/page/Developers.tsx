import Avatar from "../components/ux/Avatar";
import "../css/developer.css";
import Button from "../components/ux/Button";
import { useQuery } from "react-query";

/**
 * developer Component
 * @returns Developer Component
 */

function Developers() {
  const { status, error, data } = useQuery("developers", () =>
    fetch("https://gh-trending-api.herokuapp.com/developers").then((res) =>
      res.json()
    )
  );

  if (error) {
    return <div>Error</div>;
  }

  const openWindow = (url: any) => {
    window.open(url);
  };

  return (
    <div>
      {data &&
        data.map((e: any) => {
          return (
            <div className="p-4 developer-border-style">
              <div className="flex">
                <div className="flex-1 flex pl-1">
                  <span className="text-gray-400 text-xs">{e.rank}</span>
                  <div className="ml-2">
                    <Avatar
                      size="large"
                      avatarName={e.avatar}
                      avatarLink={e.url}
                    />
                  </div>
                  <div className="ml-3 flex flex-col">
                    <a
                      className="select-none cursor-pointer"
                      onClick={() => openWindow(e.url)}
                    >
                      <h2 className="repositories-username-style font-bold flex">
                        {e.name}
                      </h2>
                    </a>
                    <span className="text-gray-400 text-xs flex">
                      {e.username}
                    </span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex items-center">
                    <i className="fas fa-fire text-yellow-600"></i>
                    <span className="text-gray-400 text-xs ml-3">
                      POPULAR REPO
                    </span>
                  </div>
                  <div className="flex items-center mt-2 items-center">
                    <i className="fas fa-bookmark text-gray-400 text-xs"></i>
                    <a
                      className="select-none cursor-pointer"
                      onClick={() => openWindow(e.url)}
                    >
                      <h2 className="ml-3 repositories-username-style font-bold">
                        {e.popularRepository.repositoryName}
                      </h2>
                    </a>
                  </div>
                  <div className="flex mt-1 ">
                    <span className="text-gray-400 text-xs text-left">
                      {e.popularRepository.description}
                    </span>
                  </div>
                </div>

                <div className="flex-1 flex h-7 justify-end">
                  <Button
                    iconName="far fa-heart"
                    name="Sponser"
                    color="text-red-500"
                  />

                  <Button iconName="" name="Follow" color="text-gray-400" />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Developers;
