import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import UseAxiosPublic from "../CustomHook/UseAxiosPublic";

const SignUp = () => {
  const axiosPublic = UseAxiosPublic();
  const [districts , setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    fetch('district.json')
     .then(res => res.json())
     .then(data => setDistricts(data))
  },[districts])
  useEffect(()=>{
    fetch('upazila.json')
     .then(res => res.json())
     .then(data => setUpazilas(data))
  },[])
  //console.log(districts[0]);
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    const photo = formData.get("photo");
    const confirmPassword = formData.get("confirmPassword");
    const bloodGroup = formData.get("bloodGroup");
    const district = formData.get("district");
    const upazila = formData.get("upazila");
    // password validation here
    const passwordCheckerUpper = /^(?=.*[A-Z]).*$/;
    const passwordCheckerLower = /^(?=.*[a-z]).*$/;

    if (password.length < 6) {
      Swal.fire({
        title: "error!",
        text: "Password Length Must be more then 6",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    } else if (!passwordCheckerUpper.test(password)) {
      Swal.fire({
        title: "error!",
        text: "Password must contain at least one uppercase letter",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    } else if (!passwordCheckerLower.test(password)) {
      Swal.fire({
        title: "error!",
        text: "Password must contain at least one lowercase letter",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }
    else if(password != confirmPassword)
      {
        Swal.fire({
          title: "error!",
          text: "Password and Confirm Password doesn't Match",
          icon: "error",
          confirmButtonText: "Okay",
        });
        return;
      }

    //Authentication here
    createUser(email, password, name, photo)
      .then(() => {
        //const loggedUser = result.user;
        //console.log(loggedUser);
        const userInfo = {
          name: name,
          email: email,
          photo: photo, 
          bloodGroup: bloodGroup,
          district: district,
          upazila: upazila,
        }
        axiosPublic.post('/user',userInfo)
        .then(res=>{
          if(res.data.insertedId)
            {
              e.target.reset();
              Swal.fire({
                title: "success!",
                text: "User Created successfully",
                icon: "success",
                confirmButtonText: "Okay",
              });
              navigate('/');
            }
        })
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "error!",
          text: "Something went wrong. Try again!",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };
  
  return (
    <div className="relative">
      <div className="w-full hidden md:flex absolute z-[-100]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          width="1920"
          height="1200"
          preserveAspectRatio="none"
          viewBox="0 0 1440 560"
        >
          <g mask='url("#SvgjsMask1232")' fill="none">
            <rect
              width="1440"
              height="1200"
              x="0"
              y="0"
              fill='url("#SvgjsLinearGradient1233")'
            ></rect>
            <path
              d="M1440 0L1366.02 0L1440 240.93z"
              fill="rgba(255, 255, 255, .1)"
            ></path>
            <path
              d="M1366.02 0L1440 240.93L1440 264.85L1153.81 0z"
              fill="rgba(255, 255, 255, .075)"
            ></path>
            <path
              d="M1153.81 0L1440 264.85L1440 406.62L1093.79 0z"
              fill="rgba(255, 255, 255, .05)"
            ></path>
            <path
              d="M1093.79 0L1440 406.62L1440 468.11L634.01 0z"
              fill="rgba(255, 255, 255, .025)"
            ></path>
            <path
              d="M0 560L503.6 560L0 462.29z"
              fill="rgba(0, 0, 0, .1)"
            ></path>
            <path
              d="M0 462.29L503.6 560L874.85 560L0 340.62z"
              fill="rgba(0, 0, 0, .075)"
            ></path>
            <path
              d="M0 340.62L874.85 560L1064.7 560L0 243.29000000000002z"
              fill="rgba(0, 0, 0, .05)"
            ></path>
            <path
              d="M0 243.29000000000002L1064.7 560L1119.3400000000001 560L0 99.93z"
              fill="rgba(0, 0, 0, .025)"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1232">
              <rect width="1440" height="1200" fill="#ffffff"></rect>
            </mask>
            <linearGradient
              x1="15.28%"
              y1="-39.29%"
              x2="84.72%"
              y2="139.29%"
              gradientUnits="userSpaceOnUse"
              id="SvgjsLinearGradient1233"
            >
              <stop stop-color="#0e2a47" offset="0"></stop>
              <stop stop-color="rgba(122, 178, 178, 1)" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-2 pt-6 md:mx-8 mb-10 font-poppins lg:flex flex-row-reverse gap-5 rounded-lg">
        <div className="flex-1 bg-[#559797] md:rounded-l-[150px] rounded-r-lg ">
          <div className=" text-center p-6 md:p-0 flex justify-center items-center h-full">
            <h2 className="text-3xl font-bold text-white block">
              Welcome To Our Website!! <br></br>{" "}
              <span className="text-xl pt-4 inline-block">
                Already Have An Account?
                <Link to="/login">
                  <button className="btn btn-outline text-xl border-none">
                    Login
                  </button>
                </Link>
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className="flex-1 md:px-16 py-10  ">
          <h2 className="text-3xl text-center md:text-white font-poppins mt-4 lg:mt-0 font-bold">
            Register Now
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control w-full mx-auto">
              <label className="label">
                <span className="label-text text-xl md:text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input rounded-lg text-xl input-bordered border-[#559797] border-2 "
                name="name"
                required
              />
            </div>
            <div className="form-control w-full mx-auto">
              <label className="label">
                <span className="label-text text-xl md:text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input rounded-lg text-xl input-bordered border-[#559797] border-2 "
                name="email"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xl md:text-white">Blood Group</span>
              </label>
            <select name="bloodGroup" className="select select-bordered w-full text-xl">
              <option disabled selected>
                Blood Group
              </option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
            </div>
            <div>
            <label className="label">
                <span className="label-text text-xl md:text-white">District</span>
              </label>
            <select name="district" className="select select-bordered w-full text-xl">
              <option disabled selected>
                Select Your District
              </option>
              {
                districts.map((district) => (
                  <option key={district.id}>{district.name}</option>
                ))
              }
            </select>
            </div>
            <div>
            <label className="label">
                <span className="label-text text-xl md:text-white">Upazila</span>
              </label>
            <select name="upazila" className="select select-bordered w-full text-xl">
              <option disabled selected>
                Select Your Upazila
              </option>
              {
                upazilas.map((upazila) => (
                  <option key={upazila.id}>{upazila.name}</option>
                ))
              }
            </select>
            </div>
            <div className="form-control w-full mx-auto">
              <label className="label">
                <span className="label-text text-xl md:text-white">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Give Photo Url"
                className="input rounded-lg text-xl input-bordered border-[#559797] border-2 "
                name="photo"
                required
              />
            </div>
            <div className="form-control w-full mx-auto">
              <label className="label">
                <span className="label-text text-xl md:text-white ">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="input rounded-lg text-xl input-bordered border-[#559797] border-2 "
                name="password"
                required
              />
            </div>
            <div className="form-control w-full mx-auto">
              <label className="label">
                <span className="label-text text-xl md:text-white ">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input rounded-lg text-xl input-bordered border-[#559797] border-2 "
                name="confirmPassword"
                required
              />
            </div>
            <div className="form-control w-full mt-6 mb-2 mx-auto">
                <button className="btn bg-[#7AB2B2] ">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
