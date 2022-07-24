import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth, logOut } from "../redux/authSlice/auth";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm("Вы уверены что хотите выйти из аккаунта?")) {
      dispatch(logOut());
      navigate("/login", { replace: true });
      window.localStorage.removeItem("token");
    }
  };

  return (
    <div className=" max-w-[1440px] mx-auto ">
      {/* МЕНЮ ДЛЯ МОБИЛКИ */}

      {isOpen && (
        <div className=" absolute ">
          <div className=" relative z-10 left-0 top-0 bg-white w-screen h-[320px] shadow-lg text-xl font-black flex flex-col justify-center items-center gap-6 text-gray-500"
          onClick={() => setOpen(!isOpen)}>
            

          <Link to="/">
            <p className="hover:text-[#e11d48] cursor-pointer hover:shadow-sm">
              Home
            </p>
          </Link>
          {isAuth ? (
            <Link to="/favorite">
              <p className="hover:text-[#e11d48] cursor-pointer hover:shadow-sm">
                Workouts
              </p>
            </Link>
          ) : (
            <Link to="/login">
              <p className="hover:text-[#e11d48] cursor-pointer hover:shadow-sm">
                Workouts
              </p>
            </Link>
          )}
          {isAuth ? (
            <Link to="/progress">
              <p className="hover:text-[#e11d48] cursor-pointer hover:shadow-sm">
                My Progress
              </p>
            </Link>
          ) : null}
          {!isAuth ? (
            <Link to="/Login">
              <button className="btn btn-secondary">Log-In</button>
            </Link>
          ) : (
            <Link to="/Login">
              <button
                className="btn btn-secondary"
                onClick={() => onClickLogout()}
              >
                Log-Out
              </button>
            </Link>
          )}
          {!isAuth && (
            <Link to="/registration">
              <button className="btn btn-primary">Sign-Up</button>
            </Link>)}



          </div>
        </div>
      )}

      <div className="max-w-screen lg:w-full h-[80px] bg-white flex justify-between px-4 items-center shadow-sm lg:mr-8">
        {/* LOGO */}

        <div className="flex justify-start align-middle text-center items-center">
          <img src={Logo} alt="logo" className=" w-14 lg:ml-4 lg:w-16" />
          <p className=" font-black text-3xl ml-4 lg:mx-2 text-[#e11d48]">
            PRO-FITNESS
          </p>
        </div>

        {/* МЕНЮ ДЛЯ ФУЛЛСКРИН */}
        <ul className="hidden lg:flex lg:gap-12 text-xl font-bold capitalize  align-middle text-center items-center text-gray-500 lg:mr-6">
          <Link to="/">
            <li className="hover:text-[#e11d48] cursor-pointer hover:shadow-sm">
              Home
            </li>
          </Link>
          {isAuth ? (
            <Link to="/favorite">
              <li className="hover:text-[#e11d48] cursor-pointer hover:shadow-sm">
                Workouts
              </li>
            </Link>
          ) : (
            <Link to="/login">
              <li className="hover:text-[#e11d48] cursor-pointer hover:shadow-sm">
                Workouts
              </li>
            </Link>
          )}
          {isAuth ? (
            <Link to="/progress">
              <li className="hover:text-[#e11d48] cursor-pointer hover:shadow-sm">
                My Progress
              </li>
            </Link>
          ) : null}
          {!isAuth ? (
            <Link to="/Login">
              <button className="btn btn-secondary">Log-In</button>
            </Link>
          ) : (
            <Link to="/Login">
              <button
                className="btn btn-secondary"
                onClick={() => onClickLogout()}
              >
                Log-Out
              </button>
            </Link>
          )}
          {!isAuth && (
            <Link to="/registration">
              <button className="btn btn-primary">Sign-Up</button>
            </Link>
          )}
        </ul>
        <div className=" lg:hidden z-10">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#e11d48" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
