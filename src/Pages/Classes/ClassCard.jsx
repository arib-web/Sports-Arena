import React from "react";

const ClassCard = ({ item }) => {
  console.log(item);

  const {
    _id,
    image,
    class_name,
    instructorName,
    availableSeats,
    price,
  } = item;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-3xl">Class: {class_name}</h2>
        <h3 className="font-semibold text-xl">Instructor{instructorName}</h3>
        <p>Available Seats:{availableSeats}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Enroll</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
