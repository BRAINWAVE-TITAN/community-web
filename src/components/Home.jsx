import React from "react";
import vf from "../assests/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillApple,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Live On Air</h1>
          <h2><b>Solution to all your problems</b></h2>
        </main>
      </div>

      <div className="home2">
        <img src={vf} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            I am Vansh, A developer, coder, and a certified ethical hacker who
            has eperience of more than 2 years. This website is for your coding
            or tech problems which you can faced every day. Me and my team
            develops this platform to solve your queries related to development
            and coding. This website is inspired by Stackoverflow and Reddit but
            it has real-time communication with India's great tech-enthusiasts.
            Also, we have to teach how you can crack Tech interviews and enable
            yor problem solving skills. This helps you in competitive coding
            competitions and crack your Dream company.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Dream Companies</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}>
              <AiFillApple />
              <p>Apple</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
