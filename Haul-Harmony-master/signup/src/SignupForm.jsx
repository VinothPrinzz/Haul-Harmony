import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Truck, Package, User, Mail, Lock, Smartphone, CreditCard, Warehouse, MapPin, Clipboard, Check } from 'lucide-react';

const SignupForm = () => {
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    mobile: '',
    otp: '',
    verification: '',
    address: '',
    experience: ''
  });
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const constraintsRef = useRef(null);
  const truckX = useMotionValue(0);
  const truckProgress = useTransform(truckX, [0, 250], [0, 100]);

  useEffect(() => {
    const unsubscribe = truckProgress.onChange(latest => {
      if (latest >= 100) {
        setIsSignedUp(true);
        // Here you would typically trigger your signup logic
      }
    });

    return () => unsubscribe();
  }, [truckProgress]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === 'mobile') {
      updatedValue = value.replace(/\D/g, '').slice(0, 10);
    } else if (name === 'verification' && userType !== 'driver') {
      updatedValue = value.replace(/\D/g, '').slice(0, 12);
    } else if (name === 'otp') {
      updatedValue = value.replace(/\D/g, '').slice(0, 6);
    }

    setFormData({ ...formData, [name]: updatedValue });
  };

  const getVerificationLabel = () => {
    switch(userType) {
      case 'driver': return 'Truck RC Number';
      case 'customer': return 'Aadhar Number (12 digits)';
      case 'owner': return 'Company Registration Number';
      default: return 'Verification Number';
    }
  };

  const handleSendOTP = () => {
    // Simulating OTP send
    setOtpSent(true);
    alert('OTP sent to your mobile number!');
  };

  const handleVerifyOTP = () => {
    // Simulating OTP verification
    setOtpVerified(true);
    alert('OTP verified successfully!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Join Our Logistics Network</h2>
      
      <form className="space-y-4">
        <div className="flex justify-around mb-6">
          {[
            { type: 'driver', icon: Truck, color: 'blue', label: 'Truck Driver' },
            { type: 'customer', icon: Package, color: 'green', label: 'Customer' },
            { type: 'owner', icon: Warehouse, color: 'purple', label: 'Owner' }
          ].map(({ type, icon: Icon, color, label }) => (
            <motion.button
              key={type}
              type="button"
              onClick={() => setUserType(type)}
              className={`flex flex-col items-center p-3 rounded-lg ${
                userType === type ? `bg-${color}-100 ring-2 ring-${color}-400` : 'bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={24} className={`text-${color}-500`} />
              <span className="mt-2 text-sm font-medium capitalize">{label}</span>
            </motion.button>
          ))}
        </div>

        {[
          { name: 'email', icon: Mail, placeholder: 'Email Address' },
          { name: 'password', icon: Lock, placeholder: 'Password', type: 'password' },
          { name: 'mobile', icon: Smartphone, placeholder: 'Mobile Number (10 digits)' },
          { name: 'verification', icon: CreditCard, placeholder: getVerificationLabel() },
          { name: 'address', icon: MapPin, placeholder: 'Pickup/Delivery Address' },
          { name: 'experience', icon: Clipboard, placeholder: userType === 'driver' ? 'Years of Driving Experience' : 'Years in Logistics Business' }
        ].map(({ name, icon: Icon, placeholder, type = 'text' }) => (
          <div key={name}>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{placeholder}</label>
            <div className="relative">
              <input
                type={type}
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder={placeholder}
                required
              />
              <Icon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        ))}

        {/* OTP Section */}
        <div className="flex space-x-2">
          <div className="flex-grow">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">OTP</label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              required
            />
          </div>
          <div className="flex items-end">
            {!otpSent ? (
              <button
                type="button"
                onClick={handleSendOTP}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send OTP
              </button>
            ) : !otpVerified ? (
              <button
                type="button"
                onClick={handleVerifyOTP}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Verify OTP
              </button>
            ) : (
              <div className="px-4 py-2 bg-green-100 text-green-800 rounded-md flex items-center">
                <Check size={18} className="mr-1" /> Verified
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <div 
            ref={constraintsRef} 
            className="h-14 bg-gray-200 rounded-full relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
              style={{ width: truckProgress.get() + '%' }}
            />
            <motion.div 
              drag="x"
              dragConstraints={constraintsRef}
              dragElastic={0}
              dragMomentum={false}
              className="absolute top-1 left-1 w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md"
              style={{ x: truckX }}
            >
              <Truck size={24} className="text-blue-600" />
            </motion.div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
              <span className="text-white font-semibold">
                {isSignedUp ? "Welcome Aboard!" : "Drive to Sign Up"}
              </span>
            </div>
          </div>
        </div>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
        <p>Already on our logistics team? <a href="/login" className="font-medium text-blue-600 hover:underline">Log in</a></p>
      </div>
    </motion.div>
  );
};

export default SignupForm;
