import Link from "next/link";
import React from "react";

const JobCard = ({ item }) => {
  return (
    <div className="w-96 bg-white rounded-lg shadow-md p-8 m-4 flex flex-col justify-between font-sans">
      {/* Job Title */}
      <h3 className="text-center text-3xl font-bold text-gray-900 mb-4">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-center text-gray-700 text-xl mb-4 line-clamp-2">
        {item.description}
      </p>

      {/* Gray box with details */}
      <div className="bg-gray-200 w-full rounded-md p-4 mb-4 text-gray-800 text-lg flex flex-col space-y-2">
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

      {/* Spacer to push button to bottom */}
      <div className="flex-grow"></div>

      {/* Details Button */}
      <Link href={`jobs/detail/${item.id}`}>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold rounded-full px-20 py-4 transition-colors duration-300 mt-auto">
          Details
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
