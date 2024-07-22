const TopButtons = () => {
  const cities = [
    {
      id: 1,
      name: "Bhopal",
    },
    {
      id: 2,
      name: "Surat",
    },
    {
      id: 3,
      name: "Noida",
    },
    {
      id: 4,
      name: "Hisar",
    },
    {
      id: 5,
      name: "Mumbai",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => {
        return (
          <button
            key={city.id}
            className="text-lg font-medium hover:bg-gray-700 px-3 py-2 rounded-md transition ease-in"
          >
            {city.name}
          </button>
        );
      })}
    </div>
  );
};

export default TopButtons;
