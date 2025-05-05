import { Link, Outlet } from 'react-router-dom'
import { Button } from './ui/button'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Combined Header with Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <h1 className="text-xl font-bold text-gray-800">FinanceDash</h1>
            
            {/* Main Navigation */}
            <nav className="flex space-x-2">
              <Link to="/dashboard">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                  Dashboard
                </Button>
              </Link>
              <Link to="/transactions">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                  Transactions
                </Button>
              </Link>
              <Link to="/settings">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                  Settings
                </Button>
              </Link>
            </nav>
            
            {/* User Dropdown */}
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2 hover:bg-gray-100">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/user.png" />
                      <AvatarFallback>US</AvatarFallback>
                    </Avatar>
                    <span className="text-gray-600">User</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem className="cursor-pointer hover:bg-gray-50">
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-gray-50">
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 text-red-600 focus:text-red-600">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 bg-white rounded-lg  border-gray-200">
          <Outlet />
        </div>
      </main>
      
      {/* Optional Footer */}
      <footer className="py-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} FinanceDash. All rights reserved.
        </div>
      </footer>
    </div>
  )
}