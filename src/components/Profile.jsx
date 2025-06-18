import "../blocks/Profile.css";
import ClothesSection from "./ClothesSection";
import SideBar from "./SideBar";

function Profile({
  handleCardClick,
  clothingItems,
  handleAddClick,
  setIsLoggedIn,
}) {
  return (
    <section className="profile">
      <SideBar
        setIsLoggedIn={setIsLoggedIn}
        className="profile__user-section"
      />
      <ClothesSection
        className="profile__header"
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
      />
    </section>
  );
}

export default Profile;
