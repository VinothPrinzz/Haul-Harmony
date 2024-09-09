import React from 'react';

const LogisticsProfile = () => {
  // Mock data - in a real application, this would come from props or a data fetch
  const driverInfo = {
    name: "Bennett University, Greater Noida 201301",
    rating: 4.5,
    contactNo: "999XXXXXXX"
  };

  const activities = [
    { type: "Truck type", pickup: "Pickup to destination", weight: "-- ton"},
    { type: "Truck type", pickup: "Pickup to destination", weight: "-- ton"},
    { type: "Truck type", pickup: "Pickup to destination", weight: "-- ton"},
    { type: "Truck type", pickup: "Pickup to destination", weight: "-- ton"}
  ];

  const ratings = [
    { name: "Name", rating: 4, comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { name: "Name", rating: 5, comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-2">{driverInfo.name}</h2>
        <p className="text-gray-600">Rating: {driverInfo.rating}</p>
        <p className="text-gray-600">Contact no.: {driverInfo.contactNo}</p>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Activities</h3>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">{activity.type}</p>
                  <p className="text-sm text-gray-600">{activity.pickup}</p>
                  <p className="text-sm text-gray-600">{activity.weight}</p>
                </div>
              </div>
              <div className="text-right">
                <p>{activity.earnings}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Ratings</h3>
        <div className="space-y-4">
          {ratings.map((rating, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <p className="font-semibold">{rating.name}</p>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600">{rating.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogisticsProfile;