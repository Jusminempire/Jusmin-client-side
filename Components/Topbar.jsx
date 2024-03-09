import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { logOUT } from "../Services/functions";
import Cookies from "js-cookie";
import SucessSlider from "../Components/SucessSlider";
import NavDrawer from "../Components/Homepage/NavDrawer";
// ICONS
import { SiCoinmarketcap } from "react-icons/si";
import { FaCartArrowDown } from "react-icons/fa";
import { BsShop, BsWhatsapp } from "react-icons/bs";
import { FiGrid, FiTruck } from "react-icons/fi";
import { GrUserAdmin } from "react-icons/gr";
import { getSessionUser } from "../Services/functions";
import { CartQuantityContext } from "../pages/_app";
import { AiOutlineMail, AiTwotoneMail } from "react-icons/ai";

function Topbar({
  dynamictriger,
  triga,
  localCartTriger,
  localCartLength,
  dynamicBtn,
  category,
  setCategory,
}) {
  // SET NAV LIST COLOR WITH PAGE PATH NAME
  const cartQty = useContext(CartQuantityContext).cartQty;
  const [active, setActive] = useState(0);
  const router = useRouter();
  const adminEmail = "jusminempire@gmail.com";
  useEffect(() => {
    switch (router.asPath) {
      case "/":
        setActive(1);
        break;
      case "/products":
        setActive(2);
        break;
      case "/orders":
        setActive(3);
        break;
      default:
        setActive(0);
        break;
    }
  }, [router.asPath]);

  // // FETCHING SESSION USER NAME AND CART LENGTH
  const [name, setName] = useState(null);
  const [cartLength, setCartLength] = useState([]);
  const [session, setSession] = useState([]);
  const [localCartSession, setLocalCartSession] = useState([]);
  const [localCart, setLocalCart] = useState([]);
  useEffect(() => {
    // console.log("fgjh");
    // get cart items in local storage
    const existingItemsInLocal = localStorage.getItem("localCartItem")
      ? JSON.parse(localStorage.getItem("localCartItem"))
      : [];
    // console.log(existingItemsInLocal);
    setLocalCart(existingItemsInLocal);
    async function fetchSessionUser() {
      const userData = await getSessionUser();
      setLocalCartSession(userData);
      if (userData && userData.user) {
        setSession(userData);
        setName(userData?.user?.username);
        setCartLength(userData?.user.cart);
      }
    }
    fetchSessionUser();
  }, [router, triga, dynamictriger, localCartTriger, cartQty]);

  // LOGOUT
  const logOUT = () => {
    Cookies.remove("JWTtoken");
    location.reload();
    router.push("/");
  };
  return (
    <section className="topbar-section">
      <div className="topbar-top-con">
        <div className="drawer-menu">
          <NavDrawer />
        </div>

        <div className="topbar-left-details">
          <div>
            <p>USD</p>
          </div>

          <div>
            <Image
              src={"/icons/call-calling.png"}
              alt="call-icon"
              height={20}
              width={20}
            />
            <a href="Tel:+14044088024" target="_blank">
              +1-404-408-8024
            </a>
          </div>

          <div>
            <Image
              src={"/icons/envelop.png"}
              alt="call-icon"
              height={20}
              width={20}
            />
            <a target="_blank" href={`mailto: Jusmineempire@gmail.com`}>
              Jusmineempire@gmail.com
            </a>
          </div>
        </div>
        <div className="topbar-right-details">
          <div>SignIn</div>
          <div className="cartIcon-con">
            <Link href="/cart">
              <FaCartArrowDown className="" />
            </Link>
            {localCartSession ? (
              <sup>{cartQty}</sup>
            ) : (
              <sup>{localCartLength?.length}</sup>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: ".5px solid gray",
          width: "100%",
        }}
      ></div>
      <div className="topbar-bottom-con">
        <h1>JUSMIN EMPIRE</h1>
        {/* <SucessSlider /> */}
        <div className="homepage-category-main-con">
          <div className="category-con">
            {dynamicBtn.map((btn, index) => (
              <button
                key={index}
                className={`${
                  btn === category ? "category active-category" : "category"
                }`}
                onClick={() => setCategory(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
          {/* <form>
          <BsSearch />
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search ..."
          />
        </form> */}
        </div>
      </div>
    </section>
  );
}
export const jgi = () => {};
export default Topbar;
