"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, RefreshCw, Leaf } from "lucide-react";

const ObjectivesSection = () => {
  const objectives = [
    {
      number: "1",
      icon: Heart,
      title: "POSITIVE IMPACT",
      description: "We see ourselves as the extended arm, ear and eye of our customer.",
      gradient: "from-primary to-primary-glow",
    },
    {
      number: "2", 
      icon: RefreshCw,
      title: "REUSE, RECYCLE, REBORN",
      description: "Trendsetterzs is passionate about using technology to create sustainable fabrics.",
      gradient: "from-accent to-secondary",
    },
    {
      number: "3",
      icon: Leaf,
      title: "SUSTAINABILITY",
      description: "Trendsetterzs is committed to ethical, compliant and sustainable sourcing in every aspect of our operations and supply chain management.",
      gradient: "from-success to-primary",
    },
  ];

  return (
    <section id="objectives" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">
            Ethics
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            OBJECTIVES AND{" "}
            <span className="text-gradient-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PRACTICES
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We deliver our best efforts that all business objectives and practices are aligned 
            to create a positive impact for your world-wide supply chain, the surrounding 
            environment and for you.
          </p>
        </motion.div>

        <div className="space-y-12">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Number Circle */}
              <div className="relative">
                <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${objective.gradient} flex items-center justify-center shadow-elegant`}>
                  <span className="text-4xl font-bold text-white">{objective.number}</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
              </div>

              {/* Content */}
              <Card className="flex-1 hover-lift glass-effect">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${objective.gradient} flex items-center justify-center`}>
                      <objective.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {objective.title}
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {objective.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;