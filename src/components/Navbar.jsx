import React from 'react';
import Logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuth, logOut } from '../redux/authSlice/auth';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const isToken = Boolean(window.localStorage.getItem("token"))

  const onClickLogout = () => {
    if(window.confirm('Вы уверены что хотите выйти из аккаунта?')){
      dispatch(logOut());
      navigate("/login", { replace: true });
      window.localStorage.removeItem('token')
    }
  };

  return (
    <div className=' w-full h-[80px] bg-white flex justify-between px-4 items-center shadow-sm mr-8'>
        <div className='flex justify-start align-middle text-center items-center'>
            <img src={Logo} alt='logo' className=' ml-4 w-16'/>
            <p className=' font-black text-3xl mx-2 text-[#e11d48]'>PRO-FITNESS</p>
        </div> 
        <ul className='flex gap-12 text-xl font-bold capitalize  align-middle text-center items-center text-gray-500 mr-6'>
            <Link to='/'>
            <li className='hover:text-[#e11d48] cursor-pointer hover:shadow-sm'>Home</li>
            </Link>
            {isToken ? (<Link to='/favorite'>
            <li className='hover:text-[#e11d48] cursor-pointer hover:shadow-sm'>My Programm</li>
            </Link>) : (<Link to='/login'>
            <li className='hover:text-[#e11d48] cursor-pointer hover:shadow-sm'>My Programm</li>
            </Link>)}
            <li className='hover:text-[#e11d48] cursor-pointer hover:shadow-sm'>Mobile App</li>
            {!isToken ? (<Link to="/Login">
            <button className="btn btn-secondary">Log-In</button>
            </Link>) : (<Link to="/Login">
            <button className="btn btn-secondary" onClick={() => onClickLogout()}>Log-Out</button>
            </Link>)}
            {!isToken && <Link to="/registration"><button className="btn btn-primary">Sing-Up</button></Link>}
        </ul>
    </div>
  )
}

export default Navbar