import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../CustomHook/UseAxiosSecure';
import updateBanner from '../assets/images/update.jpg';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const MyProfile = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const { data: single = [], refetch } = useQuery({
    queryKey: ['user', user?.email],
    queryFn: async () => {
      if (user) {
        const res = await axiosSecure.get(`/user/${user.email}`);
        return res.data;
      }
      return [];
    },
  });

  if (loading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#559797] text-center flex justify-center items-center mx-auto mb-10 mt-24"></div>
    );
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const bloodGroup = form.get('bloodGroup');
    const district = form.get('district');
    const upazila = form.get('upazila');
    const photo = form.get('photo');
    const updateUser = {
      name,
      bloodGroup,
      district,
      upazila,
      photo,
    };

    const updateRes = await axiosSecure.patch(`/user/${single._id}`, updateUser);
    if (updateRes.data.modifiedCount > 0) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Updated successfully',
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center shadow-2xl px-0 py-0 md:px-0 md:py-0 lg:px-8 lg:py-12">
      <div className="flex flex-col md:flex-row bg-gray-100 lg:rounded-lg shadow-lg overflow-hidden w-full max-w-7xl">
        <div className="md:w-1/2 hidden lg:block">
          <img src={updateBanner} alt="Banner" className="object-cover w-full h-full" />
        </div>
        <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-12">
          <h2 className="text-xl md:text-3xl font-semibold font-poppins mb-8 text-gray-800">
            Update Your Profile
          </h2>
          <form onSubmit={handleUpdate}>
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="text"
                  defaultValue={single.email}
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="email"
                  readOnly
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  defaultValue={single.name}
                  placeholder="Enter Name"
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="name"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Blood Group</label>
                <input
                  type="text"
                  defaultValue={single.bloodGroup}
                  placeholder="Blood Group"
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="bloodGroup"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">District</label>
                <input
                  type="text"
                  defaultValue={single.district}
                  placeholder="District"
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="district"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Upazila</label>
                <input
                  type="text"
                  defaultValue={single.upazila}
                  placeholder="Upazila"
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="upazila"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">PhotoUrl</label>
                <input
                  type="text"
                  defaultValue={single.photo}
                  placeholder="Image URL"
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="photo"
                  required
                />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full py-3 lg:py-4 bg-[#559797] text-white font-semibold rounded-md shadow-md hover:bg-[#4a8383]"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
