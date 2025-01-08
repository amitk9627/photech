import React from "react";

const Engagement = () => {
  return (
    <div>
      <div>
        <h2 className="text-6xl font-semibold text-center">
          Proven track record of successful project engagements.
        </h2>
      </div>
      <div className="flex items-center gap-5 justify-between mt-20">
        <div className="w-3/12 border-r border-r-gray-500 h-36">
          <h3 className="text-6xl font-semibold">218</h3>
          <p>Client served</p>
        </div>
        <div className="w-3/12 border-r border-r-gray-500 h-36">
          <h3 className="text-6xl font-semibold">218</h3>
          <p>
            Engineers Deployed at various terrains for leading corporates at
            project locations
          </p>
        </div>
        <div className="w-3/12 border-r border-r-gray-500 h-36">
          <h3 className="text-6xl font-semibold">218</h3>
          <p>Years of Industry Experience</p>
        </div>
        <div className="w-3/12  border-r border-r-gray-500 h-36">
          <h3 className="text-6xl font-semibold">218</h3>
          <p>Completed Projects</p>
        </div>
      </div>
    </div>
  );
};

export default Engagement;
