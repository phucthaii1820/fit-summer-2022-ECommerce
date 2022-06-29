import React from "react";
import { Link } from "react-router-dom";

const ButtonProfile = ({ icon, title, link }) => {
  return (
    <Link
      to={`${link}`}
      className="rounded-full w-full border text-gray-400 border-gray-200 bg-white py-2 flex justify-start h-12 items-center hover:text-yellow-light hover:border-yellow-light"
    >
      <div className="mr-2 ml-6">{icon}</div>
      <div className="ml-2 text-base font-base">{title}</div>
    </Link>
  );
};

export default ButtonProfile;
