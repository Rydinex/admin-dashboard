"use client";

import React from "react";

export default function DriversPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Driver Management</h1>
          <p className="text-sm text-gray-500">Review pending applications and manage active fleet.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-[#1e2024] border border-white/10 rounded-lg text-sm text-white hover:bg-[#282a2e]">
            Export CSV
          </button>
          <button className="px-4 py-2 bg-[#276ef1] rounded-lg text-sm font-bold text-white hover:bg-blue-600">
            Add Driver
          </button>
        </div>
      </div>

      {/* Pending Approval Queue Placeholder */}
      <div className="bg-[#1e2024] rounded-xl border border-white/5 overflow-hidden">
        <div className="p-6 border-b border-white/5">
          <h3 className="text-lg font-bold text-white">Pending Approval Queue</h3>
        </div>
        <div className="p-12 text-center">
          <span className="material-symbols-outlined text-4xl text-gray-600 mb-4">check_circle</span>
          <p className="text-gray-400">No pending drivers to review.</p>
        </div>
      </div>
      
      {/* Active Fleet Placeholder */}
      <div className="bg-[#1e2024] rounded-xl border border-white/5 overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h3 className="text-lg font-bold text-white">Active Fleet</h3>
          <div className="flex gap-2">
            <input type="text" placeholder="Search by name or plate..." className="bg-[#111317] border border-white/10 rounded px-3 py-1 text-sm text-white focus:outline-none" />
          </div>
        </div>
        <table className="w-full text-left text-sm text-gray-400">
          <thead className="bg-[#111317] text-xs uppercase font-bold text-gray-500">
            <tr>
              <th className="px-6 py-4">Driver</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Vehicle</th>
              <th className="px-6 py-4">Rating</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/5 hover:bg-white/5">
              <td className="px-6 py-4 font-semibold text-white">Anthony D.</td>
              <td className="px-6 py-4"><span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">Active</span></td>
              <td className="px-6 py-4">Black GMC Yukon</td>
              <td className="px-6 py-4 text-[#276ef1]">4.98</td>
              <td className="px-6 py-4 text-right"><button className="text-[#276ef1] hover:underline">View</button></td>
            </tr>
            {/* Add more placeholder rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
