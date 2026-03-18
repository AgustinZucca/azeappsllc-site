import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Apps - AZE Apps",
  description: "Explore mobile applications by Aze Apps LLC.",
};

const apps = [
  {
    name: "Tranqui",
    subtitle: "Bienestar emocional",
    description:
      "Your companion for emotional wellbeing. Tranqui helps you find balance and tranquility in your daily life with tools designed to support your emotional health.",
    appStoreUrl:
      "https://apps.apple.com/us/app/tranqui-bienestar-emocional/id6757107339",
    platforms: ["iOS"] as const,
  },
];

export default function Apps() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
          Our Apps
        </h1>
        <p className="text-navy/70 text-lg mb-12">
          Applications designed to improve your daily life.
        </p>

        <div className="grid gap-8">
          {apps.map((app) => (
            <div
              key={app.name}
              className="bg-white rounded-2xl border border-navy/10 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="w-24 h-24 bg-cream rounded-2xl flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logo.jpeg"
                  alt={app.name}
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-serif text-2xl font-bold text-navy">
                  {app.name}
                </h2>
                <p className="text-navy/50 text-sm mb-2">{app.subtitle}</p>
                <p className="text-navy/70 mb-4">{app.description}</p>
                <div className="flex gap-3 justify-center md:justify-start">
                  <a
                    href={app.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-navy text-cream px-5 py-2.5 rounded-lg font-medium hover:bg-navy-light transition-colors text-sm"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    App Store
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
