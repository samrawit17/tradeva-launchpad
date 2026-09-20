import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Globe2,
  Handshake,
  LifeBuoy,
  Menu,
  Newspaper,
  ShieldCheck,
  WalletCards,
  X,
  Zap,
  BookOpen,
  CircleHelp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderFiveProps {
  onNavClick: (href: string) => void;
  scrollProgress: number;
  isScrolled: boolean;
}

export function HeaderFive({ onNavClick, scrollProgress, isScrolled }: HeaderFiveProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const handleLink = (href: string) => {
    setMobileOpen(false);
    setPlatformOpen(false);
    setMoreOpen(false);
    onNavClick(href);
  };

  const productLinks = [
    {
      label: "P2P Escrow Trading",
      description: "Protected settlement until both confirm",
      icon: ShieldCheck,
      href: "#features",
    },
    {
      label: "Hot & Cold Wallets",
      description: "Dual storage for active and secure assets",
      icon: WalletCards,
      href: "#wallets",
    },
    {
      label: "Instant Settlements",
      description: "Lightning fast transfers built for 2026",
      icon: Zap,
      href: "#features",
    },
    {
      label: "Global Network",
      description: "Trade crypto borderless worldwide",
      icon: Globe2,
      href: "#features",
    },
  ];

  const moreLinks = [
    {
      label: "How Tradeva Works",
      description: "Four steps from account to settlement",
      icon: BookOpen,
      href: "#how",
    },
    {
      label: "Platform FAQ",
      description: "Answers on launch, security & escrow",
      icon: CircleHelp,
      href: "#faq",
    },
    {
      label: "Security Architecture",
      description: "Separated wallets and verified flows",
      icon: Handshake,
      href: "#security",
    },
    {
      label: "Launch Roadmap",
      description: "Stay ahead with preview announcements",
      icon: Newspaper,
      href: "#waitlist",
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-6xl transition-all duration-300 ease-out",
        isScrolled ? "md:top-3 md:max-w-5xl px-3 sm:px-4" : "px-4 sm:px-6",
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-between border-b border-border/60 bg-background/85 shadow-sm backdrop-blur-xl transition-all duration-300 ease-out",
          isScrolled &&
            "rounded-full border border-border/80 bg-background/95 shadow-xl shadow-black/35 backdrop-blur-2xl px-4 md:px-5 md:h-13",
        )}
      >
        {/* Real-time Scroll Progress Line */}
        <div
          className={cn(
            "pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-electric via-signal to-positive transition-transform duration-100 ease-out",
            isScrolled && "rounded-full",
          )}
          style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: "0 50%" }}
        />

        {/* Left Side: Brand Logo & Desktop Navigation */}
        <div className="flex h-14 items-center gap-3 md:gap-5">
          <a
            href="#top"
            aria-label="Tradeva home"
            onClick={(e) => {
              e.preventDefault();
              handleLink("#top");
            }}
            className="flex items-center gap-2 select-none transition-opacity hover:opacity-90"
          >
            <span className="grid size-7 place-items-center bg-signal text-signal-foreground font-display font-bold text-xs transition-transform duration-300 hover:scale-105 active:scale-95">
              V
            </span>
            <span className="font-display text-lg tracking-[0.08em] font-normal leading-none text-foreground">
              TRADEVA
            </span>
          </a>

          {/* Vertical divider */}
          <div aria-hidden="true" className="hidden h-5 w-px bg-border/80 md:block" />

          {/* Desktop Navigation with Header-Five style */}
          <nav className="hidden items-center gap-1 text-sm md:flex">
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPlatformOpen(true)}
              onMouseLeave={() => setPlatformOpen(false)}
            >
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-1 rounded-full px-3 text-xs font-medium text-muted-foreground transition-all duration-200 hover:bg-surface/70 hover:text-foreground"
                onClick={() => setPlatformOpen((o) => !o)}
                aria-expanded={platformOpen}
              >
                Platform
                <ChevronDown
                  className={cn(
                    "size-3 transition-transform duration-200",
                    platformOpen && "rotate-180 text-signal",
                  )}
                />
              </Button>

              <div
                className={cn(
                  "absolute left-0 top-full pt-2.5 transition-all duration-200 ease-out",
                  platformOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0",
                )}
              >
                <div className="w-80 rounded-xl border border-border/80 bg-surface-raised/95 p-2 shadow-2xl backdrop-blur-2xl">
                  <div className="space-y-1">
                    {productLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLink(item.href);
                          }}
                          className="group flex items-center gap-3 rounded-lg p-2 transition-all duration-200 hover:bg-secondary/80 active:scale-[0.98]"
                        >
                          <div className="flex aspect-square size-8 items-center justify-center rounded-md border border-border bg-card shadow-xs outline outline-offset-2 outline-border/60 transition-colors group-hover:border-signal/50 [&_svg]:size-4 [&_svg]:text-muted-foreground group-hover:[&_svg]:text-signal">
                            <Icon />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-medium text-foreground group-hover:text-signal transition-colors">
                              {item.label}
                            </span>
                            <span className="line-clamp-1 text-[10px] text-muted-foreground">
                              {item.description}
                            </span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                  <div className="mt-1 border-t border-border/60 p-2 text-center">
                    <p className="font-mono text-[10px] text-muted-foreground">
                      Launching global escrow in 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Links */}
            <a
              href="#how"
              onClick={(e) => {
                e.preventDefault();
                handleLink("#how");
              }}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-surface/70 hover:text-foreground"
            >
              How it works
            </a>
            <a
              href="#wallets"
              onClick={(e) => {
                e.preventDefault();
                handleLink("#wallets");
              }}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-surface/70 hover:text-foreground"
            >
              Wallets
            </a>
            <a
              href="#security"
              onClick={(e) => {
                e.preventDefault();
                handleLink("#security");
              }}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-surface/70 hover:text-foreground"
            >
              Security
            </a>

            {/* Resources / More Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-1 rounded-full px-3 text-xs font-medium text-muted-foreground transition-all duration-200 hover:bg-surface/70 hover:text-foreground"
                onClick={() => setMoreOpen((o) => !o)}
                aria-expanded={moreOpen}
              >
                More
                <ChevronDown
                  className={cn(
                    "size-3 transition-transform duration-200",
                    moreOpen && "rotate-180 text-signal",
                  )}
                />
              </Button>

              <div
                className={cn(
                  "absolute left-0 top-full pt-2.5 transition-all duration-200 ease-out",
                  moreOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0",
                )}
              >
                <div className="w-80 rounded-xl border border-border/80 bg-surface-raised/95 p-2 shadow-2xl backdrop-blur-2xl">
                  <div className="space-y-1">
                    {moreLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLink(item.href);
                          }}
                          className="group flex items-center gap-3 rounded-lg p-2 transition-all duration-200 hover:bg-secondary/80 active:scale-[0.98]"
                        >
                          <div className="flex aspect-square size-8 items-center justify-center rounded-md border border-border bg-card shadow-xs outline outline-offset-2 outline-border/60 transition-colors group-hover:border-electric/50 [&_svg]:size-4 [&_svg]:text-muted-foreground group-hover:[&_svg]:text-electric">
                            <Icon />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-medium text-foreground group-hover:text-electric transition-colors">
                              {item.label}
                            </span>
                            <span className="line-clamp-1 text-[10px] text-muted-foreground">
                              {item.description}
                            </span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                  <div className="mt-1 flex items-center justify-between border-t border-border/60 p-2 font-mono text-[10px]">
                    <a
                      href="mailto:hello@gettradeva.com"
                      className="flex items-center gap-1 text-muted-foreground hover:text-signal transition-colors"
                    >
                      <LifeBuoy className="size-3" />
                      <span>Help Center</span>
                    </a>
                    <span className="text-signal font-semibold">2026 Launch</span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Right Side: CTA Action Buttons */}
        <div className="flex items-center gap-2.5">
          <Button
            asChild
            variant="signal"
            size="sm"
            className="rounded-full px-4 text-xs font-semibold shadow-sm shadow-signal/20 transition-all duration-200 active:scale-95"
          >
            <a
              href="#waitlist"
              onClick={(e) => {
                e.preventDefault();
                handleLink("#waitlist");
              }}
            >
              Join waitlist <ArrowRight className="size-3.5" />
            </a>
          </Button>

          {/* Mobile menu trigger */}
          <Button
            variant="outline"
            size="icon"
            className="size-8 rounded-full md:hidden border-border/80 bg-surface/70 hover:bg-surface text-foreground active:scale-95 cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer (Header Five style) */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden mt-2 rounded-2xl border border-border/80 bg-background/95 shadow-2xl backdrop-blur-2xl",
          mobileOpen
            ? "max-h-[32rem] opacity-100 p-4"
            : "max-h-0 opacity-0 p-0 border-transparent pointer-events-none",
        )}
      >
        <div className="grid gap-1">
          {[
            ["features", "P2P Trading"],
            ["how", "How it works"],
            ["wallets", "Wallets"],
            ["security", "Security"],
            ["faq", "FAQ"],
            ["about", "About Tradeva"],
          ].map(([item, label]) => (
            <Button
              key={item}
              variant="ghost"
              className="justify-between rounded-lg py-2.5 text-sm font-medium text-foreground hover:bg-surface active:scale-[0.98]"
              onClick={() => handleLink(`#${item}`)}
            >
              <span>{label}</span>
              <ArrowRight className="size-4 text-muted-foreground" />
            </Button>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-border/70 flex flex-col gap-2">
          <Button
            variant="signal"
            className="w-full rounded-full"
            onClick={() => handleLink("#waitlist")}
          >
            Join the waitlist <ArrowRight className="size-4" />
          </Button>
          <a
            href="mailto:hello@gettradeva.com"
            className="text-center font-mono text-[10px] uppercase text-muted-foreground hover:text-signal py-1 transition-colors"
          >
            hello@gettradeva.com
          </a>
        </div>
      </div>
    </header>
  );
}
