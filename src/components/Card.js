import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div
      key={props.id}
      className="max-w-sm border border-gray shadow mb-12 hover:translate-y-[-10px] transition duration-300 ease-in-out"
    >
      <p className="text-sm border-b-2 text-center border-secondary text-secondary p-2">
        {props.tech}
      </p>
      <Link to={props.link}>
        <h5 className="mb-2 py-3 text-center text-2xl font-bold tracking-tight text-white border-b-2 border-secondary">
          {props.name}
        </h5>
      </Link>
      <p className="mb-3 font-normal text-gray-700 px-2 dark:text-gray-400">
        {props.description}
      </p>
      <Link
        to={props.link}
        className="inline-flex items-center px-3 py-2 ml-2 mb-2 text-sm font-medium text-center text-white border-2 border-primary hover:bg-primary transition duration-300 ease-in-out"
      >
        GitHub
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Card;
