import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BookOpen,
  Check,
  ChevronDown,
  CircleHelp,
  Globe2,
  Handshake,
  LifeBuoy,
  LockKeyhole,
  Menu,
  Newspaper,
  ShieldCheck,
  Snowflake,
  Users,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import orbitImage from "@/assets/tradeva-orbit.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { FooterFour } from "@/components/footer-four";
import { HeaderFive } from "@/components/header-five";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tradeva — Trade Crypto P2P. Fast. Secure. Global." },
      {
        name: "description",
        content:
          "Join Tradeva, the modern P2P cryptocurrency platform with escrow-protected trading and hot and cold wallets, launching in 2026.",
      },
      { property: "og:title", content: "Tradeva — P2P Crypto Trading, Rebuilt" },
      {
        property: "og:description",
        content: "Trade directly. Settle securely. Keep control. Join the 2026 Tradeva waitlist.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    n: "01",
    title: "Escrow-protected trading",
    body: "Funds stay protected until both sides confirm. Trade directly without surrendering control.",
    icon: ShieldCheck,
  },
  {
    n: "02",
    title: "Lightning-fast transfers",
    body: "Move from offer to settlement through a process designed to feel immediate and clear.",
    icon: Zap,
  },
  {
    n: "03",
    title: "Wallets built in",
    body: "Keep everyday funds ready in a hot wallet and long-term holdings isolated in cold storage.",
    icon: WalletCards,
  },
  {
    n: "04",
    title: "Designed for the world",
    body: "Find trading partners and manage crypto through one globally minded platform.",
    icon: Globe2,
  },
];

const faqs = [
  [
    "When does Tradeva launch?",
    "Tradeva is scheduled to launch in 2026. Join the waitlist for launch announcements and early access opportunities.",
  ],
  [
    "How does P2P escrow work?",
    "Crypto is held securely during a trade and released only after both sides confirm the transaction.",
  ],
  [
    "What wallets will Tradeva offer?",
    "Tradeva is being designed with a connected hot wallet for active trading and isolated cold storage for long-term protection.",
  ],
  [
    "Will Tradeva be available globally?",
    "Tradeva is designed for users around the world, with availability subject to applicable local requirements at launch.",
  ],
];

function BrandMark() {
  return (
    <span className="flex items-center gap-2.5 select-none">
      <span className="grid size-7 place-items-center bg-signal text-signal-foreground font-display font-bold text-xs transition-transform duration-300 hover:scale-105 active:scale-95">
        V
      </span>
      <span className="font-display text-lg tracking-[0.08em] font-normal leading-none text-foreground">
        TRADEVA
      </span>
    </span>
  );
}

