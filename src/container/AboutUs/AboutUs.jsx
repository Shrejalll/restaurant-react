import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At GERICHT, we believe in more than just serving meals; we're passionate about creating memorable experiences. Nestled in Secotr 16C, Noida NCR, our restaurant is a haven for food enthusiasts seeking a delightful blend of exquisite flavors and warm hospitality. Our culinary team, led by experienced chefs, is dedicated to crafting dishes that transcend the ordinary, using locally sourced, fresh ingredients</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Founded in 2023, GERICHT has been a cornerstone of culinary innovation in [City/Area]. Our journey began with a simple yet ambitious goal: to offer a haven for food enthusiasts seeking an exceptional dining experience. Over the years, we've evolved and grown, but our commitment to quality, authenticity, and community remains unwavering.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
