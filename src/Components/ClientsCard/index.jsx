import React from "react";

const ClientsCards = ({ image, brand }) => {
  return (
    <div className="m-1 p-3 lg:w-1/4 md:w-1/3">
      <img
        style={{
          boxShadow: "1px 6px 10px 0 rgba(0, 0, 0, 0.26)",
          cursor: "pointer",
        }}
        alt={brand}
        className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
        src={image}
      />
      <div className="w-full">
        <span className="inline-flex">
          <p className="text-gray-500">
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </p>
          <p className="ml-2 text-gray-500">
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </p>
          <p className="ml-2 text-gray-500">
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
          </p>
        </span>
      </div>
    </div>
  );
};

export default ClientsCards;
