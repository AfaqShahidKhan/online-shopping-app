import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div class="flex items-center ">
            {" "}
            <Link href="https://flowbite.com" className="mr-10 ">
              <Image
                src="/../public/logoweb.png"
                alt="Picture of the author"
                width={30}
                height={20}
              />{" "}
              <span class="self-center text-l font-semibold whitespace-nowrap dark:text-white">
                Shopie
              </span>
            </Link>
            <ul class="flex flex-row space-x-24 mt-0 mr-6  text-sm font-medium">
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline text-base"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline text-base"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline text-base"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline text-base"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
