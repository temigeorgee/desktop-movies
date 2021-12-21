import "./navbar.scss";
import { useState, useRef, useEffect } from "react";
import useViewport from "../../hooks/useViewport";
import useScroll from "../../hooks/useScroll";
import useOutsideClick from "../../hooks/useOutsideClick";
import { motion } from "framer-motion";
import { navbarFadeInVariants } from "../../motionUtils";
import { FaCaretDown } from "react-icons/fa";
import { Link, NavLink, useHistory } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/auth.actions";
import { AuthContext } from "../../redux/auth/AuthContext";
import { logOut } from "../../redux/auth/logout.action";
import { getCurrentlyLogged } from "../../utils/ApiRequests";
import axios from "axios";
import SearchIcon from "../../assets/images/search.svg";
import HomeIcon from "../../assets/images/movies.svg";
import TVIcon from "../../assets/images/feather_tv.svg";
import ListIcon from "../../assets/images/shows.svg";
import MoviesIcon from "../../assets/images/home.svg";
import LogoutIcon from "../../assets/images/logout.svg";
// import { signOutStart } from "../../redux/auth/auth.actions";

const Navbar = () => {
  const { width } = useViewport();
  const isScrolled = useScroll(70);
  const [loading, setLoading] = useState(false);
  const [genresNav, setGenresNav] = useState(false);
  const [profileNav, setProfileNav] = useState(false);
  const [user, setUser] = useState("");
  const genresNavRef = useRef();
  const profileNavRef = useRef();

  const dispatch = useDispatch();
  useOutsideClick(genresNavRef, () => {
    if (genresNav) setGenresNav(false);
  });
  useOutsideClick(profileNavRef, () => {
    if (profileNav) setProfileNav(false);
  });

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "http://localhost:3000/login";
  };
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://apis.woozeee.com/api/v1/user/current",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("auth")} `,
            },
          }
        );
        setUser(data.data);

        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getCurrentUser();
  }, []);
  return (
    <>
      <motion.nav>
        <div className="Navbar">
          <div
            className="flex items-center justify-between align-middle p-8"

            // className={`Navbar__navprofile ${
            //   profileNav && "active"
            // } p-8 mb-10`}
            // onClick={() => setProfileNav(!profileNav)}
          >
            <img
              className="Navbar__navprofile--avatar Navbar__navprofile--toggler mr-8 w-10 h-10"
              src={
                user && user.userImageURL
                  ? user.userImageURL
                  : "https://firebasestorage.googleapis.com/v0/b/woozeee-d7f6c.appspot.com/o/Money-Matters%2Fuser-icon.png?alt=media&token=061530a3-0cbb-41f8-a604-05023de7e919"
              }
              alt=""
            />
            <p>{user.userFirstName}</p>
          </div>

          <NavLink
            to="/search"
            activeClassName="activeNavLink"
            className="flex items-center justify-between align-middle p-8"
          >
            <img src="/assets/images/search.svg" alt="" className="mr-10" />
            <p>Search</p>
          </NavLink>

          <NavLink
            to="/browse"
            activeClassName="activeNavLink"
            className="flex items-center justify-between align-middle p-8"
          >
            <img src={HomeIcon} alt="" className="mr-10" />
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/tvseries"
            activeClassName="activeNavLink"
            className="flex items-center justify-between align-middle p-8"
          >
            <img src={TVIcon} alt="" className="mr-10" />
            <p>TV Shows</p>
          </NavLink>
          <NavLink
            to="/movies"
            activeClassName="activeNavLink"
            className="flex items-center justify-between align-middle p-8"
          >
            <img src={MoviesIcon} alt="" className="mr-10" />
            <p>Movies</p>
          </NavLink>

          <NavLink
            to="/popular"
            activeClassName="activeNavLink"
            className="flex items-center justify-between align-middle p-8"
          >
            <img src={HomeIcon} alt="" className="mr-10" />
            <p className="text-right">New & popular</p>
          </NavLink>

          <NavLink
            to="/mylist"
            activeClassName="activeNavLink"
            className="flex items-center justify-between align-middle p-6"
          >
            <img src={ListIcon} alt="" className="mr-10" />
            <p>My List</p>
          </NavLink>

          <div
            onClick={handleLogout}
            className="flex items-center justify-between align-middle p-6 cursor-pointer hover:text-rose-600"
          >
            <img src={LogoutIcon} alt="" className="mr-10 w-8 h-8" />
            <p className="text-right text-xs">Logout</p>
          </div>
          {/*
          <NavLink
            to="/m"
            activeClassName="activeNavLink"
            className="flex items-center justify-between align-middle p-6"
          >
            <img src="/assets/images/market.svg" className="mr-10" />
            <p>Marketplace</p>
          </NavLink> */}
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
