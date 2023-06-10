import React from "react";

const SingleClass = ({ item }) => {
  const { _id, image, class_name, students } = item;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-3xl">Class: {class_name}</h2>
        <p>Number Of Students:{students}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Enroll</button>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
