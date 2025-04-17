import { Link, Outlet } from 'react-router-dom'
import { Button } from './ui/Button'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-4 p-4 ">
              <Link to="/dashboard">
                <Button variant="ghost" className="text-gray-400 ">
                  Dashboard
                </Button>
              </Link>
              <Link to="/transactions">
                <Button variant="ghost" className="text-gray-400 ">
                  Transactions
                </Button>
              </Link>
              <Link to="/settings">
                <Button variant="ghost" className="text-gray-400 ">
                  Settings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Outlet />
        </div>
      </main>
    </div>
  )
}