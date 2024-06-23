"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const navItems = [
    {
      title: "Add Contact",
      path: "/add-contact",
    },
    {
      title: "All Contact",
      path: "/all_Contact",
    },
  ];

  return (
    <div>
      <div className="navbar bg-gradient-to-r from-zinc-300 to-slate-400 border-b-2 p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {/* small device nav item  */}
              <div className="flex flex-col  space-y-2">
                {navItems.map((item) => (
                  <Link href={item.path} key={item.path}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </ul>
          </div>
          <Link href='/' className="text-balance lg:text-2xl  font-montserrat font-bold ">
            Contacts Management
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* large device nav item  */}
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link className="text-xl font-montserrat font-medium hover:text-red-500 duration-300" href={item.path} key={item.path}>
                  {item.title}
                </Link>
              ))}
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-xl font-montserrat font-medium">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
