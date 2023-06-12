import React, {  useEffect, useState } from "react";
import SingleClass from "./SingleClass";
import Container from "../../../Components/Container/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

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


  const topClasses = classes
    .slice()
    .sort((a, b) => b.students - a.students)
    .slice(0, 6);
  

  return (
    <Container >
      <SectionTitle heading="Popular Classes" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-16">
        {topClasses.map((item) => (
          <SingleClass key={item._id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default PopularClass;
