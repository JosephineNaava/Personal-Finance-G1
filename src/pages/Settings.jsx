export default function Settings() {
    return (
      <div className="space-y-4 p-20 ">
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600">
          Configure your account preferences and dashboard settings.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300 mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Profile</h3>
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900">Preferences</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="dark-mode"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="dark-mode" className="font-medium text-gray-700">
                    Dark mode
                  </label>
                  <p className="text-gray-500">Enable dark theme for the dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }