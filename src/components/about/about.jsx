import React from "react";
import image from "../../static/image/kohali.jpg";
import "../../static/css/about.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="contAbout row">
          <div className="about col-xl-6 col-lg-6 col-md-6 col-sm-6 col-5">
            <div className="aboutHeading--rot">
              ABOUT THE <span>CRICKET LEAGUE</span>
            </div>
            <div className="aboutUnderline--rot" />
            <img className="kohali" src={image} alt="Kohali" />
          </div>
          <div className="about--details col-xl-6 col-lg-6 col-md-6 col-sm-6 col-7">
            <div className="paragraph">
              <div className="heading--about col-11 col-sm-12">
                STORY BEHIND STARTING <span>THE LEAGUE</span>
              </div>
              <div className="underline--about" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, odit accusantium at neque beatae a quaerat
                explicabo nihil ex reprehenderit iusto asperiores culpa eligendi
                veniam laborum ullam, earum voluptatibus quod? Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Perferendis cum, id
                porro fugit assumenda architecto quo quidem dolor fuga nam dicta
                recusandae! Incidunt corporis eaque quaerat placeat error libero
                repellat? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Voluptatum ea optio nihil! Dicta vitae soluta ea iste
                pariatur quo facere error, unde quasi dolore ipsum at velit sint
                est saepe.Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Dignissimos, odit accusantium at neque beatae a quaerat
                explicabo nihil ex reprehenderit iusto asperiores culpa eligendi
                veniam laborum ullam, earum voluptatibus quod? Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Perferendis cum, id
                porro fugit
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
