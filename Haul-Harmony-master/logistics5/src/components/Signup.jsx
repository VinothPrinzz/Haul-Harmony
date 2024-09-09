import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle, Truck, Building, ChevronDown, Mail, Lock, Smartphone, CreditCard, MapPin, Briefcase } from 'lucide-react';

const Signup = ({ setUserType }) => {
  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    mobile: '',
    verification: '',
    address: '',
    experience: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setUserType(selectedType);
    // Comment out any backend or database operations
    // console.log('Form Data:', formData);
    // Simulating form submission
    switch (selectedType) {
      case 'driver':
        navigate('/driver/profile');
        break;
      case 'individual-owner':
        navigate('/individual-owner');
        break;
      case 'logistics-company':
        navigate('/logistics-company/profile');
        break;
      default:
        break;
    }
  };

  const userTypes = [
    { value: 'driver', label: 'Driver', icon: Truck },
    { value: 'individual-owner', label: 'Individual Owner', icon: UserCircle },
    { value: 'logistics-company', label: 'Logistics Company', icon: Building },
  ];

  const getVerificationLabel = () => {
    switch (selectedType) {
      case 'driver':
        return 'Driving License Number';
      case 'individual-owner':
        return 'Aadhar Number';
      case 'logistics-company':
        return 'Company Registration Number';
      default:
        return 'Verification Number';
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="w-full max-w-md">
        <form onSubmit={handleSignup} className="bg-white shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4">
          <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-800">Join Our Network</h2>
          <div className="flex flex-wrap -mx-2 mb-6">
            {userTypes.map((type) => (
              <div key={type.value} className="w-1/3 px-2">
                <button
                  type="button"
                  onClick={() => setSelectedType(type.value)}
                  className={`w-full py-3 flex flex-col items-center justify-center rounded-lg transition-colors duration-200 ${
                    selectedType === type.value
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <type.icon size={24} className="mb-1" />
                  <span className="text-xs font-medium">{type.label}</span>
                </button>
              </div>
            ))}
          </div>

          {[
            { name: 'email', icon: Mail, type: 'email', placeholder: 'Email Address' },
            { name: 'password', icon: Lock, type: 'password', placeholder: 'Password' },
            { name: 'mobile', icon: Smartphone, type: 'tel', placeholder: 'Mobile Number' },
            { name: 'verification', icon: CreditCard, type: 'text', placeholder: getVerificationLabel() },
            { name: 'address', icon: MapPin, type: 'text', placeholder: 'Address' },
            { name: 'experience', icon: Briefcase, type: 'text', placeholder: 'Years of Experience' },
          ].map((field) => (
            <div key={field.name} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.name}>
                {field.placeholder}
              </label>
              <div className="relative">
                <field.icon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>
          ))}

          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:text-blue-600 font-semibold">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;