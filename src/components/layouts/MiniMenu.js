import "../../sass/layouts/miniMenu.scss";

const MiniMenu = () => {
  return (
    <div className="mini-menu">
      <i class="fa-solid fa-arrows-turn-to-dots mini-menu-arrow"></i>

      <a className="fa-menu" href="#home">
        <i className="fa-solid fa-house-circle-check mini-menu-item"></i>
      </a>

      <a className="fa-menu" href="#contact">
        <i class="fa-solid fa-address-book mini-menu-item"></i>
      </a>

      <a className="mini-menu-container" href="#home">
        <i class="fa-solid fa-at mini-menu-item"></i>
      </a>
    </div>
  );
};

export default MiniMenu;
