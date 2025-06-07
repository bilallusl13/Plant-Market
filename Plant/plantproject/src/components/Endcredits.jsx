import React from 'react';
import indeed from '../photos/indeed.webp';
import Fab from '@mui/material/Fab';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Endcredits() {
  return (
    <div
      className="w-screen min-h-screen bg-center bg-cover flex flex-col items-center justify-center gap-8 px-4 py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${indeed})`,
      }}
    >
      
      <div className="flex items-center gap-4 w-full max-w-2xl">
        <span className="flex-grow h-px bg-gradient-to-r from-green-400 to-green-600"></span>
        <h1 className="text-4xl font-bold text-white whitespace-nowrap">GreenNest</h1>
        <span className="flex-grow h-px bg-gradient-to-r from-green-400 to-green-600"></span>
      </div>

     
      <p className="text-green-200 text-xl text-center max-w-2xl">
        Bringing the beauty of nature into your home
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
    
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-green-200">
              <EmailIcon />
              <span>info@greennest.com</span>
            </div>
            <div className="flex items-center gap-3 text-green-200">
              <PhoneIcon />
              <span>+90 (555) 123 45 67</span>
            </div>
            <p className="text-green-200 mt-4">
              Green Street No:1<br />
              Kadıköy, Istanbul
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="grid grid-cols-1 gap-3">
            <Fab
              variant="extended"
              size="large"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <InstagramIcon sx={{ mr: 1, color: 'white' }} />
              @greennest
            </Fab>
            <Fab
              variant="extended"
              size="large"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
            >
              <FacebookIcon sx={{ mr: 1, color: 'white' }} />
              @greennest
            </Fab>
            <Fab
              variant="extended"
              size="large"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
            >
              <GoogleIcon sx={{ mr: 1, color: 'white' }} />
              greennest.com
            </Fab>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-green-200 mt-8">
        <p className="text-sm">© 2024 GreenNest. All rights reserved.</p>
        <p className="text-sm mt-2">Plant data powered by the Perenual API.</p>
      </div>
    </div>
  );
}

export default Endcredits;
