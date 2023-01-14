import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/shared/logo.svg";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "HOME", to: "/" },
  { name: "DESTINATION", to: "/destination" },
  { name: "CREW", to: "/crew" },
  { name: "TECHNOLOGY", to: "/technology" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed md:mt-6 w-full">
      {({ open }) => (
        <div className="min-w-full ">
          <div className="w-full px-2 sm:px-6 lg:px-20">
            <div className="relative flex h-16 items-center justify-around">
              <div className="absolute inset-y-0 right-0 mr-8 flex items-center sm:hidden ">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Main</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start ml-3 sm:items-stretch sm:justify-between ">
                {/*flex-row sm:flex-row-reverse */}
                <NavLink className="flex flex-shrink-0 items-center" to="/">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </NavLink>
                <div className=" ml-36 border-b border-gray-500 h-1 w-[600px] my-auto hidden md:block"></div>
                <div className="hidden sm:ml-6 sm:block backdrop-blur-2xl">
                  <div className="flex space-x-4 w-[650px] p-5  ">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden backdrop-blur-2xl">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
