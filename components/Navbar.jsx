import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className="px-10 md:px-20 fixed w-screen bg-purple-accent py-5 z-50  top-0 left-0 flex justify-between  items-center ">
        <div className="Left">
          <span className="brand text-lg tracking-widest text-[#fe7d05] font-bold ">
            CloudBro.
          </span>
        </div>
        <div className="nav-right  hidden md:flex justify-between">
          <div className="nav-cta ">
            <button
              className="bg-gradient-to-r from-[#fea703] to-[#fe7d05] px-4 py-1 m-2 rounded
          border-solid border-2 border-[#fea703]"
            >
              Register
            </button>
            <button className="border-solid border-2 border-[#fea703] px-4 py-1 rounded box-border">
              Sign In
            </button>
          </div>
        </div>
        <div className="nav-right humberger md:hidden">
          <BiMenu className="text-white" fontSize={35} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
