import { GraduationCap, BarChart3, Landmark, Building2 } from "lucide-react";
import Layout from "@/components/Layout";

const highlights = [
  { icon: GraduationCap, label: "PhD Research (Integrated Science & Innovation)" },
  { icon: BarChart3, label: "Applied ML & Data Analytics" },
  { icon: Landmark, label: "Islamic Finance Systems" },
  { icon: Building2, label: "Banking & Digital Transformation" },
];

export default function About() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 animate-fade-up">
              About
            </h1>

            <div className="space-y-6 mb-12">
              <p className="prose-academic text-base sm:text-lg animate-fade-up-delay-1">
                I am currently pursuing a Ph.D. in Integrated Science and
                Innovation, specializing in Applied Machine Learning and
                Scientific Data Analysis. I have over 17 years of professional
                experience across banking, digital transformation, and
                operational excellence.
              </p>
              <p className="prose-academic text-base sm:text-lg animate-fade-up-delay-2">
                My research lies at the intersection of artificial intelligence,
                Islamic finance, and financial infrastructure development. I am
                particularly interested in how AI can be responsibly applied to
                improve credit accessibility, risk transparency, and
                institutional trust in cooperative and community-based financial
                systems.
              </p>
              <p className="prose-academic text-base sm:text-lg animate-fade-up-delay-3">
                Beyond academia, I actively engage with practitioners,
                cooperatives, and policymakers to translate research into
                scalable and socially impactful financial platforms.
              </p>
            </div>

            {/* Highlights */}
            <div className="animate-fade-up-delay-4">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                Highlights
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div key={item.label} className="highlight-pill">
                    <item.icon className="w-4 h-4 text-primary" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
