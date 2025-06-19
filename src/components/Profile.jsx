import "../blocks/Profile.css";
import ClothesSection from "./ClothesSection";
import SideBar from "./SideBar";

function Profile({
  handleCardClick,
  clothingItems,
  handleAddClick,
  setIsLoggedIn,
  userData,
  getInitial,
  showPlaceholder,
  setImageError,
  handleEditProfileClick,
  onCardLike,
}) {
  return (
    <section className="profile">
      <SideBar
        setIsLoggedIn={setIsLoggedIn}
        className="profile__user-section"
        getInitial={getInitial}
        showPlaceholder={showPlaceholder}
        setImageError={setImageError}
        userData={userData}
        handleEditProfileClick={handleEditProfileClick}
      />
      <ClothesSection
        className="profile__header"
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
        currentUser={userData}
        onCardLike={onCardLike}
      />
    </section>
  );
}

export default Profile;
