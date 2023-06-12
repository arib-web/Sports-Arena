import React from "react";
import { Rotate } from "react-awesome-reveal";

const SingleClass = ({ item }) => {
  const { _id, image, class_name, students } = item;
  return (
    <Rotate triggerOnce={1}>
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body text-center my-auto">
          <h2 className="text-2xl">
            Class: <span className="font-bold">{class_name}</span>
          </h2>
          <p>
            <span className="font-semibold">Number of Students:</span>{" "}
            {students}
          </p>
        </div>
      </div>
    </Rotate>
  );
};

export default SingleClass;
