import "../blocks/Profile.css";
import ClothesSection from "./ClothesSection";
import SideBar from "./SideBar";

function Profile({
  handleCardClick,
  clothingItems,
  handleAddClick,
  setIsLoggedIn,
  getInitial,
  showPlaceholder,
  setImageError,
  handleEditProfileClick,
  onCardLike,
  isLoggedIn,
}) {
  return (
    <section className="profile">
      <SideBar
        setIsLoggedIn={setIsLoggedIn}
        className="profile__user-section"
        getInitial={getInitial}
        showPlaceholder={showPlaceholder}
        setImageError={setImageError}
        handleEditProfileClick={handleEditProfileClick}
      />
      <ClothesSection
        className="profile__header"
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
        onCardLike={onCardLike}
        isLoggedIn={isLoggedIn}
      />
    </section>
  );
}

export default Profile;
