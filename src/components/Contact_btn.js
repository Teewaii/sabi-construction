import React from "react";
import { Link } from "react-scroll";

function Contact_btn() {
  return (
    <div>
      <Link
        className="bg-orange text-white text-[0.64rem] md:text-lg font-medium flex w-fit px-3 py-2 md:px-6 md:py-3 xl:px-10 xl:py-5 2xl:text-xl 2xl:px-10 2xl:py-5  rounded-md cursor-pointer hover:bg-Dark_orange ease-in-out duration-300"
        to="contact"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        Contact us
      </Link>
    </div>
  );
}

export default Contact_btn;
