import '../components/SplashScreen.css';
import logo from  '../components/logo.png.jpg';

import "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <div className="splash-container">
      {/* Background top + bottom split */}
      <div className="bg-top"></div>
      <div className="bg-bottom"></div>

      {/* Center card with liquid */}
      <div className="liquid-card">
        {/* Liquid fill (animated) */}
        <div className="liquid"></div>

        {/* Wave on top of liquid */}
        <div className="wave"></div>
        <div className="wave wave2"></div>

        {/* Profile photo */}
        <div className="photo-wrapper">
          <img src={logo} alt="Profile" className="profile-photo" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;