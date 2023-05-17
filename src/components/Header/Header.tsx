import { Link } from "react-router-dom";
// import UserMenu from "../UserMenu";

const Header = (props: any) => {
  return (
    <header>
      <div className="links-container">
        <Link to="/ex1" className="link">
          Ex1
        </Link>
        <Link to="/ex2" className="link">
          Ex2
        </Link>
        <Link to="/ex3" className="link">
          Ex3
        </Link>
      </div>
      <div className="usermenu-container">
        {/* <UserMenu name={props.user.name} img={props.user.img} /> */}
      </div>
    </header>
  );
};

export default Header;
