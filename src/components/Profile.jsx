import "../blocks/Profile.css";
import ClothesSection from "./ClothesSection";
import SideBar from "./SideBar";

function Profile({ handleCardClick, clothingItems, handleAddClick }) {
  return (
    <section className="profile">
      <SideBar className="profile__user-section" />
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
