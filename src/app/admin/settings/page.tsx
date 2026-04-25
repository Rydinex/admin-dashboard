"use client";

import React, { useState } from "react";

export default function SettingsPage() {
  const [pricingForm, setPricingForm] = useState({
    baseFare: "2.50",
    perMileRate: "1.70",
    perMinuteRate: "0.35",
    averageSpeedMph: "20",
    currency: "USD",
    platformCommissionRate: "0.20",
  });

  const [surgeForm, setSurgeForm] = useState({
    demandRadiusKm: "5",
    sensitivity: "0.7",
    maxMultiplier: "3.0",
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">System Settings</h1>
        <p className="text-sm text-gray-500">Configure core dispatch rules, pricing formulas, and surge sensitivity.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pricing Configuration */}
        <div className="bg-[#1e2024] rounded-xl border border-white/5 p-6">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#276ef1]">payments</span>
            Base Pricing Model
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Base Fare ($)</label>
              <input 
                type="text" 
                value={pricingForm.baseFare}
                onChange={(e) => setPricingForm({...pricingForm, baseFare: e.target.value})}
                className="w-full bg-[#111317] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#276ef1]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Per Mile Rate ($)</label>
              <input 
                type="text" 
                value={pricingForm.perMileRate}
                onChange={(e) => setPricingForm({...pricingForm, perMileRate: e.target.value})}
                className="w-full bg-[#111317] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#276ef1]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Platform Commission (%)</label>
              <input 
                type="text" 
                value={pricingForm.platformCommissionRate}
                onChange={(e) => setPricingForm({...pricingForm, platformCommissionRate: e.target.value})}
                className="w-full bg-[#111317] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#276ef1]"
              />
            </div>
            <button className="w-full bg-[#276ef1] text-white font-bold py-3 rounded-lg mt-4 hover:bg-blue-600 transition-colors">
              Save Pricing Rules
            </button>
          </div>
        </div>

        {/* Surge Configuration */}
        <div className="bg-[#1e2024] rounded-xl border border-white/5 p-6">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffb694]">bolt</span>
            Dynamic Surge Tuning
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Demand Radius (KM)</label>
              <input 
                type="text" 
                value={surgeForm.demandRadiusKm}
                onChange={(e) => setSurgeForm({...surgeForm, demandRadiusKm: e.target.value})}
                className="w-full bg-[#111317] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#ffb694]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Sensitivity (0.1 - 1.0)</label>
              <input 
                type="text" 
                value={surgeForm.sensitivity}
                onChange={(e) => setSurgeForm({...surgeForm, sensitivity: e.target.value})}
                className="w-full bg-[#111317] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#ffb694]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Max Multiplier (Cap)</label>
              <input 
                type="text" 
                value={surgeForm.maxMultiplier}
                onChange={(e) => setSurgeForm({...surgeForm, maxMultiplier: e.target.value})}
                className="w-full bg-[#111317] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#ffb694]"
              />
            </div>
            <button className="w-full bg-[#ffb694] text-[#7b2f00] font-bold py-3 rounded-lg mt-4 hover:brightness-110 transition-all">
              Update Surge Algorithm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
