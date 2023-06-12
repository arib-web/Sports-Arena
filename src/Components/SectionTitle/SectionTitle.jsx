import { Slide } from "react-awesome-reveal";
import { AuthContext } from "../../Provider/AuthProviders";
import { useContext } from "react";

const SectionTitle = ({ heading }) => {
  const { theme } = useContext(AuthContext);
  return (
    <Slide triggerOnce={1}>
      <div
        className={`mx-auto text-center lg:w-1/2 mb-6 mt-16 ${theme === "dark" ? "dark-theme" : "light-theme"}`}
      >
        <h2 className="text-3xl font-bold underline mb-2">{heading}</h2>
        <p className="text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          voluptate nihil oditnesciunt suscipit ad vitae nam repellat corrupti
          eius!
        </p>
      </div>
    </Slide>
  );
};

export default SectionTitle;
