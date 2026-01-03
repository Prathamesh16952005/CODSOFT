import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Brain, Sparkles, Users, Zap, ArrowRight, Check } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Create Instantly",
      description: "Build beautiful quizzes in minutes with our intuitive creator",
    },
    {
      icon: Users,
      title: "Share Easily",
      description: "Let anyone take your quizzes with a simple link",
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get scores and see correct answers immediately",
    },
  ];

  const benefits = [
    "Unlimited quizzes",
    "Multiple choice questions",
    "Instant scoring",
    "Mobile friendly",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-5" />
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in shadow-sm">
              <Sparkles className="h-4 w-4 text-accent" />
              <span>Create. Share. Learn.</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Build Engaging Quizzes{" "}
              <span className="text-gradient">in Minutes</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              Create interactive quizzes, share them with the world, and get instant results. 
              Perfect for educators, trainers, and curious minds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "300ms" }}>
              <Link to="/create">
                <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                  Create a Quiz
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/browse">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Browse Quizzes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Simple, powerful tools to create and share knowledge
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-hero mb-5 shadow-md">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Choose <span className="text-gradient">QuizForge</span>?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 justify-center lg:justify-start animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full gradient-success">
                      <Check className="h-4 w-4 text-success-foreground" />
                    </div>
                    <span className="text-lg font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 gradient-hero rounded-3xl blur-2xl opacity-20" />
                <div className="relative bg-card border rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-xl gradient-hero flex items-center justify-center shadow-md">
                      <Brain className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold">Sample Quiz</h4>
                      <p className="text-sm text-muted-foreground">3 questions</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {["What is the capital?", "Which planet is largest?", "Who painted this?"].map((q, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                        <span className="flex h-6 w-6 items-center justify-center rounded bg-muted text-xs font-bold">
                          {i + 1}
                        </span>
                        <span className="text-sm font-medium">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="gradient-hero rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Create Your First Quiz?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of creators sharing knowledge through interactive quizzes.
            </p>
            <Link to="/create">
              <Button variant="secondary" size="xl" className="shadow-lg">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 QuizForge.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
