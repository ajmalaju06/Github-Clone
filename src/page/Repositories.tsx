import React, { useEffect } from "react";
import "../css/repositories.css";
import Avatar from "../components/ux/Avatar";
import Button from "../components/ux/Button";
import { useQuery } from "react-query";

/**
 * repositories component
 * @returns Repositories Component
 */

function Repositories() {
  const { status, error, data } = useQuery("repositories", () =>
    fetch("https://gh-trending-api.herokuapp.com/repositories").then((res) =>
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
            <div className="p-4 repositories-border-style">
              <div className="flex items-center">
                <i className="fas fa-bookmark ml-1 text-gray-400 text-xs"></i>
                <div className="flex flex-1">
                  <h2 className="repositories-username-style ml-3">
                    {e.username} /{" "}
                  </h2>
                  <a
                    className="select-none cursor-pointer"
                    onClick={() => openWindow(e.url)}
                  >
                    <h2 className="repositories-username-style ml-2 font-bold">
                      {e.repositoryName}
                    </h2>
                  </a>
                </div>
                <div className="flex">
                  <Button
                    iconName="far fa-heart"
                    name="Sponser"
                    color="text-red-500"
                  />
                  <Button
                    iconName="far fa-star"
                    name="Star"
                    color="text-gray-400"
                  />
                </div>
              </div>
              <div className="flex mt-2">
                <p className="text-gray-400 text-sm text-left w-9/12">
                  {e.description}
                </p>
              </div>
              <div className="flex mt-2 items-center">
                <div className="flex flex-1 items-center">
                  <span className="text-gray-400 text-sm">{e.language}</span>
                  <div className="ml-5">
                    <i className="far fa-star text-gray-400 text-xs"></i>
                    <span className="text-gray-400 text-sm ml-2">
                      {e.totalStars}
                    </span>
                  </div>
                  <div className="ml-5">
                    <i className="fas fa-code-branch ml-1 text-gray-400 text-xs"></i>
                    <span className="text-gray-400 text-sm ml-2">
                      {e.forks}
                    </span>
                  </div>
                  <div className="ml-5 flex items-center">
                    <span className="text-gray-400 text-sm ml-2">Built by</span>
                    {e.builtBy.map((e: any) => {
                      return (
                        <Avatar
                          size="small"
                          avatarName={e.avatar}
                          avatarLink={e.url}
                        />
                      );
                    })}
                  </div>
                </div>
                <div>
                  <div className="ml-5">
                    <i className="far fa-star text-gray-400 text-xs"></i>
                    <span className="text-gray-400 text-sm ml-2 mr-3">
                      {e.starsSince} starts today
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Repositories;
