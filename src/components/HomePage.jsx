

import GeneralInfo from "./Generalinfo";
import EducationalExperience from "./EducationalExp";
import PracticalExperience from "./PracticalExperience";

function HomePage() {
  return (
    <>
      <EducationalExperience />
      <GeneralInfo />
          <PracticalExperience />
          <button className="custom-button">Please</button>
    </>
  );
}
export default HomePage;
