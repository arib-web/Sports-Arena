import React, { useEffect, useState } from "react";
import SingleClass from "./SingleClass";
import Container from "../../../Components/Container/Container";

const PopularClass = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/classes`);
      const data = await response.json();
      setClasses(data);
    };

    fetchData();
  }, []);
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
        {classes.map((item) => (
          <SingleClass key={item._id} item={item}></SingleClass>
        ))}
      </div>
    </Container>
  );
};

export default PopularClass;
