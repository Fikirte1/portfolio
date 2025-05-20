const WorkspaceImage = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-[#f5f5f5] dark:bg-[#2a2a2a]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full relative">
            {/* Window Frame */}
            <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-4">
              {/* Window Content */}
              <div className="relative h-full bg-[#e8f3e8] dark:bg-[#1a2b1a] rounded-2xl overflow-hidden">
                {/* Desk */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#d4b895] dark:bg-[#4a3c2a]"></div>
                {/* Chair */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                  <div className="w-32 h-40 bg-[#a7c4bc] dark:bg-[#2a4a42] rounded-t-2xl"></div>
                </div>
                {/* Laptop */}
                <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
                  <div className="w-40 h-24 bg-[#808080] dark:bg-[#404040] rounded-lg"></div>
                </div>
                {/* Plants */}
                <div className="absolute top-8 right-8">
                  <div className="w-16 h-24 bg-[#567d46] dark:bg-[#2a4a23] rounded-lg"></div>
                </div>
                {/* Window View - Trees */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 left-1/4 w-32 h-48 bg-[#4a6741] dark:bg-[#2a3b25] rounded-full transform -translate-y-8"></div>
                  <div className="absolute top-0 right-1/4 w-32 h-48 bg-[#4a6741] dark:bg-[#2a3b25] rounded-full transform -translate-y-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceImage; 