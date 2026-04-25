"use client";

import React from "react";

export default function FinancialsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Financials (Stripe)</h1>
        <p className="text-sm text-gray-500">Monitor payouts, platform commissions, and transaction logs.</p>
      </div>
      <div className="bg-[#1e2024] p-12 text-center rounded-xl border border-white/5">
        <span className="material-symbols-outlined text-4xl text-gray-600 mb-4">account_balance</span>
        <p className="text-gray-400">Financial integration interface is under construction.</p>
      </div>
    </div>
  );
}
