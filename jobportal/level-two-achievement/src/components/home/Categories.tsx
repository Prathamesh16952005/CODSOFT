import { Link } from "react-router-dom";
import { categories } from "@/data/jobs";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore opportunities across various industries and find the perfect role for your expertise
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/jobs?category=${category.name}`}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.count} jobs
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/categories"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            View All Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
