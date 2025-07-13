import Link from "next/link";
import React from "react";

const JobCard = ({ item }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6 m-4 flex flex-col justify-between font-sans">
      {/* Job Title */}
      <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-center text-gray-700 text-base md:text-xl mb-4 line-clamp-2">
        {item.description}
      </p>

      {/* Gray box with details */}
      <div className="bg-gray-200 w-full rounded-md p-4 mb-4 text-gray-800 text-base md:text-lg flex flex-col space-y-2">
        <span>
          <strong>Location:</strong> {item.location}
        </span>
        <span>
          <strong>Type:</strong> {item.type}
        </span>
        <span>
          <strong>Salary:</strong> {item.salary}
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-auto" />

      {/* Details Button */}
      <Link href={`jobs/detail/${item.id}`}>
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white text-base md:text-xl font-bold rounded-full px-8 py-3 md:px-20 md:py-4 transition-colors duration-300 mt-4"
        >
          Details
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
