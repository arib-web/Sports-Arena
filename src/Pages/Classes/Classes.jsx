import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import Container from "../../Components/Container/Container";

const Classes = () => {
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
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
    </Container>
  );
};

export default Classes;
