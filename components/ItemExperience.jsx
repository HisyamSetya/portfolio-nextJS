const ItemExperience = ({ role, company, years }) => {
  return (
    <>
      <div className="flex space-x-4 mt-7 justify-between lg:justify-around items-center text-left">
        <div>
          <p>{role}</p>
          <p className="text-gray-400 text-sm">{company}</p>
        </div>
        <p className="text-gray-400">{years}</p>
      </div>
    </>
  );
};

export default ItemExperience;
