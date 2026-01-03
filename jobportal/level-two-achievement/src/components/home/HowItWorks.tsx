import { Search, FileText, Send, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Search Jobs",
      description: "Browse thousands of job listings from top companies around the world",
    },
    {
      icon: FileText,
      title: "Create Profile",
      description: "Build your professional profile and upload your resume to stand out",
    },
    {
      icon: Send,
      title: "Apply Easily",
      description: "Submit applications with just a few clicks and track your progress",
    },
    {
      icon: CheckCircle,
      title: "Get Hired",
      description: "Connect with employers, ace your interviews, and land your dream job",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your journey to a new career is just four simple steps away
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border">
                  <div
                    className="absolute right-0 w-2 h-2 bg-accent rounded-full -translate-y-1/2"
                    style={{ right: "-4px" }}
                  />
                </div>
              )}

              {/* Step Number */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-2xl mb-6 group">
                <step.icon className="w-8 h-8 text-accent" />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
