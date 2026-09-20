import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FooterLinkItem {
  title: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  social: {
    title: string;
    href: string;
    external?: boolean;
  };
  group: {
    title: string;
    links: FooterLinkItem[];
  };
}

interface FooterFourProps {
  columns?: FooterColumn[];
  onNavClick?: (href: string) => void;
  className?: string;
}

const defaultFooterColumns: FooterColumn[] = [
  {
    social: {
      title: "Twitter / X",
      href: "https://x.com",
      external: true,
    },
    group: {
      title: "Platform",
      links: [
        { title: "P2P Trading", href: "#features" },
        { title: "Escrow Protection", href: "#security" },
        { title: "Hot & Cold Wallets", href: "#wallets" },
        { title: "Trade Flow", href: "#how" },
        { title: "Global Access", href: "#features" },
      ],
    },
  },
  {
    social: {
      title: "Telegram",
      href: "https://t.me",
      external: true,
    },
    group: {
      title: "Learn",
      links: [
        { title: "How It Works", href: "#how" },
        { title: "Platform FAQ", href: "#faq" },
        { title: "Security Architecture", href: "#security" },
        { title: "Cold Storage", href: "#wallets" },
        { title: "Launch Roadmap", href: "#waitlist" },
      ],
    },
  },
  {
    social: {
      title: "GitHub",
      href: "https://github.com/samrawit17/tradeva-launchpad",
      external: true,
    },
    group: {
      title: "Community",
      links: [
        { title: "Official Site", href: "https://gettradeva.com", external: true },
        { title: "Early Access", href: "#waitlist" },
        { title: "Community Forum", href: "#waitlist" },
        { title: "Release Notes", href: "#waitlist" },
        { title: "Brand Assets", href: "#top" },
      ],
    },
  },
  {
    social: {
      title: "Support",
      href: "mailto:hello@gettradeva.com",
      external: true,
    },
    group: {
      title: "Tradeva",
      links: [
        { title: "About Us", href: "#about" },
        { title: "Help Center", href: "mailto:hello@gettradeva.com", external: true },
        { title: "Terms of Service", href: "#about" },
        { title: "Privacy Policy", href: "#about" },
        { title: "Risk Disclosure", href: "#about" },
      ],
    },
  },
];

export function FooterFour({
  columns = defaultFooterColumns,
  onNavClick,
  className,
}: FooterFourProps) {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isExternal?: boolean,
  ) => {
    if (!isExternal && href.startsWith("#") && onNavClick) {
      e.preventDefault();
      onNavClick(href);
    }
  };

  return (
    <div className={cn("relative mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>
      <div className="relative grid grid-cols-1 border-x border-border/80 bg-surface/40 backdrop-blur-sm md:grid-cols-4 md:divide-x md:divide-border/80 rounded-t-sm">
        {columns.map((column, index) => (
          <div key={column.social.title} className="flex flex-col justify-between">
            <div>
              {/* Stacked Action / Social Header */}
              <a
                href={column.social.href}
                target={column.social.external ? "_blank" : undefined}
                rel={column.social.external ? "noopener noreferrer" : undefined}
                onClick={(e) => handleLinkClick(e, column.social.href, column.social.external)}
                className={cn(
                  "group flex items-center justify-between border-y border-border/70 p-3.5 text-sm font-medium transition-all duration-200 hover:bg-secondary/70 hover:text-signal md:border-t-0 active:scale-[0.99]",
                  index === 0 && "border-t-0",
                )}
              >
                <span className="font-mono text-xs tracking-wide">{column.social.title}</span>
                <ArrowRight className="size-4 text-muted-foreground transition-all duration-200 group-hover:translate-x-1 group-hover:text-signal" />
              </a>

              {/* Nested Link Group */}
              <div className="p-4 sm:p-5">
                <h3 className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {column.group.title}
                </h3>
                <ul className="space-y-2.5">
                  {column.group.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        onClick={(e) => handleLinkClick(e, link.href, link.external)}
                        className="inline-block text-xs text-muted-foreground transition-all duration-200 hover:text-foreground hover:translate-x-1 active:scale-[0.98]"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
