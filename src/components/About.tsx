import React from 'react';
import './About.css'; // Import the CSS for styling

const About: React.FC = () => {
  const handleClick = () => {
    alert('Thanks! Your feedback is important to us.');
  };

  return (
    <section className="about-container">
      <h1>About This Website</h1>
      <p>
        This website is an accessibility exercise designed to demonstrate the importance of accessibility in web development. 
        It showcases various features that can be implemented to enhance user experience for individuals with disabilities.
      </p>
      <h2>Helpful Resources</h2>
      
      {/* Making this list inaccessible */}
      <div>
        <div>
          {/* Non-clickable text, looks like plain text instead of a link */}
          <a
            href="https://webaim.org/resources/contrastchecker/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
            aria-label="Open a new tab to check color contracts"
          >
            Link 1
          </a>
          <span>
          : Check color contrasts to ensure they meet the AA grade (should be at least 4.5).
          </span>
        </div>
        <div>
          <a
            href="https://htmlcolorcodes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
            aria-label="Open a new tab to the HTML Color Codes tool"
          >
            Link 2
          </a>
          <span>: A tool to help you pick hex colors.</span>
        </div>
        <div>
          <a
            href="https://chromewebstore.google.com/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
            aria-label="Open a new tab to chrome extention to navigate landmarks"
          >
            Link 3
          </a>
          <span>
          : Chrome extension to navigate through landmarks.
          </span>
        </div>
      </div>
      <div className="button-container">
        <button type='button' className="custom-button" onClick={handleClick}>
          Was this page helpful? Click here to let us know!
        </button>
      </div>
    </section>
  );
};

export default About;
