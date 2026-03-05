import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "FAQ", link: "/" },
    { label: "Changelog", link: "/" },
    { label: "Blog", link: "/" },
    { label: "Download", link: "/" },
    { label: "Contact", link: "/" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                <a className="hover:cursor-pointer">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost lg:text-xl">CS — Ticket System</a>
      </div>
      <div className="navbar-end flex justify-end items-center">
        <div className="hidden lg:flex">
          <ul className="flex px-2 gap-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a className="hover:cursor-pointer">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <a className="flex justify-center items-center gap-1 text-xs xl:text-base bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-1 xl:px-3 py-2 rounded-md ">
            <FaPlus /> New Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
