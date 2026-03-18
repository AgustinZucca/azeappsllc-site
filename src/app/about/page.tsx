import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - AZE Apps",
  description: "Learn about Aze Apps LLC and our mission to improve lives through mobile applications.",
};

export default function About() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-8">
          About Us
        </h1>
        <div className="space-y-6 text-navy/80 text-lg leading-relaxed">
          <p>
            Aze Apps LLC is a mobile app development company dedicated to creating applications
            that make a positive impact on people&apos;s daily lives. We focus on emotional
            wellbeing, building tools that help users find balance and tranquility.
          </p>
          <p>
            Our founding application, <strong>Tranqui - Bienestar emocional</strong>, reflects our
            core belief: that everyone deserves accessible tools to support their emotional health.
            We combine thoughtful design with practical functionality to create experiences that
            truly help.
          </p>
        </div>

        <div className="mt-12 p-6 bg-white rounded-xl border border-navy/10">
          <h2 className="font-serif text-xl font-bold text-navy mb-2">Get in Touch</h2>
          <p className="text-navy/70">
            Have a question or want to work with us? Reach out at{" "}
            <a
              href="mailto:admin@apptranqui.com"
              className="text-navy underline hover:text-navy-light transition-colors"
            >
              admin@apptranqui.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
