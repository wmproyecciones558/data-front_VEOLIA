import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src="/public/veolia.jpg" className="logo"></img>
        <div className="loguot">Loguot</div>
      </div>
    </>
  );
};

export default Navbar;