function Index() {
  const [joined, setJoined] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  // Activate scroll-triggered entrance animations
  useScrollReveal();

  // Access smooth scroll metrics & controller
  const { scrollProgress, scrollY, scrollTo } = useSmoothScroll();

  const isScrolled = scrollY > 20;

  const submitWaitlist = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setJoined(true);
  };

  const handleNavClick = (href: string) => {
    scrollTo(href, { offset: -72, duration: 1.2 });
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-signal selection:text-signal-foreground">
      {/* Header (Header Five Style) */}
      <HeaderFive
        onNavClick={handleNavClick}
        scrollProgress={scrollProgress}
        isScrolled={isScrolled}
      />

      {/* Hero Section */}
      <section
        id="top"
        className="grid-lines relative flex min-h-[min(92vh,58rem)] items-center overflow-hidden border-b border-border pt-20"
      >
        <div className="section-shell grid items-center gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative z-10 py-14 lg:py-24" data-reveal>
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase text-signal">
              <span className="size-2 rounded-full bg-signal animate-pulse" /> Launching 2026 ·
              Waitlist open
            </div>
            <h1 className="max-w-4xl text-5xl font-medium leading-[.94] tracking-tight sm:text-7xl lg:text-8xl">
              Trade crypto
              <br />
              P2P. <span className="text-outline">No friction.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              A modern peer-to-peer platform with secure escrow and built-in wallet storage—designed
              for speed, trust, and simplicity.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button
                asChild
                variant="signal"
                size="lg"
                className="shadow-md shadow-signal/20 transition-all duration-200 active:scale-[0.97]"
              >
                <a
                  href="#waitlist"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#waitlist");
                  }}
                >
                  Join the waitlist <ArrowRight className="size-4" />
                </a>
              </Button>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#features");
                }}
                className="group flex items-center gap-2 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground"
              >
                <span>Explore platform</span>
                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>
            <div className="mt-16 grid max-w-lg grid-cols-3 divide-x divide-border border-y border-border py-5">
              <div>
                <div className="font-display text-2xl tracking-wider font-normal">10K+</div>
                <div className="mt-1 font-mono text-[10px] uppercase text-muted-foreground">
                  Waitlist members
                </div>
              </div>
              <div className="pl-5">
                <div className="font-display text-2xl tracking-wider font-normal text-signal">
                  P2P
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase text-muted-foreground">
                  Escrow trading
                </div>
              </div>
              <div className="pl-5">
                <div className="font-display text-2xl tracking-wider font-normal">2026</div>
                <div className="mt-1 font-mono text-[10px] uppercase text-muted-foreground">
                  Launching
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative min-h-[24rem] lg:min-h-[38rem]" data-reveal="scale-up">
            <div className="glow-orbit absolute inset-[12%] rounded-full opacity-70" />
            <img
              src={orbitImage}
              alt="Chrome Tradeva orbit representing secure peer-to-peer exchange"
              width={1408}
              height={1408}
              className="animate-orbit absolute inset-0 size-full object-contain drop-shadow-2xl"
            />
            <div className="interactive-card absolute right-0 top-[16%] border border-border/80 bg-surface/85 p-4 backdrop-blur-md rounded-sm">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Network status
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm font-medium">
                <span className="size-2 rounded-full bg-positive animate-pulse" /> Systems ready
              </div>
            </div>
            <div className="interactive-card absolute bottom-[12%] left-0 w-52 border border-border/80 bg-surface/85 p-4 backdrop-blur-md rounded-sm">
              <div className="flex justify-between font-mono text-[10px] uppercase text-muted-foreground">
                <span>Escrow</span>
                <span className="text-signal font-semibold">Active</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-3/4 bg-electric transition-all duration-500" />
              </div>
              <div className="mt-3 text-xs text-muted-foreground">
                Trade protected until confirmation
              </div>
            </div>
          </div>
        </div>

        {/* Ticker Bar */}
        <div className="absolute bottom-0 inset-x-0 overflow-hidden border-t border-border bg-background/70 py-3 font-mono text-[10px] uppercase text-muted-foreground backdrop-blur-sm">
          <div className="animate-ticker flex w-max gap-12 whitespace-nowrap">
            {Array.from({ length: 2 })
              .flatMap(() => [
                "Escrow-protected trades",
                "Lightning-fast transfers",
                "Available worldwide",
                "Secure wallet storage",
                "Peer-to-peer trading",
                "Built for 2026",
              ])
              .map((x, i) => (
                <span key={`${x}-${i}`} className="flex items-center gap-12">
                  {x}
                  <span className="text-signal">✦</span>
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* 01 / Platform Features */}
      <section id="features" className="section-shell py-28 md:py-36">
        <div className="mb-16 grid gap-6 md:grid-cols-2" data-reveal>
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-electric">
              01 / Platform
            </div>
            <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-6xl">
              A better way to trade between people.
            </h2>
          </div>
          <p className="max-w-md self-end text-muted-foreground leading-7">
            Tradeva combines direct access, protected settlement, and secure storage in one focused
            platform.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {features.map(({ n, title, body, icon: Icon }, idx) => (
            <article
              key={n}
              data-reveal
              className={`group interactive-row grid gap-5 py-8 md:grid-cols-[5rem_1fr_1fr_3rem] md:items-center px-4 -mx-4 rounded-md transition-all duration-300 hover:bg-surface/50 delay-${idx + 1}`}
            >
              <span className="font-display text-sm tracking-wider text-muted-foreground transition-colors group-hover:text-signal">
                {n}
              </span>
              <h3 className="text-xl font-medium sm:text-2xl transition-colors group-hover:text-foreground">
                {title}
              </h3>
              <p className="max-w-lg text-sm leading-6 text-muted-foreground">{body}</p>
              <Icon className="size-6 text-muted-foreground transition-all duration-300 group-hover:text-signal group-hover:scale-110" />
            </article>
          ))}
        </div>
      </section>

      {/* 02 / Trade Flow (How it works) */}
      <section id="how" className="border-y border-border bg-surface">
        <div className="section-shell grid min-h-[42rem] lg:grid-cols-[.85fr_1.15fr]">
          <div
            className="flex flex-col justify-between border-border py-16 lg:border-r lg:py-24 lg:pr-16"
            data-reveal
          >
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-signal">
                02 / Trade flow
              </div>
              <h2 className="mt-4 text-4xl font-medium sm:text-6xl">
                Four steps.
                <br />
                Full clarity.
              </h2>
            </div>
            <p className="mt-12 max-w-sm text-sm leading-6 text-muted-foreground">
              From account creation to confirmed settlement, each stage is transparent and easy to
              follow.
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            {[
              ["01", "Create an account", "Set up your secure Tradeva profile."],
              ["02", "Verify your identity", "Help keep the network safe for everyone."],
              ["03", "Fund your wallet", "Deposit or receive crypto into Tradeva."],
              ["04", "Trade via escrow", "Funds release when both sides confirm."],
            ].map(([n, t, b], idx) => (
              <div
                key={n}
                data-reveal
                className={`interactive-card group flex min-h-64 flex-col justify-between border-t border-border p-8 first:border-t-0 md:border-l md:even:border-t md:first:border-l-0 md:first:border-t-0 md:[&:nth-child(3)]:border-l-0 hover:bg-card/70 delay-${idx + 1}`}
              >
                <span className="font-display text-base tracking-wider text-electric transition-colors group-hover:text-signal">
                  {n}
                </span>
                <div>
                  <h3 className="text-xl font-medium transition-colors group-hover:text-foreground">
                    {t}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 / Wallets */}
      <section id="wallets" className="section-shell py-28 md:py-36">
        <div
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          data-reveal
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-electric">
              03 / Wallets
            </div>
            <h2 className="mt-4 text-4xl font-medium sm:text-6xl">
              Access now.
              <br />
              Protect for later.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground leading-relaxed">
            Two purpose-built environments. One simple view of your assets.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article
            data-reveal="scale-up"
            className="interactive-card delay-1 min-h-[30rem] rounded-lg border border-border bg-card p-8 sm:p-12 hover:border-signal/40"
          >
            <Zap className="size-8 text-signal" />
            <div className="mt-20 font-mono text-xs uppercase text-muted-foreground">
              Hot wallet · Everyday access
            </div>
            <h3 className="mt-4 text-3xl font-medium">Ready when the market moves.</h3>
            <ul className="mt-8 space-y-3.5 text-sm text-muted-foreground">
              {[
                "Instant access for trading",
                "Optimized for P2P transactions",
                "Real-time balance updates",
                "Fast send and receive",
              ].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <Check className="size-4 text-signal shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </article>

          <article
            data-reveal="scale-up"
            className="interactive-card delay-2 min-h-[30rem] rounded-lg border border-border bg-card p-8 sm:p-12 hover:border-electric/40"
          >
            <Snowflake className="size-8 text-electric" />
            <div className="mt-20 font-mono text-xs uppercase text-muted-foreground">
              Cold wallet · Enhanced protection
            </div>
            <h3 className="mt-4 text-3xl font-medium">Distance from daily activity.</h3>
            <ul className="mt-8 space-y-3.5 text-sm text-muted-foreground">
              {[
                "Isolated from trading environments",
                "Designed for long-term holding",
                "Enhanced security architecture",
                "Ideal for larger asset storage",
              ].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <Check className="size-4 text-electric shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* 04 / Security */}
      <section
        id="security"
        className="relative overflow-hidden border-y border-border bg-surface py-28 md:py-36"
      >
        <div className="section-shell relative z-10 grid gap-16 lg:grid-cols-2">
          <div data-reveal>
            <LockKeyhole className="size-12 text-signal" />
            <div className="mt-10 font-mono text-xs uppercase tracking-wider text-signal">
              04 / Security first
            </div>
            <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-6xl">
              Trust is not a feature.
              <br />
              It is the system.
            </h2>
          </div>

          <div className="divide-y divide-border">
            {[
              ["Escrow-protected", "Assets are held until both parties confirm."],
              ["Separated wallet architecture", "Different access levels for different needs."],
              ["Transparent operations", "Clear statuses and activity records at every step."],
              ["Reliable process", "The same trusted flow, trade after trade."],
            ].map(([t, b], i) => (
              <div
                className={`group interactive-row grid grid-cols-[2rem_1fr] gap-4 py-6 px-3 -mx-3 rounded-md transition-all duration-300 hover:bg-card/40 delay-${i + 1}`}
                key={t}
                data-reveal
              >
                <span className="font-display text-sm tracking-wider text-electric transition-colors group-hover:text-signal">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-medium text-lg transition-colors group-hover:text-foreground">
                    {t}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="pointer-events-none absolute -bottom-20 right-0 font-display text-[20rem] font-normal leading-none text-outline opacity-25 select-none"
          aria-hidden="true"
        >
          V
        </div>
      </section>

      {/* 05 / FAQ */}
      <section id="faq" className="section-shell py-28 md:py-36">
        <div className="grid gap-12 lg:grid-cols-[.4fr_1fr]">
          <div data-reveal>
            <div className="font-mono text-xs uppercase tracking-wider text-electric">05 / FAQ</div>
            <h2 className="mt-4 text-4xl font-medium">Clear answers.</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Everything you need to know about Tradeva’s upcoming launch, security protocols, and
              account setup.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border" data-reveal>
            {faqs.map(([q, a], i) => {
              const isOpen = openFaq === i;
              return (
                <div key={q} className="group">
                  <Button
                    variant="ghost"
                    className="h-auto w-full justify-between rounded-none px-0 py-6 text-left text-base font-medium transition-colors hover:bg-transparent hover:text-signal active:scale-[0.99]"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{q}</span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-muted-foreground transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? "rotate-180 text-signal" : ""
                      }`}
                    />
                  </Button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pr-10 text-sm leading-relaxed text-muted-foreground">
                        {a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="border-t border-border bg-background">
        <div className="section-shell grid min-h-[38rem] items-stretch lg:grid-cols-2">
          <div
            className="flex flex-col justify-center border-border py-20 lg:border-r lg:pr-16"
            data-reveal
          >
            <div className="font-mono text-xs uppercase tracking-wider text-signal">
              Early access · 2026
            </div>
            <h2 className="mt-5 text-5xl font-medium leading-[.96] sm:text-7xl">
              Be first
              <br />
              to trade.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
              Get launch news, product updates, and early access opportunities in your inbox.
            </p>
          </div>

          <div className="flex items-center py-20 lg:pl-16" data-reveal>
            {joined ? (
              <div className="interactive-card w-full max-w-lg rounded-xl border border-border bg-surface p-8">
                <div className="grid size-14 place-items-center bg-signal text-signal-foreground rounded-md shadow-lg shadow-signal/25">
                  <Check className="size-7 stroke-[2.5]" />
                </div>
                <h3 className="mt-6 text-3xl font-medium">You’re on the list.</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  We’ll keep you updated with preview builds and early registration passes as
                  Tradeva approaches launch.
                </p>
              </div>
            ) : (
              <form onSubmit={submitWaitlist} className="w-full max-w-lg space-y-5">
                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Full name
                  </span>
                  <input
                    required
                    name="name"
                    className="h-12 w-full rounded-md border border-input bg-surface px-4 text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 focus:border-electric focus:ring-1 focus:ring-electric"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Email address
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="h-12 w-full rounded-md border border-input bg-surface px-4 text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 focus:border-electric focus:ring-1 focus:ring-electric"
                    placeholder="you@example.com"
                  />
                </label>
                <Button
                  type="submit"
                  variant="signal"
                  size="lg"
                  className="w-full shadow-md shadow-signal/20 transition-all duration-200 active:scale-[0.98]"
                >
                  Join waitlist <ArrowRight className="size-4" />
                </Button>
                <p className="font-mono text-[10px] text-muted-foreground">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="about"
        className="overflow-hidden border-t border-border bg-background pt-16 dark:bg-[radial-gradient(35%_128px_at_50%_0%,oklch(0.965_0.008_105_/_0.06),transparent)]"
      >
        <div className="section-shell">
          {/* Upper Section Header: Brand & Status */}
          <div
            className="mb-10 flex flex-col justify-between gap-6 border-b border-border/80 pb-10 sm:flex-row sm:items-end"
            data-reveal
          >
            <div>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#top");
                }}
                className="inline-block transition-opacity hover:opacity-90"
              >
                <BrandMark />
              </a>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                A modern peer-to-peer crypto platform built for direct, protected trading. Escrow
                security, dual wallets, and global access—launching in 2026.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@gettradeva.com"
                className="group inline-flex items-center gap-2 font-mono text-xs text-foreground transition-colors hover:text-signal"
              >
                <span>hello@gettradeva.com</span>
                <ArrowRight className="size-3.5 text-signal transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-2 rounded-full border border-border/80 bg-surface px-3 py-1 font-mono text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-positive animate-pulse" />
                <span>Launchpad Ready</span>
              </div>
            </div>
          </div>

          {/* Directory-Style Footer Four Component */}
          <div data-reveal className="mb-10">
            <FooterFour onNavClick={handleNavClick} className="px-0 sm:px-0 max-w-none" />
          </div>

          {/* Risk Disclosure Strip */}
          <div
            className="border-y border-border/70 py-6 text-xs leading-relaxed text-muted-foreground"
            data-reveal
          >
            <p>
              <strong className="font-mono text-[10px] uppercase tracking-wider text-foreground/85">
                Risk Notice:{" "}
              </strong>
              Cryptocurrency trading involves substantial market volatility and financial risk. Only
              trade with funds you can afford to lose. Tradeva provides escrow protection and
              built-in wallet storage but does not offer financial or legal investment advice.
              Platform availability is subject to applicable regulatory requirements at 2026 launch.
            </p>
          </div>

          {/* Bottom Bar: Copyright & Navigation */}
          <div className="flex flex-col gap-3 py-6 font-mono text-[10px] uppercase text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Tradeva. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <p>Trade · Trust · Grow</p>
              <button
                type="button"
                onClick={() => handleNavClick("#top")}
                className="flex cursor-pointer items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground active:scale-95"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="size-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Big Copixel TRADEVA Wordmark */}
        <div className="footer-wordmark select-none" aria-hidden="true">
          TRADEVA
        </div>
      </footer>

      {/* Floating Smooth Scroll-to-Top Button */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <Button
          size="icon"
          variant="glass"
          onClick={() => handleNavClick("#top")}
          aria-label="Scroll smoothly to top"
          className="size-11 rounded-full shadow-lg shadow-black/40 border border-border/80 bg-surface/90 hover:bg-surface hover:border-signal text-foreground transition-all duration-200 active:scale-95 cursor-pointer backdrop-blur-md"
        >
          <ArrowUp className="size-4" />
        </Button>
      </div>
    </main>
  );
}
