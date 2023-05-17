import { User } from "./types";

const UserMenu = ({ img, name }: User) => {
  return (
    <div className="usermenu">
      <img src={img} alt={name} />
      <h5>{name}</h5>
    </div>
  );
};

export default UserMenu;
