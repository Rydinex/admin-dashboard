export type PrdScreen = {
  name: string;
  path: string;
  status: "phase-1" | "planned";
};

export type PrdGroup = {
  app: "admin" | "driver" | "rider";
  title: string;
  summary: string;
  currentRoute: string;
  deepLink: string;
  screens: PrdScreen[];
};

export const prdPhaseOneGroups: PrdGroup[] = [
  {
    app: "admin",
    title: "Admin Control Plane",
    summary: "Executive overview, driver approvals, compliance reporting, and launch controls surfaced for desktop operations.",
    currentRoute: "/admin",
    deepLink: "/prd",
    screens: [
      { name: "Executive overview", path: "rydinex_admin_executive_overview/code.html", status: "phase-1" },
      { name: "Driver management", path: "rydinex_admin_driver_management/code.html", status: "phase-1" },
      { name: "Safety compliance", path: "rydinex_admin_safety_compliance/code.html", status: "phase-1" },
      { name: "Financial reporting", path: "tnp_financial_reporting/code.html", status: "planned" },
      { name: "System health monitor", path: "system_health_monitor/code.html", status: "planned" },
      { name: "Role permissions hub", path: "role_permissions_hub/code.html", status: "planned" },
    ],
  },
  {
    app: "driver",
    title: "Driver Operations",
    summary: "Trip request, earnings, queue position, and positioning intelligence prepared for the mobile driver experience.",
    currentRoute: "/driver-app",
    deepLink: "rydinex-driver://open",
    screens: [
      { name: "Driver dashboard", path: "driver_dashboard/code.html", status: "phase-1" },
      { name: "Incoming request", path: "incoming_request/code.html", status: "phase-1" },
      { name: "Earnings summary", path: "earnings_summary/code.html", status: "phase-1" },
      { name: "Airport queues", path: "rydinex_driver_airport_queues_1/code.html", status: "planned" },
      { name: "Strategic positioning", path: "rydinex_driver_strategic_positioning/code.html", status: "planned" },
      { name: "Vehicle audit", path: "rydinex_driver_vehicle_audit/code.html", status: "planned" },
    ],
  },
  {
    app: "rider",
    title: "Rider Experience",
    summary: "Ride selection, live tracking, safety controls, and profile flows prepared for the mobile rider experience.",
    currentRoute: "/rider-app",
    deepLink: "rydinex://open",
    screens: [
      { name: "Ride selection", path: "ride_selection/code.html", status: "phase-1" },
      { name: "Rider home map", path: "rider_home_map/code.html", status: "phase-1" },
      { name: "Trip tracking", path: "trip_tracking/code.html", status: "phase-1" },
      { name: "Family profile setup", path: "family_profile_setup/code.html", status: "planned" },
      { name: "Live teen tracking", path: "live_teen_tracking/code.html", status: "planned" },
      { name: "Rating review", path: "rating_review/code.html", status: "planned" },
    ],
  },
];

export const prdPhaseOneHeadline =
  "Phase 1 bridges the highest-value PRD modules into live Admin, Driver, and Rider app surfaces before store release.";