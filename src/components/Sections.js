import data from "../data.json";
import Section from "./Section";

const Sections = () => {
    return (
        <div>
            {data.map((elem, index) => {
                return <Section {...elem} id="section" />;
            })}
        </div>
    );
};

export default Sections;
