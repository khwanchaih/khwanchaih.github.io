import { Link } from "react-router-dom";
import { ArrowRight, Database, Brain, Shield, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import FocusCard from "@/components/FocusCard";

const focusAreas = [
  {
    icon: Database,
    title: "Centralized Credit Risk Assessment",
    description:
      "Building unified risk assessment infrastructure for Islamic cooperatives to address fragmented credit information systems.",
  },
  {
    icon: Brain,
    title: "Machine Learning for Non-Traditional Data",
    description:
      "Developing ML models that leverage alternative data sources to improve credit accessibility for underserved communities.",
  },
  {
    icon: Shield,
    title: "Shariah-Compliant System Design",
    description:
      "Designing financial infrastructure that adheres to Islamic ethical principles while maintaining operational efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Financial Inclusion",
    description:
      "Using analytics and AI to inform policy decisions that expand access to ethical financial services.",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="section-padding"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="container-narrow">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2 animate-fade-up">
              Khwanchai Huailuk
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-medium mb-6 animate-fade-up-delay-1">
              Ph.D. Researcher in AI-Driven Financial Infrastructure
            </p>
            <p className="text-base sm:text-lg text-primary font-medium mb-6 animate-fade-up-delay-1">
              AI-Driven Financial Infrastructure for Inclusive and
              Shariah-Compliant Finance
            </p>
            <p className="prose-academic text-base sm:text-lg mb-8 animate-fade-up-delay-2">
              I am a Ph.D. researcher focusing on the design of AI-driven
              financial infrastructure for Islamic cooperatives and ethical
              finance systems. My work addresses a critical structural gap in
              cooperative lending—fragmented credit information and the absence
              of centralized risk assessment mechanisms—by integrating machine
              learning, data analytics, and institutional design.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <Link to="/research" className="btn-primary">
                View Research
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Focus Areas
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Key research domains bridging artificial intelligence and ethical
            finance systems.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {focusAreas.map((area, index) => (
              <FocusCard
                key={area.title}
                icon={area.icon}
                title={area.title}
                description={area.description}
                className={`animate-fade-up-delay-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Callout Band */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow">
          <div className="callout-band rounded-lg p-6 sm:p-8">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-3">
              Research Credibility Layer
            </h3>
            <p className="prose-academic text-base">
              A living research document and platform blueprint—designed for
              academic collaboration, data partnerships, and policy dialogue.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
