const RealTimeFireMonitoring = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 bg-gray-100 p-8">
        <h2 className="text-2xl font-bold mb-4">Real-Time Fire Monitoring Stats</h2>
        {/* Replace the following with actual stats */}
        <p className="mb-2"><strong>Stat 1:</strong> Value</p>
        <p className="mb-2"><strong>Stat 2:</strong> Value</p>
        <p className="mb-2"><strong>Stat 3:</strong> Value</p>
      </div>
      <div className="md:w-2/3 p-8">
        <h2 className="text-center text-2xl font-bold mb-4">Live Stream</h2>
        {/* Shaded box as a placeholder for the video player */}
        <div className="w-full h-64 md:h-96 bg-gray-300" />
      </div>
    </div>
  );
};

export default RealTimeFireMonitoring;