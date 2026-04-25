"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    const storedToken = window.localStorage.getItem("rydinex_admin_token");
    setToken(storedToken);
    
    // Simple mock auth guard
    if (!storedToken && pathname !== "/admin") {
       // In a real app we'd redirect to a dedicated login page
       // router.push("/admin");
    }
  }, [pathname, router]);

  // If not logged in and on the base /admin page, just render children (the login view)
  if (isClient && !token && pathname === "/admin") {
    return <div className="bg-[#131314] min-h-screen text-[#e5e2e3]">{children}</div>;
  }

  const isActive = (path: string) => {
    if (path === "/admin" && pathname === "/admin") return true;
    if (path !== "/admin" && pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { name: "Executive Dashboard", path: "/admin", icon: "dashboard" },
    { name: "Driver Management", path: "/admin/drivers", icon: "local_taxi" },
    { name: "Rider Management", path: "/admin/riders", icon: "person" },
    { name: "Financials (Stripe)", path: "/admin/financials", icon: "payments" },
    { name: "Safety & Compliance", path: "/admin/safety", icon: "verified_user" },
    { name: "System Settings", path: "/admin/settings", icon: "settings" },
  ];

  return (
    <div className="bg-[#111317] text-[#e2e2e8] antialiased min-h-screen selection:bg-[#276ef1] selection:text-white flex">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full flex flex-col py-6 bg-[#080a0d] w-64 border-r-0 font-['Manrope'] antialiased tracking-tight z-50">
        <div className="px-6 mb-10">
          <span className="text-xl font-bold text-white tracking-tighter">Rydinex Admin</span>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Platform Controller</p>
        </div>
        
        <nav className="flex-1 space-y-1 pr-4">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link 
                key={item.path} 
                href={item.path}
                className={`flex items-center gap-4 px-6 py-3 font-semibold transition-all duration-200 rounded-r-full ${
                  active 
                    ? "text-[#276ef1] bg-[#1a1c20]" 
                    : "text-gray-500 hover:text-white hover:bg-[#111317]"
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-6 mt-auto pt-6 border-t border-white/5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#1e2024] overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyjpt9bc740n75YbP8JTMp4Qj3cLpUFjOzqbRmixFRVuYjg3Dn5OJh3OzpOCaT5vUsoxQpI8zFn77Jf3nUW8Z_2pF7rAz8TqifV7HbPV1XFtSpcSLSK-3mHpmBrRJXbYsr8eqY4b-bGQcGyAW1954jGY24Gu4k9ZibC1FqsOUDDICo3IT4OURXo7l6yOJPiluoeKME2dn6Era4oqv84P4ogospObvGrZOKtLriw2wgCGjRM3C6-OEYCvNNpt0j4eBPL8llZDNkZPY" 
              alt="Admin User Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <p className="text-xs font-bold text-white">Chief Admin</p>
            <p className="text-[10px] text-gray-500">ID: 8842-AX</p>
          </div>
        </div>
      </aside>

      {/* Main Layout Area */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* TopNavBar */}
        <header className="flex items-center justify-between px-8 bg-[#0f1115]/80 backdrop-blur-xl w-full h-16 sticky top-0 z-40 border-b border-white/5 font-['Manrope'] text-sm font-medium">
          <div className="flex items-center bg-[#1a1c20] px-4 py-2 rounded-lg w-96">
            <span className="material-symbols-outlined text-gray-500 text-lg mr-3">search</span>
            <input 
              type="text" 
              className="bg-transparent border-none focus:ring-0 text-sm p-0 w-full outline-none placeholder:text-gray-600" 
              placeholder="Global Search" 
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-white transition-opacity">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="text-gray-400 hover:text-white transition-opacity">
                <span className="material-symbols-outlined">help</span>
              </button>
              <button 
                className="text-gray-400 hover:text-white transition-opacity"
                onClick={() => {
                  window.localStorage.removeItem("rydinex_admin_token");
                  window.location.href = "/admin";
                }}
              >
                <span className="material-symbols-outlined">logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content Canvas */}
        <main className="p-8 pb-16 flex-1 bg-[#111317]">
          {children}
        </main>

        {/* Footer Status Bar */}
        <footer className="fixed bottom-0 w-[calc(100%-16rem)] h-8 z-50 bg-[#080a0d] border-t border-white/5 flex items-center justify-between px-6 font-['Inter'] text-[10px] uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <span className="text-[#276ef1] font-bold">System Health: Operational</span>
            <span className="text-gray-500"> - </span>
            <span className="text-gray-500">API: Normal</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-gray-500">Active Drivers: 1,402</span>
            <span className="text-gray-500">Trips: 843</span>
            <span className="text-gray-500">UTC System Time</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
