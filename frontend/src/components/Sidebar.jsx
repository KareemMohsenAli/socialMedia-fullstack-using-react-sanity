import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { IoIoArrowForward } from "react-icons/io";
import logo from "../assets/logo.png";
import { categories } from "../utils/data.js";
const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize";
// const categories = [
//   { name: "Animals" },
//   { name: "wallpapers" },
//   { name: "Photography" },
//   { name: "Gaming" },
//   { name: "Coding" },
// ];


function Sidebar({ user, closeToggle }) {
  const handelCloseSidebar = () => {
    if (closeToggle) {
      closeToggle(false);
    }
  };
  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          onClick={handelCloseSidebar}
          to="/"
          className="px-5 gap-2 my-6 pt-1 w-190 items-center"
        >
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex flex-col gap-4 ">
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handelCloseSidebar}
            to="/"
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className="mt-2 px-5 text-base 2xl:text-xl">
            Discover Categories
          </h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink to={`/category/${category.name}`}
            className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
          onClick={handelCloseSidebar}
          key={category.name}
            >
                <img src={category.image} className="w-8 h-8 rounded-full"/>
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link  onClick={handelCloseSidebar} className="flex my-5 mb-3 mx-3 gap-3 items-center bg-white  rounded-lg shadow-lg" to={`user-profile/${user._id}`}>
          <img src={user.image} alt="user-profile" className="w-10 h-10 rounded-full" />
          <p>{user.username}</p>
        </Link>
      )}
    </div>
  );
}

export default Sidebar;
