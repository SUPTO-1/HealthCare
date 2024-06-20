import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../CustomHook/UseAxiosPublic";
import TestCard from "./TestCard";
import banner from "../assets/images/alltestBanner.jpg";
import { useEffect, useState } from "react";

const AllTests = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: tests = [] } = useQuery({
    queryKey: ["tests"],
    queryFn: async () => {
      const res = await axiosPublic.get("/test");
      return res.data;
    },
  });
  const [filterSearch , setFilterSearch] = useState([]);
  useEffect(() => {
    setFilterSearch(tests);
  }, [tests]);
  const handleSearch = (e) =>
    {
      e.preventDefault();
      const search = e.target.value.trim();
      if(search === "")
        {
          setFilterSearch(tests);
        }
        else {
          const filterNeeds = tests.filter((test)=>{
            const newDate = test.date || "";
            return newDate.toLowerCase().includes(search.toLowerCase());
          })
          const filteredNeeds = filterNeeds;
          setFilterSearch(filteredNeeds);
        }
    }
  return (
    <div>
      <div>
        <div>
          <img src={banner} alt="" />
        </div>
        <div className="mx-auto text-center mb-8 bg-[#559797] ">
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-32 text-3xl font-roboto font-semibold text-[#FFF] card rounded-box bg-[#559797] place-items-center">
              AVAILABLE TEST
            </div>
            <div className="lg:divider-horizontal w-full border-white bg-white border-[10px]"></div>
            <div className="grid flex-grow h-32 card text-[#FFF] font-medium bg-[#559797] text-2xl font-poppins rounded-box place-items-center">
              Your Health Is Our Responsibility
            </div>
          </div>
        </div>
      </div>
      <fieldset className="w-full pl-8 md:pl-0 md:ml-[45%] mb-10 space-y-1 dark:text-gray-800">
        <label htmlFor="Search" className="hidden">
          Search
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="button"
              title="search"
              className="p-1 focus:outline-none focus:ring"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-4 h-4 dark:text-gray-800"
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            onChange={handleSearch}
            className="w-3/5 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600"
          />
        </div>
      </fieldset>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-8 lg:px-44">
        {filterSearch.map((test) => (
          <TestCard key={test._id} test={test}></TestCard>
        ))}
      </div>
    </div>
  );
};

export default AllTests;
