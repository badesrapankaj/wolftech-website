import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BarChart3,
  ShieldCheck,
  BellRing,
  Brain,
  Workflow,
  Globe,
  ArrowRight,
  TrendingUp,
  Users,
  Clock3,
  Mail,
} from "lucide-react";

export default function WolfTechPremiumWebsite() {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "NBFC Business Dashboards",
      desc: "Track sales funnel, collections, credit TAT, disbursals, RO/RM productivity and hidden operational bottlenecks in real time.",
    },
    {
      icon: <BellRing className="w-8 h-8" />,
      title: "Intelligent Alert System",
      desc: "Automatic alerts for delays, weak performers, missed collections, SLA breaches and accountability gaps across the loan lifecycle.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "ML Risk Prediction",
      desc: "Predict risk, next-month bouncing probability, delinquency trends and operational leakages before they become losses.",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Automation & MIS",
      desc: "MIS reports, audits, compliance workflows and reporting systems automated without manual intervention.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Design & Consulting",
      desc: "Premium websites, consulting and digital transformation for NBFCs, Banks and financial businesses.",
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <section className="px-6 md:px-16 py-24 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-cyan-700 font-semibold text-sm mb-4">
              Premium Analytics • Automation • Intelligence
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Helping NBFCs Build
              <span className="block text-cyan-700">Profitable, Faster</span>
              <span className="block">and Safer Operations</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We build dashboards, automation systems and AI-driven decision
              engines that reduce risk, improve collections and create complete
              operational visibility.
            </p>

            <div className="flex gap-4 flex-wrap mt-8">
              <Button className="rounded-2xl px-8 py-6">
                Book Free Consultation
              </Button>
              <Button variant="outline" className="rounded-2xl px-8 py-6">
                View Dashboard Demo
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border p-8">
            <img src="/logo.jpeg" alt="WolfTech" className="w-full rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[Users, Clock3, TrendingUp].map((Icon, i) => (
            <Card key={i} className="rounded-3xl p-6 shadow-sm">
              <CardContent className="p-0">
                <Icon className="w-10 h-10 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Executive Visibility</h3>
                <p className="text-slate-600">Leadership gets real-time control over performance, delays and revenue leakages.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, i) => (
              <Card key={i} className="rounded-3xl border shadow-sm hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="mb-4 text-cyan-700">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 bg-slate-950 text-white text-center">
        <ShieldCheck className="w-12 h-12 mx-auto mb-6" />
        <h2 className="text-4xl font-bold mb-6">Reduce Risk. Increase Profitability.</h2>
        <p className="max-w-3xl mx-auto text-slate-300 text-lg">
          Identify weak performers, reduce TAT, improve collections and create
          accountability across your entire lending ecosystem.
        </p>
      </section>

      <section className="py-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Get Your Free Strategy Call</h2>
          <p className="text-center text-slate-600 mb-10">
            Let us understand your operational bottlenecks and show how automation can improve profitability.
          </p>

          <Card className="rounded-3xl shadow-xl border">
            <CardContent className="p-8 space-y-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Company Name" />
              <Input placeholder="Email Address" />
              <Input placeholder="Phone Number" />
              <Textarea placeholder="Tell us about your business challenge" rows={5} />
              <Button className="w-full rounded-2xl py-6">
                Submit Inquiry <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
