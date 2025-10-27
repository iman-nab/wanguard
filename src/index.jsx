/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Camera,
  AlarmClock,
  PhoneCall,
  MapPin,
  Users,
  CheckCircle2,
  Clock,
} from "lucide-react";
import Button from "./components/ui/button.jsx";
import { Card, CardContent } from "./components/ui/card.jsx";

export default function WanguardPage() {
  return (
    <main className="bg-slate-950 text-slate-100 font-sans">
      {/* ======= NAV ======= */}
      <header className="border-b border-slate-800/60 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/wanguard-logo.png"
              alt="Wanguard logo"
              className="h-8 w-auto"
            />
            <span className="text-lg font-semibold leading-none tracking-tight text-slate-100">
              Wanguard
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#diensten" className="hover:text-white transition-colors">
              Diensten
            </a>
            <a href="#waarom" className="hover:text-white transition-colors">
              Waarom Wanguard
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <Button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-xl px-4 py-2 shadow-lg shadow-indigo-600/30">
            24/7 Inzet aanvragen
          </Button>
        </div>
      </header>

      {/* ======= HERO ======= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/40 px-3 py-1 text-[11px] font-medium text-slate-300 shadow-[0_0_40px_rgba(99,102,241,.4)]">
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
              <span>Professionele beveiliging • Landelijk inzetbaar</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white tracking-tight">
              Zichtbare beveiliging.
              <br className="hidden sm:block" />
              Directe controle.
              <br className="hidden sm:block" />
              24/7 zekerheid.
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              Wanguard levert gecertificeerde beveiligers, mobiele surveillance,
              camera-observatie en hospitality security. We voorkomen incidenten
              vóórdat ze escaleren en zorgen dat uw medewerkers, bezoekers en
              eigendommen veilig blijven — dag en nacht.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-500 text-white text-base font-semibold rounded-xl px-5 py-3 shadow-lg shadow-indigo-600/30 w-full sm:w-auto">
                Bel direct
                <PhoneCall className="ml-2 h-4 w-4" />
              </Button>

              <Button className="border border-slate-700 bg-slate-900/40 text-slate-200 hover:bg-slate-800/60 hover:text-white rounded-xl px-5 py-3 text-base font-semibold w-full sm:w-auto">
                Offerte binnen 1 uur
                <Clock className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <ul className="flex flex-col sm:flex-row flex-wrap gap-3 text-xs text-slate-400 max-w-xl">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-indigo-400 h-4 w-4 shrink-0" />
                <span>Alarmopvolging &amp; openings-/sluitrondes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-indigo-400 h-4 w-4 shrink-0" />
                <span>Object- &amp; terreinbewaking</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-indigo-400 h-4 w-4 shrink-0" />
                <span>Evenementenbeveiliging &amp; crowd control</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-indigo-400 h-4 w-4 shrink-0" />
                <span>Servicegerichte receptiediensten</span>
              </li>
            </ul>
          </motion.div>

          {/* Right column "dashboard" card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative isolate"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-600/30 via-indigo-400/10 to-transparent blur-2xl opacity-40" />
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-indigo-900/40 flex flex-col gap-6 max-w-md mx-auto">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                    Operationeel dashboard
                  </p>
                  <p className="text-lg font-semibold text-white leading-tight">
                    Live toezicht &amp; rapportage
                  </p>
                </div>
                <ShieldCheck className="h-6 w-6 text-indigo-400 shrink-0" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-left">
                <Card className="bg-slate-900/80 border border-slate-700/60 rounded-xl shadow-lg shadow-indigo-900/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 border border-slate-700/60">
                        <Camera className="h-5 w-5 text-indigo-400" />
                      </div>
                      <div className="text-sm">
                        <p className="text-slate-200 font-semibold leading-none">
                          Camera toezicht
                        </p>
                        <p className="text-slate-500 text-[11px] leading-snug">
                          24/7 remote monitoring
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/80 border border-slate-700/60 rounded-xl shadow-lg shadow-indigo-900/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 border border-slate-700/60">
                        <AlarmClock className="h-5 w-5 text-indigo-400" />
                      </div>
                      <div className="text-sm">
                        <p className="text-slate-200 font-semibold leading-none">
                          Alarm opvolging
                        </p>
                        <p className="text-slate-500 text-[11px] leading-snug">
                          Gemiddelde responstijd &lt; 10 min
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/80 border border-slate-700/60 rounded-xl shadow-lg shadow-indigo-900/20 col-span-2">
                  <CardContent className="p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 border border-slate-700/60">
                          <Users className="h-5 w-5 text-indigo-400" />
                        </div>
                        <div className="text-sm">
                          <p className="text-slate-200 font-semibold leading-none">
                            Inzet team ter plaatse
                          </p>
                          <p className="text-slate-500 text-[11px] leading-snug">
                            Gecertificeerde beveiligers met hospitality mindset
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-white leading-none">
                          24/7
                        </p>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          landelijke dekking
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-start justify-between rounded-xl border border-slate-700/60 bg-slate-800/40 p-4 text-xs shadow-inner shadow-black/50">
                <div className="flex items-start gap-3 text-left">
                  <PhoneCall className="h-4 w-4 text-indigo-400 shrink-0 mt-[2px]" />
                  <div>
                    <p className="text-slate-200 font-semibold leading-none">
                      Noodnummer meldkamer
                    </p>
                    <p className="text-slate-500 leading-snug">
                      24/7 direct contact bij incidenten
                    </p>
                  </div>
                </div>
                <div className="text-right leading-none">
                  <p className="font-mono text-white text-base font-semibold tracking-tight">
                    0800 - WANGUARD
                  </p>
                  <p className="text-slate-500 text-[10px]">
                    (gratis landelijke lijn)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======= SERVICES ======= */}
      <section
        id="diensten"
        className="relative py-20 bg-slate-950 border-t border-slate-800/60"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0)_0%,rgba(99,102,241,0.12)_40%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Onze kern­diensten
            </h2>
            <p className="text-slate-400 mt-4 text-base leading-relaxed">
              Elk object, elk terrein en elk evenement vraagt om een andere
              beveiligingsaanpak. Wij leveren maatwerk met duidelijke
              rapportages, heldere afspraken en korte lijnen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Objectbewaking */}
            <Card className="bg-slate-900/60 border border-slate-800/60 rounded-2xl shadow-xl shadow-black/40">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 border border-slate-700/60">
                    <ShieldCheck className="h-5 w-5 text-indigo-400" />
                  </div>
                  <p className="text-white font-semibold">
                    Object- &amp; terreinbewaking
                  </p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-4 flex-1">
                  Toezicht op panden, bouwplaatsen, parkeergarages en
                  logistieke hubs. Preventieve aanwezigheid, toegangscontrole
                  en rapportage van onregelmatigheden.
                </p>
                <div className="text-slate-500 text-[11px] leading-snug mt-6">
                  • Toegangsbeheer
                  <br />
                  • Brand- &amp; sluitrondes
                  <br />
                  • Sleutelbeheer
                  <br />
                  • Nachtbewaking
                </div>
              </CardContent>
            </Card>

            {/* Mobiele surveillance */}
            <Card className="bg-slate-900/60 border border-slate-800/60 rounded-2xl shadow-xl shadow-black/40">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 border border-slate-700/60">
                    <AlarmClock className="h-5 w-5 text-indigo-400" />
                  </div>
                  <p className="text-white font-semibold">
                    Mobiele surveillance &amp; alarmopvolging
                  </p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-4 flex-1">
                  Snel ter plaatse bij een alarmmelding, 24/7. Onze
                  surveillanten controleren, treffen maatregelen en maken
                  direct melding volgens het afgesproken protocol.
                </p>
                <div className="text-slate-500 text-[11px] leading-snug mt-6">
                  • Openings- &amp; sluitrondes
                  <br />
                  • Nachtelijke controles
                  <br />
                  • Alarmverificatie op locatie
                </div>
              </CardContent>
            </Card>

            {/* Evenementbeveiliging */}
            <Card className="bg-slate-900/60 border border-slate-800/60 rounded-2xl shadow-xl shadow-black/40">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 border border-slate-700/60">
                    <Users className="h-5 w-5 text-indigo-400" />
                  </div>
                  <p className="text-white font-semibold">
                    Evenementenbeveiliging &amp; crowd control
                  </p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-4 flex-1">
                  Gastvrije maar assertieve beveiligers voor festivals,
                  bedrijfsfeesten, high-profile ontvangsten en VIP-begeleiding.
                  We houden overzicht, bewaken de sfeer en handelen bij risico.
                </p>
                <div className="text-slate-500 text-[11px] leading-snug mt-6">
                  • Toegangscontrole
                  <br />
                  • Backstage security
                  <br />
                  • Crowd management
                </div>
              </CardContent>
            </Card>

            {/* Receptie & hospitality */}
            <Card className="bg-slate-900/60 border border-slate-800/60 rounded-2xl shadow-xl shadow-black/40">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 border border-slate-700/60">
                    <Users className="h-5 w-5 text-indigo-400" />
                  </div>
                  <p className="text-white font-semibold">
                    Receptie &amp; hospitality security
                  </p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-4 flex-1">
                  Eerste indruk = veiligheid. Onze hosts combineren
                  gastvrijheid met toezicht, toegangsbeheer en het bewaken van
                  huisregels.
                </p>
                <div className="text-slate-500 text-[11px] leading-snug mt-6">
                  • Front desk service
                  <br />
                  • Bezoekersregistratie
                  <br />
                  • Badgecontrole
                </div>
              </CardContent>
            </Card>

            {/* Cameratoezicht */}
            <Card className="bg-slate-900/60 border border-slate-800/60 rounded-2xl shadow-xl shadow-black/40">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 border border-slate-700/60">
                    <Camera className="h-5 w-5 text-indigo-400" />
                  </div>
                  <p className="text-white font-semibold">
                    Cameratoezicht &amp; live monitoring
                  </p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-4 flex-1">
                  Actieve observatie vanuit onze meldkamer. Verdachte
                  situaties worden realtime gedetecteerd en direct
                  opgevolgd — inclusief tijdstempel en beeldmateriaal.
                </p>
                <div className="text-slate-500 text-[11px] leading-snug mt-6">
                  • Slimme detectie
                  <br />
                  • Live interventie
                  <br />
                  • Rapportage met bewijsmateriaal
                </div>
              </CardContent>
            </Card>

            {/* Consultancy */}
            <Card className="bg-slate-900/60 border border-slate-800/60 rounded-2xl shadow-xl shadow-black/40">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 border border-slate-700/60">
                    <CheckCircle2 className="h-5 w-5 text-indigo-400" />
                  </div>
                  <p className="text-white font-semibold">
                    Risico-analyse &amp; advies
                  </p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-4 flex-1">
                  We brengen risico's in kaart, analyseren
                  toegangspunten, gedragspatronen en scenario's en leveren
                  een concreet beveiligingsplan dat in de praktijk werkt.
                </p>
                <div className="text-slate-500 text-[11px] leading-snug mt-6">
                  • Security scan
                  <br />
                  • Procesoptimalisatie
                  <br />
                  • Compliance ondersteuning
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ======= WHY CHOOSE US ======= */}
      <section
        id="waarom"
        className="relative py-20 bg-slate-900 border-y border-slate-800/60"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.15),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Waarom organisaties voor Wanguard kiezen
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Wij combineren zichtbare aanwezigheid met slimme technologie. Geen
              standaardpakket, maar beveiliging die past bij uw risico,
              merkbeleving en bedrijfsvoering.
            </p>

            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white leading-snug">
                    Gecertificeerde beveiligers
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Discreet, aanspreekbaar en daadkrachtig. Onze mensen zijn
                    getraind in agressiepreventie, EHBO en
                    conflictde-escalatie.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Camera className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white leading-snug">
                    Realtime inzicht
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    U ontvangt duidelijke rapportages, incidentmeldingen en
                    aanbevelingen. Transparant en aantoonbaar.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white leading-snug">
                    Snel opschalen
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Tijdelijke inzet nodig door een storing, dreiging of
                    evenement? Wij kunnen direct extra capaciteit leveren.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Users className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white leading-snug">
                    Eén team, één aanspreekpunt
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Korte lijnen met planning en teamcoördinatie. Geen
                    callcenter — gewoon direct contact met mensen die uw
                    locatie kennen.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right column trust card */}
          <div className="max-w-lg mx-auto lg:mx-0 w-full">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 shadow-xl shadow-black/50 p-6 sm:p-8 flex flex-col gap-6">
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                  Kwaliteit &amp; betrouwbaarheid
                </p>
                <p className="text-lg sm:text-xl font-semibold text-white leading-tight">
                  Uw veiligheid. Onze prioriteit.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mt-2">
                  We werken uitsluitend met gescreende beveiligers en heldere
                  procedures. Iedere opdracht begint met een risicoanalyse en
                  eindigt met meetbare resultaten.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center text-slate-200 text-xs">
                <div className="rounded-xl bg-slate-900/60 border border-slate-700/60 p-4 shadow-inner shadow-black/50">
                  <p className="text-3xl font-bold text-white leading-none tracking-tight">
                    24/7
                  </p>
                  <p className="text-slate-500 mt-1 leading-none">
                    inzet &amp; support
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900/60 border border-slate-700/60 p-4 shadow-inner shadow-black/50">
                  <p className="text-3xl font-bold text-white leading-none tracking-tight">
                    &lt;10m
                  </p>
                  <p className="text-slate-500 mt-1 leading-none">
                    gem. alarm­reactie
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left text-xs sm:text-sm">
                <CheckCircle2 className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <p className="text-slate-400 leading-relaxed">
                  Heldere rapportages voor verzekering, compliance en interne
                  audits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= CONTACT ======= */}
      <section
        id="contact"
        className="relative py-20 bg-slate-950 border-b border-slate-800/60"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Neem direct contact op
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Vertel ons wat u wilt beschermen en wanneer. Wij komen met een
              concreet inzetplan en een transparante offerte.
            </p>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <PhoneCall className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white leading-snug">
                    0800 - WANGUARD
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    24/7 bereikbaar bij spoed en alarmopvolging.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white leading-snug">
                    Landelijke dekking
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Objectbeveiliging, mobiele surveillance en
                    evenementbeveiliging door heel Nederland.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white leading-snug">
                    Offerte binnen 1 uur
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Van risicoanalyse tot inzetvoorstel — snel en
                    overzichtelijk.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="max-w-lg mx-auto lg:mx-0 w-full">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl shadow-black/50 p-6 sm:p-8 flex flex-col gap-6">
              <p className="text-lg sm:text-xl font-semibold text-white leading-tight">
                Vraag een beveiligingsinzet aan
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dit formulier is bedoeld voor nieuwe opdrachten, spoedverzoeken
                en tijdelijke opschaling. Vul de basis in — wij nemen direct
                contact met u op.
              </p>

              <form className="grid grid-cols-1 gap-4 text-sm">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="naam"
                    className="text-slate-200 font-medium leading-none"
                  >
                    Naam / Organisatie
                  </label>
                  <input
                    id="naam"
                    type="text"
                    required
                    className="rounded-lg bg-slate-950/60 border border-slate-700/60 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 text-sm"
                    placeholder="Bedrijfsnaam of contactpersoon"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="telefoon"
                    className="text-slate-200 font-medium leading-none"
                  >
                    Telefoonnummer
                  </label>
                  <input
                    id="telefoon"
                    type="tel"
                    required
                    className="rounded-lg bg-slate-950/60 border border-slate-700/60 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 text-sm"
                    placeholder="06 - ..."
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="locatie"
                    className="text-slate-200 font-medium leading-none"
                  >
                    Locatie (stad / evenement)
                  </label>
                  <input
                    id="locatie"
                    type="text"
                    required
                    className="rounded-lg bg-slate-950/60 border border-slate-700/60 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 text-sm"
                    placeholder="Bijv. Amsterdam - magazijn / Rotterdam - evenement"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="details"
                    className="text-slate-200 font-medium leading-none"
                  >
                    Korte omschrijving
                  </label>
                  <textarea
                    id="details"
                    rows={3}
                    required
                    className="rounded-lg bg-slate-950/60 border border-slate-700/60 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 text-sm resize-none"
                    placeholder="Aantal beveiligers, datum/tijd, type inzet..."
                  />
                </div>

                <Button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl px-4 py-2 shadow-lg shadow-indigo-600/30 w-full">
                  Verstuur aanvraag
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ======= FOOTER ======= */}
      <footer className="bg-slate-950 py-10 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2">
              <img
                src="/wanguard-logo.png"
                alt="Wanguard logo"
                className="h-6 w-auto"
              />
              <span className="text-slate-200 font-semibold text-sm">
                Wanguard
              </span>
            </div>
            <p className="mt-2 leading-relaxed text-slate-500 max-w-sm">
              Proactieve beveiliging, gastvrije uitstraling en directe reactie
              bij incidenten. Eén aanspreekpunt, 24/7.
            </p>
          </div>

          <div className="text-slate-600 text-xs leading-relaxed space-y-1">
            <p>
              © {new Date().getFullYear()} Wanguard. Alle rechten voorbehouden.
            </p>
            <p>Privacy • Algemene voorwaarden • Kwaliteitsbeleid</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
