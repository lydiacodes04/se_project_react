import Sidebar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  onCardClick,
  clothingItems,
  handleAddClick,
  handleSignOut,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <Sidebar handleSignOut={handleSignOut} />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
        />
      </section>
    </div>
  );
}

export default Profile;
