// components/ProjectStats.js
const ProjectStats = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg text-white">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span>65% fundraising goal met</span>
          <span className="text-green-500">65%</span>
        </div>
        <div className="w-full bg-gray-600 h-2 rounded-full">
          <div className="bg-green-500 h-full rounded-full" style={{ width: "65%" }}></div>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-bold">Fundraising goal</h4>
        <p className="text-2xl">$190,204,512</p>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-bold">Total raised</h4>
        <p className="text-2xl">$150,491,562</p>
      </div>
      <div className="text-sm">
        <p>
          <strong>Starting date:</strong> SEP 9, 2023
        </p>
        <p>
          <strong>Completion date:</strong> June 9, 2025
        </p>
        <p>
          <strong>Number of backers:</strong> 11,739
        </p>
      </div>
    </div>
  );
};

export default ProjectStats;
