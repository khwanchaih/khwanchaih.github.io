import { Users } from "lucide-react";
import Layout from "@/components/Layout";

export default function Research() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 animate-fade-up">
              Research
            </h1>

            {/* Research Focus */}
            <div className="mb-10 animate-fade-up-delay-1">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Research Focus
              </h2>
              <p className="text-lg text-primary font-medium">
                Centralized Credit Risk Assessment for Islamic Cooperatives
                Using AI
              </p>
            </div>

            {/* Problem Statement */}
            <div className="mb-10 animate-fade-up-delay-2">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Problem Statement
              </h2>
              <p className="prose-academic">
                Islamic cooperatives in Thailand operate without a centralized
                credit information system, leading to fragmented risk
                assessment, high default rates, and limited access to formal
                financial services for their members. This structural gap
                undermines the financial stability and social mission of
                cooperative-based Islamic finance.
              </p>
            </div>

            {/* Proposed Solution */}
            <div className="mb-10 animate-fade-up-delay-3">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Proposed Solution
              </h2>
              <p className="prose-academic">
                Develop an AI-driven centralized credit risk assessment
                platform tailored for Islamic cooperatives. The platform
                integrates machine learning–based credit scoring, alternative
                data sources, and Shariah-compliant design principles to enable
                transparent, auditable, and inclusive lending decisions across
                the cooperative network.
              </p>
            </div>

            {/* Methodology */}
            <div className="mb-10 animate-fade-up-delay-4">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Methodology
              </h2>
              <ul className="space-y-3">
                {[
                  "Machine learning–based credit scoring (XGBoost)",
                  "Metaheuristic optimization (PSO and enhanced variants)",
                  "Panel data analysis for systemic risk assessment",
                  "Privacy-aware and auditable AI design",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-foreground/85"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expected Impact */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Expected Impact
              </h2>
              <ul className="space-y-3">
                {[
                  "Improved credit risk transparency across Islamic cooperatives",
                  "Reduced default rates through data-driven lending decisions",
                  "Enhanced financial inclusion for underserved Muslim communities",
                  "Scalable blueprint for ethical AI in cooperative finance",
                  "Evidence-based policy recommendations for financial regulators",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-foreground/85"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research-to-Platform Translation */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Research-to-Platform Translation (Conceptual)
              </h2>
              <ul className="space-y-3">
                {[
                  "Academic research and methodological development",
                  "Ethical and Shariah-compliant AI frameworks",
                  "Institutional and financial infrastructure design",
                  "Downstream implementation by affiliated entities (outside this research scope)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-foreground/85"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collaboration Box */}
            <div className="focus-card bg-accent/30 border border-accent mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Collaboration
                  </h3>
                  <p className="text-muted-foreground">
                    Open to academic collaboration, data partnerships, and policy
                    dialogue.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Translation Note */}
            <div className="border-t border-border pt-6">
              <p className="text-xs text-muted-foreground/70">
                Research outcomes may later be translated into platforms, policy frameworks, or services under ME VENTURES and affiliated entities. This website serves as an academic and conceptual research hub.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
