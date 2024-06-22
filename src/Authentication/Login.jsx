import { useContext } from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { logIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard/myProfile";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: "success!",
          text: "User logged in successfully",
          icon: "success",
          confirmButtonText: "Okay",
        });
            navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "error!",
          text: "Password and E-mail doesn't Match",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };
  const handleGoogle = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: "success!",
          text: "User logged in successfully",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "error!",
          text: "Something went wrong!Try Again.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };
  const handleGithub = () => {
    githubSignIn(githubProvider)
      .then(() => {
        // const loggedUser = result.user;
        // console.log(loggedUser);
        Swal.fire({
          title: "success!",
          text: "User logged in successfully",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "error!",
          text: "Something went wrong!Try Again.",
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
          preserveAspectRatio="none"
          viewBox="0 0 1440 560"
        >
          <g mask='url("#SvgjsMask1232")' fill="none">
            <rect
              width="1440"
              height="560"
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
              <rect width="1440" height="560" fill="#ffffff"></rect>
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
      <div className="mx-2 pt-10 md:mx-8 mb-10 font-poppins lg:flex gap-5 rounded-lg">
        <div className="flex-1 bg-[#559797] md:rounded-r-[150px] rounded-l-lg">
          <div className=" text-center p-6 md:p-0 flex justify-center items-center h-full">
            <h2 className="text-3xl font-bold text-white block">
              Welcome To Our Website!! <br></br>{" "}
              <span className="text-xl pt-4 inline-block">
                New To Our Website?
                <Link to="/signup">
                  <button className="btn btn-outline text-xl border-none">
                    Register
                  </button>
                </Link>
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className="flex-1 md:px-16 md:py-16">
          <h2 className="text-3xl text-center font-poppins mt-4 text-white lg:mt-0 font-bold">
            LogIn Now
          </h2>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control w-full mx-auto">
              <label className="label">
                <span className="label-text text-xl md:text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className=" input rounded-lg text-xl input-bordered border-2 border-[#559797]"
                name="email"
                required
              />
            </div>
            <div className="form-control w-full mx-auto">
              <label className="label">
                <span className="label-text text-xl md:text-white">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className=" input rounded-lg text-xl input-bordered border-[#7AB2B2] border-2"
                name="password"
                required
              />
            </div>
            <div className="form-control w-full mt-6 mx-auto">
              <button className="btn bg-[#7AB2B2]">Login</button>
            </div>
          </form>
          <div className="flex justify-center items-center gap-5">
            <button disabled onClick={handleGoogle}>
              <FcGoogle className="text-3xl"></FcGoogle>
            </button>
            <button disabled onClick={handleGithub}>
              <FaGithub className=" text-3xl"></FaGithub>
            </button>
            <FaFacebook className="text-[#0866ff] text-3xl"></FaFacebook>
            <FaTwitter className=" text-[#1da1f2] text-3xl"></FaTwitter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
