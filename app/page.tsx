import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Brain,
  CheckCircle2,
  Clock3,
  FileSpreadsheet,
  Gauge,
  Globe,
  LineChart,
  LockKeyhole,
  ShieldCheck,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "NBFC Business Dashboards",
    desc: "Track sales funnel, disbursement, credit TAT, collections, RO/RM productivity and operational bottlenecks from one executive control room.",
  },
  {
    icon: Users,
    title: "RO / RM Performance Tracking",
    desc: "Identify high performers, weak performers, inactive resources, delayed follow-ups and productivity gaps across branches and regions.",
  },
  {
    icon: Clock3,
    title: "Credit TAT Monitoring",
    desc: "Monitor file movement, credit delay, branch pendency, approval aging and SLA breaches before they impact business conversion.",
  },
  {
    icon: BellRing,
    title: "Intelligent Alert System",
    desc: "Automated alerts for delays, missed actions, collection risk, poor performance, abnormal trends and accountability gaps.",
  },
  {
    icon: Brain,
    title: "ML Risk Prediction",
    desc: "Predict customer risk, next-month bounce probability, delinquency movement and early warning signals using data-driven models.",
  },
  {
    icon: Workflow,
    title: "MIS & Audit Automation",
    desc: "Automate daily MIS, audit checks, reporting workflows and repetitive analytics tasks without manual dependency.",
  },
];

const painPoints = [
  "Sales bottlenecks are discovered too late",
  "Credit TAT delay reduces conversion",
  "RO/RM performance is not visible in real time",
  "Collections risk is noticed only after damage",
  "MIS preparation depends heavily on manpower",
  "Management does not get a single source of truth",
];

const outcomes = [
  "Faster decision-making",
  "Lower operational leakage",
  "Stronger employee accountability",
  "Better collection monitoring",
  "Reduced manual MIS effort",
  "Early visibility of risk",
];

const industries = [
  "NBFCs",
  "Banks",
  "Loan Businesses",
  "Collection Teams",
  "Sales Teams",
  "Credit Teams",
];

