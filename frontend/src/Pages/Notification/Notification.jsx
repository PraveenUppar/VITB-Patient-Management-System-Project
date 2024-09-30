const Notification = () => {
  return (
    <div className="flex">
      <div className="flex-1 p-8 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Facilities</h2>
            <p>Total Facilities: 10</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-teal-600 text-white py-2 px-4 rounded">
              Export
            </button>
            <button className="bg-gray-300 py-2 px-4 rounded">
              Advanced Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
