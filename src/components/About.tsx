import React from 'react';
import './About.css'; // Import the CSS for styling

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About This Website</h1>
      <p>
        This website is an accessibility exercise designed to demonstrate the importance of accessibility in web development. 
        It showcases various features that can be implemented to enhance user experience for individuals with disabilities.
      </p>
      <h1>Helpful Resources</h1>
      
      {/* Making this list inaccessible */}
      <div>
        <div>
          {/* Non-clickable text, looks like plain text instead of a link */}
          <span className="link-text" onClick={() => window.open("https://webaim.org/resources/contrastchecker/", "_blank")}>
            Color Contrast Tool
          </span>
          : Check color contrasts to ensure they meet the AA grade (should be at least 4.5).
        </div>
        <div>
          <span className="link-text" onClick={() => window.open("https://htmlcolorcodes.com/", "_blank")}>
            Hex Color Picker
          </span>
          : A tool to help you pick hex colors.
        </div>
        <div>
          <span className="link-text" onClick={() => window.open("https://chromewebstore.google.com/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp", "_blank")}>
            Landmark Chrome Extension
          </span>
          : Chrome extension to navigate through landmarks.
        </div>
      </div>
    </div>
  );
};

export default About;
