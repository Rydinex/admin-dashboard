"use client";

import React from "react";

export default function SafetyPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Safety & Compliance</h1>
          <p className="text-sm text-gray-500">Monitor active incidents and document expirations.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Incident Reports */}
        <div className="bg-[#1e2024] rounded-xl border border-white/5 overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-red-500/5">
            <h3 className="text-lg font-bold text-red-400 flex items-center gap-2">
              <span className="material-symbols-outlined">warning</span>
              Active Incidents
            </h3>
          </div>
          <div className="p-6">
            <div className="flex items-start gap-4 p-4 bg-[#111317] rounded-lg border border-red-500/20 mb-4">
              <span className="material-symbols-outlined text-red-500 mt-1">report</span>
              <div>
                <h4 className="font-bold text-white">Payment Exception Flag</h4>
                <p className="text-xs text-gray-400 mt-1">Stripe Terminal #9921 Latency Alert</p>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs rounded uppercase font-bold">Investigating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expiration Alerts */}
        <div className="bg-[#1e2024] rounded-xl border border-white/5 overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-yellow-500/5">
            <h3 className="text-lg font-bold text-yellow-400 flex items-center gap-2">
              <span className="material-symbols-outlined">assignment_late</span>
              Document Expirations
            </h3>
          </div>
          <div className="p-6">
            <div className="flex items-start gap-4 p-4 bg-[#111317] rounded-lg border border-yellow-500/20 mb-4">
              <span className="material-symbols-outlined text-yellow-500 mt-1">timer</span>
              <div>
                <h4 className="font-bold text-white">Chauffeur License Expiring</h4>
                <p className="text-xs text-gray-400 mt-1">Driver: Anthony D. • Expires in 14 days</p>
                <div className="mt-3">
                  <button className="text-xs font-bold text-[#276ef1] hover:underline">Notify Driver</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
