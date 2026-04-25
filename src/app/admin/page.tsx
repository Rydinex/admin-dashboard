"use client";

import React from "react";

export default function ExecutiveOverviewPage() {
  return (
    <div>
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {/* Total Revenue */}
        <div className="bg-[#1e2024] p-6 rounded-xl border border-white/5 group hover:bg-[#282a2e] transition-colors">
          <div className="flex justify-between items-start mb-4">
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Total Revenue (Stripe)</p>
            <span className="material-symbols-outlined text-[#276ef1]">payments</span>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white">$2.4M</h2>
            <span className="text-xs font-semibold text-[#276ef1]">+12.4%</span>
          </div>
          <p className="text-[10px] text-gray-600 mt-2">vs last 30 days</p>
        </div>

        {/* Daily Active Trips */}
        <div className="bg-[#1e2024] p-6 rounded-xl border border-white/5 group hover:bg-[#282a2e] transition-colors">
          <div className="flex justify-between items-start mb-4">
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Daily Active Trips</p>
            <span className="material-symbols-outlined text-[#276ef1]">route</span>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white">14,202</h2>
            <span className="text-xs font-semibold text-[#276ef1]">+4.2%</span>
          </div>
          <p className="text-[10px] text-gray-600 mt-2">Current session peak</p>
        </div>

        {/* Growth */}
        <div className="bg-[#1e2024] p-6 rounded-xl border border-white/5 group hover:bg-[#282a2e] transition-colors">
          <div className="flex justify-between items-start mb-4">
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Rider/Driver Growth</p>
            <span className="material-symbols-outlined text-[#276ef1]">trending_up</span>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white">24%</h2>
            <span className="text-xs font-semibold text-[#276ef1]">+8%</span>
          </div>
          <p className="text-[10px] text-gray-600 mt-2">Acquisition velocity</p>
        </div>

        {/* System Health */}
        <div className="bg-[#1e2024] p-6 rounded-xl border border-white/5 group hover:bg-[#282a2e] transition-colors">
          <div className="flex justify-between items-start mb-4">
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">System Health</p>
            <span className="material-symbols-outlined text-[#ffb4ab]">bolt</span>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white">99.8%</h2>
            <span className="text-xs font-semibold text-[#ffb4ab]">-0.1%</span>
          </div>
          <p className="text-[10px] text-gray-600 mt-2">Avg. Latency: 42ms</p>
        </div>
      </div>

      {/* Central Visualization Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Main Revenue Trends */}
        <div className="lg:col-span-2 bg-[#1e2024] rounded-xl overflow-hidden border border-white/5 flex flex-col">
          <div className="p-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-white">Revenue Trends</h3>
              <p className="text-xs text-gray-500">Gross transaction volume per hour</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-[#1a1c20] text-[10px] rounded-full text-white cursor-pointer hover:bg-[#282a2e]">7D</span>
              <span className="px-3 py-1 bg-[#276ef1] text-[10px] rounded-full text-white cursor-pointer">30D</span>
            </div>
          </div>
          <div className="flex-1 min-h-[300px] relative px-6">
            <div className="absolute inset-0 m-6 flex items-end gap-1">
              {/* Faux bars */}
              {[40, 55, 45, 70, 85, 60, 75, 95, 80, 65, 50, 40].map((height, i) => (
                <div key={i} style={{ height: `${height}%` }} className="flex-1 bg-gradient-to-t from-[#276ef1]/20 to-[#276ef1]/40 rounded-t-sm transition-all hover:to-[#b1c5ff]" />
              ))}
            </div>
          </div>
        </div>

        {/* Regional Demand Map */}
        <div className="bg-[#1e2024] rounded-xl border border-white/5 flex flex-col">
          <div className="p-6">
            <h3 className="text-lg font-bold text-white">Regional Demand</h3>
            <p className="text-xs text-gray-500">Live surge heat map</p>
          </div>
          <div className="flex-1 relative bg-[#1a1c20] mx-6 mb-6 rounded-lg overflow-hidden group">
            <div className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=600&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c0e12]/80"></div>
            
            {/* Hotspots */}
            <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-[#276ef1]/30 rounded-full animate-pulse flex items-center justify-center">
              <div className="w-2 h-2 bg-[#b1c5ff] rounded-full"></div>
            </div>
            
            <div className="absolute bottom-6 left-6 space-y-2">
              <div className="flex items-center gap-2 bg-[#333539] px-2 py-1 rounded text-[10px] text-white backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#276ef1]"></span>
                <span>O'Hare: High Surge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
