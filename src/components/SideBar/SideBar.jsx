import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Sidebar({ handleSignOut, handleEditModal }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__header ">
        <img
          className="sidebar__avatar"
          src={currentUser.avatar}
          alt="user avatar"
        />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <button
        className="sidebar__profile-edit-btn"
        type="button"
        onClick={handleEditModal}
      >
        Edit Profile
      </button>
      <button className="sidebar__logout" type="button" onClick={handleSignOut}>
        Log out
      </button>
    </div>
  );
}

export default Sidebar;
