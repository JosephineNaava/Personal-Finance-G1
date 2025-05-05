import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, Wallet, Settings } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-4">
      <nav className="space-y-1">
        <NavLink to="/dashboard">
          {({ isActive }) => (
            <Button 
              variant={isActive ? "secondary" : "ghost"} 
              className="w-full justify-start gap-2"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Button>
          )}
        </NavLink>
        
        <NavLink to="/transactions">
          {({ isActive }) => (
            <Button 
              variant={isActive ? "secondary" : "ghost"} 
              className="w-full justify-start gap-2"
            >
              <Wallet className="h-4 w-4" />
              Transactions
            </Button>
          )}
        </NavLink>
        
        <NavLink to="/settings">
          {({ isActive }) => (
            <Button 
              variant={isActive ? "secondary" : "ghost"} 
              className="w-full justify-start gap-2"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          )}
        </NavLink>
      </nav>
    </aside>
  );
}