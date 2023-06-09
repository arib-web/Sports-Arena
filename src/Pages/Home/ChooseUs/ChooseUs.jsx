import React from "react";
import Container from "../../../Components/Container/Container";
import coach from "../../../assets/coach.png";
import networking from "../../../assets/networking.png";
import strategy from "../../../assets/strategy.png";
import player from "../../../assets/football-player.png";
import esastrategy from "../../../assets/esa-strategy.png";
import award from "../../../assets/award.png";

const ChooseUs = () => {
  return (
    <section className="my-5">
      <Container>
        <div className="section-title mx-auto text-center lg:w-1/2 mb-6">
          <h2 className="text-3xl font-bold underline mb-2">Why Choose Us</h2>
          <p className="text-lg">
            We, at Sports Arena,believe in building a strong foundation for
            players by teaching them strong values,perseverance and diligence
            whilst they learnvaluable techniques and skills to become ultimate
            game changers!-
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card w-96 glass">
            <figure className="mt-2">
              <img src={coach} alt="car!" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-2xl font-bold">Certified Coaches</h2>
              <p>
                Our highly skilled certified coaches are committed to create a
                safe, positive and nurturing environment to ensure every
                individual meets their full potential and inculcating them with
                the value of sportsmanship.
              </p>
            </div>
          </div>
          {/* card-1  */}
          <div className="card w-96 glass">
            <figure className="mt-2">
              <img src={networking} alt="coaching" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-2xl font-bold">Diverse Programs</h2>
              <p>
                We offer flexible programs to ensure no individual is left
                behind. We give quality training and supervision the utmost
                importance.
              </p>
            </div>
          </div>
          {/* card-2  */}
          <div className="card w-96 glass">
            <figure className="mt-2">
              <img src={strategy} alt="strategy" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-2xl font-bold">Sports Education</h2>
              <p>
                Our program focuses on tactical knowledge whilst also ensuring
                every player comprehends the importance of team spirit,
                leadership, and dedication.
              </p>
            </div>
          </div>
          {/* card-3  */}
          <div className="card w-96 glass">
            <figure className="mt-2">
              <img src={player} alt="player" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-2xl font-bold">Moulding Children</h2>
              <p>
                Aimed at solely shaping their future in this rewarding sport -
                we provide the right infrastructure and latest pieces of
                equipment to ensure consistent, quality training and coaching
                throughout.
              </p>
            </div>
          </div>
          {/* card-4  */}
          <div className="card w-96 glass">
            <figure className="mt-2">
              <img src={esastrategy} alt="player" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-2xl font-bold">The Fundamentals</h2>
              <p>Our classes are designed to improve balance and full body
                coordination as well as strength and development through sensory
                stimulation while reinforcing good social and sportsman skills.
              </p>
            </div>
          </div>
          {/* card-5  */}
          <div className="card w-96 glass">
            <figure className="mt-2">
              <img src={award} alt="award" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-2xl font-bold">Results</h2>
              <p>Our philosophy is to teach the beautiful game, enjoy the beautiful game and make memories that will last a lifetime.
              </p>
            </div>
          </div>
          {/* card-6  */}
        </div>
      </Container>
    </section>
  );
};

export default ChooseUs;
