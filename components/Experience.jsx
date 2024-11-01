import ItemExperience from "./ItemExperience";

const Experience = () => {
  return (
    <>
      <section className="py-14 px-12">
        <div id="experience">
          <h3 className="text-center font-bold text-lg py-5 border-gray-500 border-b-2">
            Experience
          </h3>

          <ItemExperience role="IT Analyst" company="Unilever Indonesia" years="2021 - Present" />

          <ItemExperience
            role="IT Technical Support"
            company="Unilever Indonesia"
            years="2020 - 2021"
          />
          <ItemExperience role="IT Business Analyst" company="Rhapsodie.co" years="2019 - 2020" />
        </div>
      </section>
    </>
  );
};

export default Experience;
