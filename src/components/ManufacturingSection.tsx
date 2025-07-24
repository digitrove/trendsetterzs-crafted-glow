"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import manufacturingBg from "@/assets/manufacturing-bg.jpg";

const ManufacturingSection = () => {
  const standards = [
    "ISO 9001:2015 Quality Management",
    "OEKO-TEX Standard 100",
    "Global Organic Textile Standard (GOTS)",
    "Better Cotton Initiative (BCI)",
    "Fair Trade Certified",
    "WRAP Certification",
    "SA8000 Social Accountability",
    "HIGG Index Compliance",
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(22, 163, 74, 0.9), rgba(59, 130, 246, 0.8)), url(${manufacturingBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Quality Standards
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            OUR MANUFACTURING PARTNERS ARE COMPLIANT WITH{" "}
            <span className="text-gradient-primary bg-gradient-to-r from-green-200 to-blue-200 bg-clip-text text-transparent">
              INTERNATIONAL STANDARDS
            </span>{" "}
            AND CODE OF CONDUCT:
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {standards.map((standard, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-white font-semibold text-center leading-tight">
                {standard}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ManufacturingSection;