import React, { useContext, useState } from "react";
import { Reveal } from "react-awesome-reveal";
import { AuthContext } from "../../Provider/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const ClassCard = ({ item }) => {
  const [isEnrolled, setIsEnrolled] = useState(false);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const { _id, image, class_name, instructorName, availableSeats, price } =
    item;

  const handleAddToCart = (item) => {
    if (user && user.email) {
      setIsEnrolled(true);
      const orderItem = {
        classesID: _id,
        class_name,
        image,
        instructorName,
        availableSeats,
        price,
        email: user?.email,
      };
      fetch("https://sports-arena-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Your Class Added Successfully",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },

              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "For Enroll this Course please login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };


  

  return (
    <Reveal triggerOnce={1}>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-3xl">Class: {class_name}</h2>
          <h3 className="font-semibold text-xl">Instructor{instructorName}</h3>
          <p>Available Seats:{availableSeats}</p>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            {/* <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Enroll</button> */}
            <button
              // onClick={handleAddToCart}
              onClick={() => handleAddToCart(item)}
              className="btn btn-primary"
              disabled={isEnrolled}
            >
              {user && user.email ? "Enroll" : "Login to Enroll"}
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ClassCard;
