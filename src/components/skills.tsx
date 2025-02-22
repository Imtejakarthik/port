"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { containerVariants, itemVariants } from "@/lib/animation-config";

type Skill = {
  id: string | number;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Ensure the icon type matches
  category: string;
  description: string;
  color?: string;
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("all");

  const skillCategories = [
    { id: "all", label: "All Skills" },
    { id: "machine learning", label: "Machine Learning" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "mobile", label: "Mobile" },
    { id: "tools", label: "Tools & Others" },
  ];

  return (
    <section ref={ref} className="py-16 px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="text-left mb-12"
      >
        <h2 className="text-5xl font-bold mb-4 text-gray-900">My Skill Set</h2>
        <p className="text-lg text-black">
          Harnessing cutting-edge technologies to build innovative solutions.
        </p>
      </motion.div>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
        <div className="relative">
          <div
            className="overflow-x-auto pb-4  custom-scrollbar thin-scrollbar tabs-container"
            ref={tabsContainerRef}
            style={{
              overflowX: "auto",
              scrollSnapType: "none",
            }}
          >
            <TabsList className="flex whitespace-nowrap" style={{ display: "flex" }}>
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-4 py-2 text-black hover:bg-gray-100 rounded-md mr-2"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        {skillCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {skills
                .filter((skill) =>
                  category.id === "all" ? true : skill.category === category.id
                )
                .map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl cursor-pointer transform hover:-translate-y-1"
                    onClick={() => setSelectedSkill(skill)}
                  >
                    <div className="p-6 flex flex-col items-center">
                      {skill.icon ? (
                        <skill.icon size={64} color={skill.color || "#000"} />
                      ) : (
                        <div className="text-gray-400">No Icon</div>
                      )}
                      <h3 className="text-lg font-semibold mt-4 text-black">{skill.title}</h3>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mt-8"
        >
          <h3 className="text-2xl font-bold text-black">{selectedSkill.title}</h3>
          <p className="text-black">{selectedSkill.description}</p>
          <Button onClick={() => setSelectedSkill(null)}>Close</Button>
        </motion.div>
      )}
    </section>
  );
}
