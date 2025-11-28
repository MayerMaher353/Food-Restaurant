import React from 'react';
// Import CSS (update path as needed)
import './css/about-us.css'; 
// Import all static assets
import awardIcon1 from '../../assets/images/about-us/a1-140x140.png';
import awardIcon2 from '../../assets/images/about-us/a2-140x140.png';
import awardIcon3 from '../../assets/images/about-us/a3-140x140.png';
import awardIcon4 from '../../assets/images/about-us/a4-140x140.png';
import introVideoThumb from '../../assets/images/about-us/intro-about.jpg.webp';

// Array for the repeatable award icons (makes rendering cleaner)
const awardsData = [
  { img: awardIcon1, title: 'HTFG 2020' },
  { img: awardIcon2, title: 'HTF 2018' },
  { img: awardIcon3, title: 'GFA 2019' },
  { img: awardIcon4, title: 'LUA 2021' },
];

function WhoWeAreSection() {
  return (
    <section className="about-us">
      <div className="container">
        <div className="row">
          {/* Main Text Block */}
          <div className="col-lg-12 col-md-12 col-sm-12 about-us-main-text">
            <h5>who we are</h5>
            <h2>
              We Invite You to
              <br />
              Visit Our Restaurant
            </h2>
            <p>
              Assumenda possimus eaque illo iste, autem. Porro eveniet, autem ipsam vitae amet repellat repudiandae
              tenetur, quod corrupti consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae
              repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat. Cumque, consequatur! Tempore
              aspernatur quae repudiandae dolorem, beatae dolorum, praesentium itaque et quam quaerat. Cumque,
              consequatur!
            </p>
          </div>

          {/* Icon/Award Wrapper */}
          <div className="about-icon-wrapper col-lg-12 col-md-12 col-sm-12">
            <div className="container">
              <div className="row">
                {awardsData.map((award, index) => (
                  <div key={index} className="about-icon col-lg-3 col-md-3 col-sm-6">
                    <img src={award.img} alt={`Award: ${award.title}`} />
                    <h6>{award.title}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Video Thumbnail Section */}
          <div className="col-lg-12 col-md-12 col-sm-12 about-video">
            <div className="image-box">
              <div className="about-image-overlay"></div>
              <img src={introVideoThumb} alt="Restaurant interior video thumbnail" />
              {/* Note: The 'a' tag should include the video URL for functionality */}
              <a href="https://www.youtube.com/watch?time_continue=15&v=SXJqEnauNaY&embeds_referring_euri=https%3A%2F%2Ftastyc.bslthemes.com%2F&source_ve_path=MjM4NTE" target='_blank' className="play-youtube-btn">
                {/* Font Awesome icon - assuming you have the library imported globally */}
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;