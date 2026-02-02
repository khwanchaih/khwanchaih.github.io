import { useState } from "react";
import { Mail, Linkedin, Copy, Check, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const PLACEHOLDER_EMAIL = "info@meventures.vc";
const PLACEHOLDER_LINKEDIN = "#";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PLACEHOLDER_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up">
              Contact
            </h1>

            <p className="prose-academic text-base sm:text-lg mb-10 animate-fade-up-delay-1">
              Open to academic collaboration, data partnerships, and policy
              dialogue.
            </p>

            <div className="space-y-4 animate-fade-up-delay-2">
              {/* Email */}
              <div className="focus-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">
                      {PLACEHOLDER_EMAIL}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="btn-primary w-full sm:w-auto"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Email
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="focus-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium text-foreground">
                      linkedin.com/in/khwanchai
                    </p>
                  </div>
                </div>
                <a
                  href={PLACEHOLDER_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full sm:w-auto"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