export default function WolfTechPremiumWebsite() {
  return (
    <main className="min-h-screen bg-[#f7fafc] text-slate-950">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#d9fbff_0,#f8fafc_34%,#ffffff_72%)]">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-slate-900/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-12 lg:px-16 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold text-cyan-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Analytics, Automation & AI for Lending Businesses
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              See the bottlenecks.
              <span className="block text-cyan-700">Control the process.</span>
              Grow with data.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-650 md:text-xl">
              WolfTech Analytics builds premium business dashboards, intelligent
              alerts, MIS automation and ML risk models for NBFCs, banks and
              lending businesses that want sharper visibility, faster execution
              and stronger accountability.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:sales@wolftechanalytics.com?subject=Strategy%20Call%20Request%20-%20WolfTech%20Analytics"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-7 py-4 text-base font-bold text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-cyan-700"
              >
                Book Free Strategy Call
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 py-4 text-base font-bold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-700"
              >
                Explore Solutions
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {[
                ["TAT", "Credit delay visibility"],
                ["MIS", "Automated reporting"],
                ["Risk", "Bounce prediction"],
              ].map(([label, text]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm"
                >
                  <p className="text-2xl font-black text-cyan-700">{label}</p>
                  <p className="mt-1 text-xs font-medium leading-5 text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-cyan-300/40 to-slate-900/10 blur-2xl" />

            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/12">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.jpeg"
                    alt="WolfTech Analytics logo"
                    width={72}
                    height={72}
                    priority
                    className="rounded-2xl object-contain"
                  />
                  <div>
                    <p className="text-sm font-black text-slate-950">
                      WolfTech Analytics
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      Executive Intelligence Layer
                    </p>
                  </div>
                </div>

                <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  Live Control
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                {[
                  ["Sales Conversion", "72%", TrendingUp],
                  ["Credit TAT Alert", "18 Files", Clock3],
                  ["Collection Risk", "36 Cases", ShieldCheck],
                  ["RO/RM Watchlist", "9 Users", Users],
                ].map(([label, value, Icon]) => (
                  <div
                    key={label as string}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <Icon className="mb-4 h-6 w-6 text-cyan-700" />
                    <p className="text-2xl font-black text-slate-950">
                      {value as string}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      {label as string}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-bold">Bottleneck Intelligence</p>
                  <Gauge className="h-5 w-5 text-cyan-300" />
                </div>

                <div className="space-y-3">
                  {[
                    ["Branch Follow-up Delay", "82%"],
                    ["Credit Pending Aging", "64%"],
                    ["Collection Early Warning", "48%"],
                  ].map(([label, width]) => (
                    <div key={label}>
                      <div className="mb-1 flex justify-between text-xs text-slate-300">
                        <span>{label}</span>
                        <span>{width}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div
                          className="h-2 rounded-full bg-cyan-400"
                          style={{ width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-center text-xs font-medium text-slate-500">
                Designed for founders, CXOs, sales heads, credit heads and
                collection leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-slate-200 bg-white px-6 py-5 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 text-sm font-bold text-slate-600">
          {industries.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-100 px-4 py-2 text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              The Real Problem
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Most lending businesses do not lose money because of one big
              mistake.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              They lose money through invisible daily leakages: delayed files,
              weak follow-ups, poor accountability, late collection signals,
              manual MIS errors and decisions made without real-time data.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {painPoints.map((point) => (
              <div
                key={point}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <Zap className="h-5 w-5" />
                </div>
                <p className="font-bold leading-7 text-slate-850">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="bg-slate-950 px-6 py-20 text-white md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">
              Core Solutions
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Built for control, speed and accountability.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              We convert your raw business data into decision intelligence that
              helps leadership act before small problems become expensive losses.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.07]"
                >
                  <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
              <LineChart className="h-8 w-8" />
            </div>

            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              From manual reports to automatic business intelligence.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Your team should not spend hours preparing the same MIS every
              day. We automate reporting, alerts, audit checks and dashboards so
              your people can focus on action, not Excel work.
            </p>

            <div className="mt-8 grid gap-3">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="font-bold text-slate-800">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {[
              {
                icon: FileSpreadsheet,
                title: "Automated MIS Sharing",
                desc: "Daily, weekly or monthly MIS can be generated and shared automatically without human intervention.",
              },
              {
                icon: LockKeyhole,
                title: "Audit Process Automation",
                desc: "Automate repetitive audit checks and exception reporting to reduce dependency on manpower.",
              },
              {
                icon: ShieldCheck,
                title: "Risk & Collection Indicators",
                desc: "Track collection health, bounce probability, high-risk accounts and early warning signals.",
              },
              {
                icon: Globe,
                title: "Websites & Technical Consulting",
                desc: "Premium websites, internal tools, dashboards and technical solutions for finance-led businesses.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black">{item.title}</h3>
                      <p className="mt-2 leading-7 text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-8 text-white shadow-2xl shadow-slate-900/20 md:p-14">
          <div className="grid gap-10 md:grid-cols-[1fr_0.75fr] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">
                Free Strategy Call
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                Want to know where your business is leaking time, money and
                accountability?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Share your current reporting, sales, credit, collection or MIS
                challenge. We will help you identify where automation and
                analytics can create immediate business impact.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
              <a
                href="revolutionarise108@gmail.com?subject=Free%20Strategy%20Call%20Request&body=Hi%20WolfTech%20Analytics%2C%0A%0AI%20want%20to%20discuss%20dashboard%2C%20MIS%20automation%20or%20risk%20analytics%20for%20my%20business.%0A%0ACompany%3A%0APhone%3A%0ARequirement%3A"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 text-center text-base font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Request Free Consultation
                <ArrowRight className="h-5 w-5" />
              </a>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}