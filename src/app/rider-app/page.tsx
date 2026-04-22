import Link from "next/link";
import { prdPhaseOneGroups } from "../lib/prdPhaseOne";

export default function RiderAppLanding() {
  const riderGroup = prdPhaseOneGroups.find(group => group.app === "rider");

  return (
    <main className="min-h-screen bg-[#131314] p-6 text-[#e5e2e3]">
      <section className="mx-auto max-w-4xl rounded-2xl bg-[#1f1f20] p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#c2c6d7]">
          <Link href="/" className="rounded-lg bg-[#2a2a2b] px-3 py-2 hover:bg-[#353436]">
            Desktop Home
          </Link>
          <Link href="/connect" className="rounded-lg bg-[#2a2a2b] px-3 py-2 hover:bg-[#353436]">
            Connectivity Center
          </Link>
          <Link href="/prd" className="rounded-lg bg-[#2a2a2b] px-3 py-2 hover:bg-[#353436]">
            PRD Explorer
          </Link>
          <Link href="/admin" className="rounded-lg bg-[#2a2a2b] px-3 py-2 hover:bg-[#353436]">
            Admin Console
          </Link>
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.08em] text-[#b1c5ff]">Rydinex Rider</p>
        <img
          src="/rydinex-logo.png"
          alt="Rydinex rider logo"
          className="mt-4 h-20 w-20 rounded-2xl object-cover shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
        />
        <h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-5xl">Rider app web fallback</h1>
        <p className="mt-4 text-base text-[#c2c6d7]">
          Open the mobile app for fastest booking, live driver tracking, fare transparency, and trip sharing.
        </p>

        <div className="mt-5 grid gap-2 rounded-xl bg-[#2a2a2b] p-4 text-sm text-[#c2c6d7] md:grid-cols-3">
          <p>Transparent upfront fare</p>
          <p>Live driver movement</p>
          <p>Safety-first ride controls</p>
        </div>

        <div className="mt-6 rounded-2xl bg-[#2a2a2b] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#b1c5ff]">Phase 1 PRD Bridge</p>
          <h2 className="mt-2 text-2xl font-extrabold">Rider modules targeted before release</h2>
          <p className="mt-3 text-sm text-[#c2c6d7]">{riderGroup?.summary}</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {riderGroup?.screens.map(screen => (
              <article key={screen.path} className="rounded-xl bg-[#1f1f20] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-white">{screen.name}</h3>
                    <p className="mt-1 text-xs text-[#9da2b4]">{screen.path}</p>
                  </div>
                  <span className={`rounded-full px-2 py-1 text-[11px] font-bold ${screen.status === "phase-1" ? "bg-[#31477c] text-[#dbe5ff]" : "bg-[#4b352d] text-[#ffd7c3]"}`}>
                    {screen.status === "phase-1" ? "Phase 1" : "Planned"}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="rydinex://open"
            className="rounded-xl bg-[#276ef1] px-4 py-2 font-bold text-white"
          >
            Open Rider App
          </a>
          <Link href="/connect" className="rounded-xl bg-[#353436] px-4 py-2 font-bold text-[#e5e2e3]">
            Go to App Connectivity Center
          </Link>
          <Link href="/prd" className="rounded-xl bg-[#353436] px-4 py-2 font-bold text-[#e5e2e3]">
            Review PRD Coverage
          </Link>
        </div>
      </section>
    </main>
  );
}
