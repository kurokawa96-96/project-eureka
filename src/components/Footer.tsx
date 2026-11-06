import Link from "next/link";
import Logo from "@/components/Logo";
import { nav, site } from "@/content/site";

export default function Footer() {
  const snsLinks = [
    { label: "X", href: site.sns.x },
    { label: "Instagram", href: site.sns.instagram },
  ].filter((s) => s.href);

  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto max-w-page px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-4 font-serif text-sm italic text-gold">
              {site.tagline}
            </p>
            <p className="mt-3 max-w-sm text-sm text-ivory/70">
              {site.subTagline}
            </p>
          </div>

          <nav aria-label="フッターナビゲーション">
            <h2 className="font-sans text-xs tracking-[0.2em] !text-gold">SITE</h2>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ivory/80 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-xs tracking-[0.2em] !text-gold">SNS</h2>
            {snsLinks.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {snsLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ivory/80 transition-colors hover:text-gold"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-ivory/50">準備中</p>
            )}
          </div>
        </div>

        <p className="mt-12 border-t border-ivory/15 pt-6 text-xs text-ivory/50">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
