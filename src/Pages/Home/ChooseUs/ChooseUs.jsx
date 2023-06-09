import React from "react";
import Container from "../../../Components/Container/Container";
import coach from "../../../assets/coach.png"
import networking from "../../../assets/networking.png"

const ChooseUs = () => {
  return (
    <section className="my-5">
      <Container>
        <div className="section-title mx-auto text-center w-1/2 mb-6">
          <h2 className="text-3xl font-bold underline mb-2">Why Choose Us</h2>
          <p className="text-lg">
            We, at Sports Arena,believe in building a strong foundation for
            players by teaching them strong values,perseverance and diligence
            whilst they learnvaluable techniques and skills to become ultimate
            game changers!-
          </p>
        </div>
        <div className=" grid grid-cols-3 gap-4">
          <div className="card w-96 glass">
            <figure className="mt-2">
              <img
                src={coach}
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Certified Coaches</h2>
              <p>Our highly skilled certified coaches are committed to create a safe, positive and nurturing environment to ensure every individual meets their full potential and inculcating them with the value of sportsmanship.</p>
            </div>
          </div>
          {/* card-1  */}
          <div className="card w-96 glass">
            <figure className="mt-2">
              <img
                src={networking}
                alt="coaching"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Diverse Programs</h2>
              <p>We offer flexible programs to ensure no individual is left behind. We give quality training and supervision the utmost importance.</p>
            </div>
          </div>
          {/* card-2  */}
          <div className="card w-96 glass">
            <figure className="mt-2">
              <img
                src={networking}
                alt="networking"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Diverse Programs</h2>
              <p>We offer flexible programs to ensure no individual is left behind. We give quality training and supervision the utmost importance.</p>
            </div>
          </div>
          {/* card-2  */}
        </div>
      </Container>
    </section>
  );
};

export default ChooseUs;
