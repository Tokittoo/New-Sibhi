import React from 'react'

const GitHubData: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">GitHub Data</h2>
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Repository Statistics</h3>
          <p className="text-gray-600">GitHub data will be displayed here.</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Recent Activity</h3>
          <p className="text-gray-600">Recent GitHub activity will be shown here.</p>
        </div>
      </div>
    </div>
  )
}

export default GitHubData
