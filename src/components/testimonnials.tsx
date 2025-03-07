"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const testimonials = {
  main: {
    content:
      "Working with Teja Karthik has been a remarkable experience. His ability to seamlessly integrate complex AI/ML solutions into full-stack development is inspiring. From building scalable architectures to implementing cutting-edge technologies, Teja consistently delivers high-quality results. I had the pleasure of collaborating with him on multiple projects, including AI-powered content generation and insurance analytics platforms. His attention to detail, efficiency, and problem-solving mindset make him an invaluable asset. Beyond technical skills, Teja’s leadership and ability to foster a collaborative environment elevate any team. He thrives under pressure, meets deadlines, and continuously explores innovative solutions. If you're looking for someone who brings expertise, dedication, and a growth-oriented mindset to every project, Teja is the perfect choice.His passion for technology, especially in AI-driven applications, is inspiring. If you ever get a chance to work with him, you’ll see firsthand his dedication, work ethic, and the impact he brings to any project. I genuinely admire his ability to turn ideas into reality.",
    author: "Poojith Ram",
    position: "Founder & CEO, InnovateX",
    image: "/avatar/poojith.jpg",
  },
  side: [
    {
      content:
        "Teja is a highly skilled and reliable developer. I collaborated with him on a fintech project where his expertise in AI integration and full-stack development was invaluable. His ability to simplify complex workflows and optimize efficiency made a significant impact on our success.",
      author: "Avinash",
      position: "CTO, FinFlow Systems",
      image: "/avatar/avinash.jpg",
    },
    {
      content:
        "Working with Teja has been an enlightening experience. His discipline in meeting deadlines and eagerness to learn new technologies set him apart. His innovative approach to problem-solving ensures he always delivers above expectations.",
      author: "Bala Krishna",
      position: "Software Engineer, AI Labs",
      image: "/avatar/bala.jpg",
    },
    {
      content:
        "Teja is one of the most adaptable developers I've ever worked with. His ability to pick up new technologies and implement them efficiently is remarkable. His work ethic and dedication to producing high-quality solutions make him an asset to any team.",
      author: "Narsa Raju",
      position: "Tech Lead, CodeWave",
      image: "/avatar/narsa.jpg",
    },
    {
      content:
        "I had the pleasure of working with Teja on a web platform redesign, and I was highly impressed by his skill set. His understanding of modern frameworks and ability to translate ideas into functional designs is top-notch.",
      author: "Ram Chandhu",
      position: "Product Manager, WebSphere",
      image: "/avatar/ram.jpg",
    },
  ],
};

export default function Testimonials() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
    hover: { scale: 1.03, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="py-16 px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What my clients say about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left testimonials */}
          <div className="md:col-span-1 space-y-8">
            {testimonials.side.slice(0, 2).map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover="hover"
              >
                <Card className="bg-gray-200 shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {testimonial.author}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Main testimonial */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            whileHover="hover"
            className="md:col-span-2"
          >
            <Card className="bg-gray-200 shadow-xl">
              <CardContent className="p-8">
                <p className="text-xl font-medium text-black leading-relaxed mb-8 text-justify">
                  {testimonials.main.content}
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonials.main.image || "/placeholder.svg"}
                    alt={testimonials.main.author}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-black">
                      {testimonials.main.author}
                    </h4>
                    <p className="text-black">{testimonials.main.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right testimonials */}
          <div className="md:col-span-1 space-y-8">
            {testimonials.side.slice(2, 4).map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index + 2}
                whileHover="hover"
              >
                <Card className="bg-gray-200 shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {testimonial.author}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}