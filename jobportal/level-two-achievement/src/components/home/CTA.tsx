import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary-foreground rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl mb-6 animate-float">
            <Briefcase className="w-8 h-8 text-accent" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Take the Next Step in Your Career?
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join millions of professionals who have found their dream jobs through JobBoard. 
            Your future starts today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/jobs">
                Find Jobs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/post-job">
                Post a Job
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
