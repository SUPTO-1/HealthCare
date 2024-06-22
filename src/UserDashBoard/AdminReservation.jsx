import { Link, useParams } from "react-router-dom";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import AdminReservationCard from "./AdminReservationCard";
import { useEffect, useState } from "react";

const AdminReservation = () => {
  const { testName } = useParams();
  const axiosSecure = UseAxiosSecure();

  const { data: reserved = [], refetch } = useQuery({
    queryKey: ["reservation", testName],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reservation/forAdmin/${testName}`);
      return res.data;
    },
  });

  const [filterSearch , setFilterSearch] = useState([]);
  useEffect(() => {
    setFilterSearch(reserved);
  }, [reserved]);
  const handleSearch = (e) =>
    {
      e.preventDefault();
      const search = e.target.value.trim();
      if(search === "")
        {
          setFilterSearch(reserved);
        }
        else {
          const filterNeeds = reserved.filter((reserv)=>{
            const newDate = reserv.email || "";
            return newDate.toLowerCase().includes(search.toLowerCase());
          })
          const filteredNeeds = filterNeeds;
          setFilterSearch(filteredNeeds);
        }
    }

  return (
    <div>
      {reserved.length != 0 ? (
        <>
          {" "}
          <h2 className="text-2xl text-center mt-10 font-poppins mb-10">
            My Upcoming Appointments
          </h2>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10 px-0 md:px-8 lg:px-44">
            {filterSearch.map((singleReservation) => (
              <AdminReservationCard
                key={singleReservation._id}
                singleReservation={singleReservation}
                refetch={refetch}
              ></AdminReservationCard>
            ))}
          </div>
        </>
      ) : (
        <>
          <section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-40 h-40 dark:text-gray-400"
              >
                <path
                  fill="currentColor"
                  d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
                ></path>
                <rect
                  width="176"
                  height="32"
                  x="168"
                  y="320"
                  fill="currentColor"
                ></rect>
                <polygon
                  fill="currentColor"
                  points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
                ></polygon>
                <polygon
                  fill="currentColor"
                  points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
                ></polygon>
              </svg>
              <p className="text-3xl">
                Looks like our services are currently offline
              </p>
              <Link to={`/dashboard/myProfile`}><a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Back to homepage
              </a></Link>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default AdminReservation;
