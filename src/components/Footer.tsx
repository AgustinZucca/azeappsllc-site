import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-navy/10 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy/70 text-sm">
            &copy; {new Date().getFullYear()} Aze Apps LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-navy/70 hover:text-navy text-sm transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-navy/70 hover:text-navy text-sm transition-colors">
              About
            </Link>
            <Link href="/apps" className="text-navy/70 hover:text-navy text-sm transition-colors">
              Apps
            </Link>
          </div>
          <a
            href="mailto:admin@apptranqui.com"
            className="text-navy/70 hover:text-navy text-sm transition-colors"
          >
            admin@apptranqui.com
          </a>
        </div>
      </div>
    </footer>
  );
}
