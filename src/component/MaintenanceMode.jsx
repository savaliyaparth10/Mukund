import React from "react";

export const MaintenanceMode = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 p-6 text-center">
          {/* Tool Icon */}
          <svg
            className="h-16 w-16 text-white mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
            We're currently under maintenance
          </h1>

          <p className="text-gray-600 mb-6 text-center">
            We're working hard to improve our website and will be back online
            shortly. Thank you for your patience.
          </p>

          <div className="flex items-center justify-center mb-6">
            {/* Clock Icon */}
            <svg
              className="h-5 w-5 text-blue-600 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm text-gray-700">
              Estimated completion: 2 hours
            </span>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <div className="flex items-start">
              {/* Info Icon */}
              <svg
                className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="text-sm text-blue-700 font-medium">
                  Why are we down?
                </p>
                <p className="text-sm text-blue-600 mt-1">
                  We're upgrading our servers to bring you better performance
                  and new features.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">
              For urgent inquiries, please contact:
            </p>
            <a
              href="mailto:info.naturx@gmail.com"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              info.naturx@gmail.com
            </a>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">Status updates:</div>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Check our status page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
