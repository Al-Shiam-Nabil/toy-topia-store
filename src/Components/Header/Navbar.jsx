import { useContext } from "react";
import Container from "../Container/Container";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import LoadingPage from "../Loading/LoadingPage";
import ActiveLink from "./ActiveLink";
import { HiH3 } from "react-icons/hi2";

const Navbar = () => {
  const { user, signOutUser, setUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  // if (loading) {
  //   return <LoadingPage></LoadingPage>;
  // }

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success("You have logged out successfully.");
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
      });
  };

  const links = (
    <>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/my-profile">My Profile</ActiveLink>
      <ActiveLink to="/shipping-delivery">Shipping & Delivery</ActiveLink>
    </>
  );

  return (
    <div className=" bg-primary shadow-xs ">
      <Container className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-7 sm:w-7 mr-2 sm:mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
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
              className="menu menu-md dropdown-content z-10 bg-base-100 rounded-box  mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-xl text-white sm:text-2xl font-bold">
            Toy<span className="text-secondary">Topia</span>{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-5 px-1">{links}</ul>
        </div>

        {loading ? (
   <div className="navbar-end">
           <div className="flex  flex-col gap-4 ">
  <div className="flex items-center gap-4">
    <div className="skeleton h-10 w-10 shrink-0 rounded-full"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-10 w-20"></div>
      {/* <div className="skeleton h-4 w-28"></div> */}
    </div>
  </div>
  {/* <div className="skeleton h-32 w-full"></div> */}
</div>
   </div>
        ) : (
          <div className="navbar-end">
            {user ? (
              <div className="flex justify-center items-center gap-3">
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} className=" m-1">
                    {" "}
                    <img
                      src={user?.photoURL}
                      alt="user image"
                      className="w-10 h-10 object-cover rounded-full cursor-pointer bg-gray-200"
                    />
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-gray-600 text-white rounded-box z-1 w-36 p-2 shadow-sm"
                  >
                    <p className="text-xs">{user?.displayName}</p>
                  </ul>
                </div>

                <button
                  onClick={handleLogOut}
                  className="btn btn-sm sm:btn-md btn-secondary"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link to="/log-in" className="btn btn-sm sm:btn-md btn-secondary">
                Log In
              </Link>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
