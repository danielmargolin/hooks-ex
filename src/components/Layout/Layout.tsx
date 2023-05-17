import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";

import { User } from "../UserMenu/types";

const Layout = () => {
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    setUser({
        name: "Elon",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
    })
  }, []);

  return (
    <div className="layout">
      <Header user={user} />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
