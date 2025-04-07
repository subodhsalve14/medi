import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      {/* Header Section */}
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      {/* About Section */}
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="About Us" />
        
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Medicare, your trusted partner in delivering reliable and convenient healthcare solutions. We are dedicated to making quality healthcare accessible, affordable, and effortless for everyone. Our platform empowers you to book appointments, manage prescriptions, and consult with healthcare professionals—all from the comfort of your home.</p>
          
          <p>At Medicare, we understand that healthcare should be personal. That's why we offer tailored recommendations, health tips, and medication reminders to keep you on top of your well-being. Whether you're managing a chronic condition or simply prioritizing preventive care, we are here to support you at every stage of your health journey.</p>
          
          <p>We leverage the latest technology to streamline healthcare services, offering you secure access to medical records, real-time appointment tracking, and instant consultation scheduling. Our commitment to innovation ensures a seamless and user-friendly experience, making healthcare simpler and smarter.</p>

          <p className='text-gray-800 font-semibold'>Our Vision</p>
          <p>Our vision at Medicare is to create a connected healthcare ecosystem where patients and healthcare providers can collaborate effortlessly. We aim to eliminate barriers to quality care by offering faster access to medical experts, ensuring you receive the right care at the right time.</p>

          <p>We strive to become a leading digital healthcare platform by continuously improving our services, expanding our network, and putting patient care at the heart of everything we do.</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <p className='font-semibold'>EFFICIENCY:</p>
          <p>Streamlined appointment booking and fast access to healthcare services, reducing wait times and enhancing convenience.</p>
        </div>
        
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <p className='font-semibold'>CONVENIENCE: </p>
          <p>Access to a wide network of trusted doctors, clinics, and pharmacies near you, ensuring quality care is just a click away.</p>
        </div>
        
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <p className='font-semibold'>PERSONALIZATION:</p>
          <p>Tailored health insights, reminders, and customized recommendations to keep you informed and proactive about your health.</p>
        </div>
        
      </div>

      {/* Additional Features Section */}
      <div className='text-xl my-4'>
        <p>OUR <span className='text-gray-700 font-semibold'>FEATURES</span></p>
      </div>

      <div className='flex flex-col md:flex-row gap-10 mb-20'>

        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <p className='font-semibold'>SECURE DATA:</p>
          <p>We use advanced encryption to protect your personal health information, ensuring your data is safe and confidential.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <p className='font-semibold'>24/7 SUPPORT:</p>
          <p>Our dedicated support team is available round-the-clock to assist you with any queries or issues.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <p className='font-semibold'>USER-FRIENDLY INTERFACE:</p>
          <p>Our intuitive design makes it easy for users of all ages to navigate and manage their healthcare effortlessly.</p>
        </div>

      </div>

    </div>
  )
}

export default About
