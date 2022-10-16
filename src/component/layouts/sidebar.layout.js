import Home from "../images/Home.png";
import Cart from "../images/cart.png";
import Heart from "../images/heart.png";
import Library from "../images/library.png";
import "./style.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-custom">
        <article className="sidebar-icon">
          <a href="/">
            <img src={Home} alt="Logo-home" className="sidebar-link"></img>
          </a>
        </article>

        <article className="sidebar-icon">
          <a href="/wishtlist">
            <img src={Heart} alt="Logo-heart" className="sidebar-link"></img>
          </a>
        </article>

        <article className="sidebar-icon">
          <a href="/cart">
            <img src={Cart} alt="Logo-cart" className="sidebar-link"></img>
          </a>
        </article>

        <article className="sidebar-icon">
          <a href="/library">
            <img src={Library} alt="Logo-library" className="sidebar-link"></img>
          </a>
        </article>
      </div>
    </>
  );
};

export default Sidebar;