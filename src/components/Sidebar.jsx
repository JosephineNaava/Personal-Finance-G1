// src/components/sidebar.jsx
import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { 
  HomeIcon,
  WalletIcon,
  SettingsIcon,
  PieChartIcon 
} from "lucide-react"

export function Sidebar({ isOpen, onClose }) {
  const navItems = [
    { to: "/dashboard", icon: <HomeIcon className="h-4 w-4" />, label: "Dashboard" },
    { to: "/transactions", icon: <WalletIcon className="h-4 w-4" />, label: "Transactions" },
    { to: "/reports", icon: <PieChartIcon className="h-4 w-4" />, label: "Reports" },
    { to: "/settings", icon: <SettingsIcon className="h-4 w-4" />, label: "Settings" },
  ]

  return (
    <>
      {/* Desktop Sidebar (always visible) */}
      <aside className="hidden md:block w-64 border-r h-[calc(100vh-56px)] fixed left-0 top-14">
        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {({ isActive }) => (
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2"
                >
                  {item.icon}
                  {item.label}
                </Button>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar (sheet) */}
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="w-64 px-0">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink 
                key={item.to} 
                to={item.to}
                onClick={onClose}
              >
                {({ isActive }) => (
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className="w-full justify-start gap-2 rounded-none h-12"
                  >
                    {item.icon}
                    {item.label}
                  </Button>
                )}
              </NavLink>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}