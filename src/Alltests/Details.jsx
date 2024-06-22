import { Link, useLoaderData } from "react-router-dom";
import banner from "../assets/images/operation.jpg";
import { FaCheckToSlot, FaUserDoctor } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import Swal from "sweetalert2";
const Details = () => {
  const { user } = useContext(AuthContext);
  const singleTest = useLoaderData();
  const axiosSecure = UseAxiosSecure();
  const { testName, description, image, testFee, slot, date } = singleTest;
  const handleAddReservation = () => {
    const addReservation = {
      testName: singleTest.testName,
      date: singleTest.date,
      image: singleTest.image,
      email: user.email,
      name: user.displayName,
      userImage: user.photoURL,
    };
    axiosSecure.post("/reservation", addReservation).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Appointment Taken successfully",
          icon: "success",
          confirmButtonText: "Okay",
        });
      }
    });

    axiosSecure.put(`/test/${singleTest._id}`).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <div>
        <div>
          <img src={banner} alt="" />
        </div>
        <div className="mx-auto text-center mb-8 bg-[#559797] ">
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-32 text-3xl font-roboto font-semibold text-[#FFF] card rounded-box bg-[#559797] place-items-center">
              Test Details
            </div>
            <div className="lg:divider-horizontal w-full border-white bg-white border-[10px]"></div>
            <div className="grid flex-grow h-32 card text-[#FFF] font-medium bg-[#559797] text-2xl font-poppins rounded-box place-items-center">
              Your Health Is Our Responsibility
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 md:px-6 lg:px-40 lg:flex gap-20">
        <div className="lg:w-3/5">
          <h2 className="text-[#799f4a] text-2xl font-roboto mb-6">
            Our Test Details
          </h2>
          <h2 className="text-4xl font-poppins mb-6">About {testName}</h2>
          <p className="text-lg mb-4 font-montserrat">{description}</p>
          <p className="text-lg mb-6 font-montserrat">
            A diagnostic center is a specialized healthcare facility that plays
            a crucial role in the medical field by offering a comprehensive
            range of diagnostic services under one roof. Equipped with
            state-of-the-art technology and staffed by skilled professionals,
            these centers are designed to accurately diagnose various medical
            conditions, facilitating early detection and precise identification
            of diseases. Services provided typically include laboratory tests
            for blood, urine, and other bodily fluids, as well as advanced
            imaging studies such as X-rays, MRIs, CT scans, and ultrasounds.
            Additionally, diagnostic centers often perform specialized
            procedures like biopsies, endoscopies, and cardiovascular
            assessments.
          </p>
          <img className="h-[600px] mb-6" src={image} alt="" />
          <h2 className="text-2xl font-poppins mb-6">What You Need To Know</h2>
          <p className="text-lg mb-4 font-montserrat">
            When visiting a diagnostic center, it’s essential to understand the
            range of services they offer and how these can benefit your health.
            Diagnostic centers are equipped with advanced technology for
            conducting various tests such as blood work, imaging scans like
            X-rays and MRIs, and specialized procedures including biopsies and
            endoscopies. These centers are staffed by experienced healthcare
            professionals who ensure accurate and timely results. Understanding
            the importance of early and precise diagnosis can help you make
            informed decisions about your health. Additionally, many diagnostic
            centers provide comprehensive services in one location, offering
            convenience and streamlined care for patients.
          </p>
          <div className="md:flex gap-4 mb-10">
            <div>
              <div className="bg-[#f2f2f2] p-8 mb-5">
                <h2 className="text-xl font-roboto font-medium mb-2">
                  Best Staff Doctors
                </h2>
                <p className="font-montserrat text-lg">
                  The best staff doctors provide expert care and compassionate
                  service.
                </p>
              </div>
              <div className="bg-[#f2f2f2] p-6 mb-4">
                <h2 className="text-xl font-roboto font-medium mb-2">
                  18 Years of Experience
                </h2>
                <p className="font-montserrat text-lg">
                  With 18 years of experience, trust in our expert care.
                </p>
              </div>
              <p className="font-montserrat text-lg">
                With 18 years of experience, our diagnostic center boasts the
                best staff and doctors dedicated to providing top-notch care.
                Our team expertise ensures accurate diagnoses and compassionate
                service, making us a trusted choice for comprehensive healthcare
                needs.
              </p>
            </div>
            <div>
              <div className="bg-[#f2f2f2] p-8 mb-5">
                <h2 className="text-xl font-roboto font-medium mb-2">
                  Advanced Equipments
                </h2>
                <p className="font-montserrat text-lg">
                  Equipped with advanced technology, we ensure precise and
                  reliable diagnostics.
                </p>
              </div>
              <div className="bg-[#f2f2f2] p-6 mb-4">
                <h2 className="text-xl font-roboto font-medium mb-2">
                  Price to Quality
                </h2>
                <p className="font-montserrat text-lg">
                  We offer the best balance of price and quality in healthcare.
                </p>
              </div>
              <p className="font-montserrat text-lg">
                Equipped with advanced technology, our diagnostic center offers
                superior diagnostic capabilities. Despite our cutting-edge
                equipment, we prioritize affordability without compromising on
                quality. This commitment ensures that patients receive accurate
                diagnoses and effective treatment options, high-quality
                healthcare services.
              </p>
            </div>
          </div>
          <section className="">
            <div className="container flex flex-col justify-center py-8 mx-auto">
              <h2 className="text-2xl font-semibold sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 mb-8 dark:text-gray-600">
                Frequently Asked Questions provide clarity on common concerns
                regarding our diagnostic center services and procedures.
              </p>
              <div className="space-y-4">
                <details className="w-full border bg-[#f2f2f2] rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                    How much does it cost to do a consultation?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                    The cost of a consultation can vary depending on the
                    diagnostic center and the specific healthcare provider
                    involved in the consultation.
                  </p>
                </details>
                <details className="w-full border bg-[#f2f2f2] rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                    How long does it take to recover after rhinoplasty?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                    Recovery after rhinoplasty generally takes about one to two
                    weeks for initial healing, with full results visible after
                    several months.
                  </p>
                </details>
                <details className="w-full border bg-[#f2f2f2] rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                    What payment methods are available?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                    We accept various payment methods, including credit cards,
                    debit cards, electronic transfers, and cash, ensuring
                    convenience for our patients financial transactions
                  </p>
                </details>
              </div>
            </div>
          </section>
        </div>
        {/* second div */}
        <div className="lg:w-2/5">
          <div className="bg-[#799f4a] px-10 py-10 mb-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-poppins font-bold text-white">
                ৳ {testFee}{" "}
              </h2>
            </div>
            <p className="text-lg font-montserrat mb-4 text-white">
              We offer the best balance of price and quality in healthcare.
            </p>
            <p className="font-poppins text-xl text-white mb-4">
              <FaUserDoctor className="inline mr-2" /> Expert Doctors
            </p>
            <p className="font-poppins text-xl text-white mb-4">
              <MdDateRange className="inline mr-2" /> {date}
            </p>
            <p className="font-poppins text-xl text-white">
              <FaCheckToSlot className="inline mr-2" /> {slot} Slots Available{" "}
            </p>
          </div>
          <div className="bg-[#f2f2f2] px-10 py-10 mb-6">
            <h2 className="text-2xl font-poppins mb-4 font-bold">
              {" "}
              Service Included{" "}
            </h2>
            <p className="text-lg font-montserrat mb-4 ">
              Diagnostic tests, consultations, procedures, and comprehensive
              healthcare offerings.
            </p>
            <p className="font-roboto text-xl  mb-4">
              <IoMdCheckmark className="inline mr-2 text-[#799f4a]" /> Free
              Consultation
            </p>
            <p className="font-roboto text-xl mb-4">
              <IoMdCheckmark className="inline mr-2 text-[#799f4a]" />{" "}
              Medication Include
            </p>
            <p className="font-roboto text-xl">
              <IoMdCheckmark className="inline mr-2 text-[#799f4a]" /> Post
              Operation{" "}
            </p>
          </div>

          {/* <div className="bg-[#f2f2f2] px-10 py-10 mb-6">
            <h2 className="text-2xl font-poppins mb-4 font-bold">
              {" "}
              Have A Question{" "}
            </h2>
            <p className="text-lg font-montserrat mb-6 ">
            Do you have any questions about our diagnostic center services or procedures? We are here to help clarify any concerns you may have.
            </p>
            <button className="px-8 py-3 text-lg text-white font-semibold rounded bg-[#27201d] hover:bg-[#799f4a]">Contact Us</button>
          </div> */}
          <div className="bg-[#f2f2f2] px-10 py-10 mb-6">
            <h2 className="text-2xl font-poppins mb-4 font-bold">
              {" "}
              Proceed Payment{" "}
            </h2>
            <p className="text-lg font-montserrat mb-6 ">
              Proceed to payment by selecting your preferred method, including
              credit cards, debit cards, electronic transfers, or cash for
              seamless transaction completion at our diagnostic center.
            </p>
            <Link to={`/payment/${singleTest._id}`}>
              <button
                onClick={() => handleAddReservation()}
                className="px-8 py-3 text-lg text-white font-semibold rounded bg-[#27201d] hover:bg-[#799f4a]"
              >
                Pay Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
