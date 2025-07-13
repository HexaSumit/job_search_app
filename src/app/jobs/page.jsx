"use client"

import JobCard from "@/components/JobCard";
import SearchBar from "@/components/SearchBar";
import jobsdata from "../data/Data";
import React, { useEffect, useState } from "react";

export default function page() {
    const [input, setInput] = useState('')
    const [data, setData] = useState(jobsdata)


    const handleSearch = () => {
        const filteredJobs = jobsdata.filter((job) =>
            job.title.toLowerCase().includes(input.toLowerCase())
        );
        setInput(input); // so we can show "No results for ___"
        setData(filteredJobs);
    };

    return (
        <div>
            <div className=" bg-gray-200 pb-20">
                {/* <div><Navbar /></div> */}
                <div className=" pt-30 flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold pb-2 mb-6 border-b-4 border-blue-700 w-fit">
                        Available Jobs
                    </h1>
                    <SearchBar input={input} setInput={setInput} onSearchClick={handleSearch} />
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-4 p-10">
                    {data.length > 0 ? (
                        data.map((item) => <JobCard key={item.id} item={item} />)
                    ) : (
                        <p className="col-span-full text-center text-xl text-gray-600 mt-10">
                            😕 No jobs found for "<span className="font-semibold">{input}</span>"
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}