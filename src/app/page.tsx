import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Image
            src="/logo.jpeg"
            alt="AZE Apps"
            width={160}
            height={160}
            className="mx-auto rounded-2xl mb-8"
          />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            We build apps that improve lives
          </h1>
          <p className="text-navy/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Aze Apps LLC specializes in creating mobile applications focused on emotional wellbeing.
          </p>
          <Link
            href="/apps"
            className="inline-block bg-navy text-cream px-8 py-3 rounded-lg font-medium hover:bg-navy-light transition-colors"
          >
            See Our Apps
          </Link>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-4">
            What We Do
          </h2>
          <p className="text-navy/70 text-lg leading-relaxed">
            At Aze Apps, we believe technology should serve your wellbeing. We design and develop
            mobile applications that help people lead calmer, more balanced lives. Our apps combine
            thoughtful design with evidence-based approaches to emotional health.
          </p>
        </div>
      </section>
    </div>
  );
}
