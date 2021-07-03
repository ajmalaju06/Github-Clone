import React from "react";
import "../../css/avatar.css";

interface AvatarProps {
  size: string;
  avatarName: string;
  avatarLink: string;
}

const openWindow = (url: any) => {
  window.open(url);
};

/**
 * avatar component
 * @param {size, avatarName, avatarLink}
 * @returns Avatar Component
 */

const Avatar: React.FC<AvatarProps> = ({ size, avatarName, avatarLink }) => {
  return (
    <figure className="avatar-container-style">
      <a
        className="select-none cursor-pointer"
        onClick={() => openWindow(avatarLink)}
      >
        <img className={`rounded-full ml-2 ${size}`} src={avatarName}></img>
      </a>
    </figure>
  );
};

Avatar.defaultProps = {
  size: "",
  avatarName: "",
  avatarLink: "",
};

export default Avatar;
