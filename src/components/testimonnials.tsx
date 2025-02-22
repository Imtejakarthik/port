"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"

const testimonials = {
    main: {
        content:
            "Surendar has consistently demonstrated outstanding skills and dedication as a web developer. He is a highly talented individual who excels in both front-end and back-end development. He has the ability to turn complex concepts into user-friendly, visually appealing websites. His attention to detail and commitment to delivering high-quality work are truly commendable. I had the privilege of working with Surendar on various projects during his tenure at Flookup, and I was continually impressed by his problem-solving abilities and the way he tackled challenges. If you are seeking a web developer who not only possesses technical expertise but also a strong work ethic and a passion for delivering results, I wholeheartedly recommend Surendar is an asset to any team or project.",
        author: "Vaibhav Mandhana",
        position: "Founder Partner, Flookup Advisors",
        image: "/placeholder.svg",
    },
    side: [
        {
            content:
                "I worked with Kunal & Surender on creating a video testimonial widget. I had some custom requirements like only one video being played at a time, mobile optimising, etc. They got the job done, and even built a sweet front-end system that allows a tech noob like me to manage future video testimonials. Thanks for doing a fantastic job - big fan and can recommend to anyone needing web/tech/code firepower!",
            author: "Diveakssh Schae",
            position: "Founder of Jungli the Nomad Village",
            image: "/placeholder.svg",
        },
        {
            content:
                "Surendar is a diligent professional and is always ready to go the extra mile to achieve planned objectives. I got to work with him on multiple projects, and his discipline to deliver timely results is admirable. His drive to learn and work on new technologies sets him apart. This approach equips him to deliver above and beyond the set goals.",
            author: "Suyash Bajaj",
            position: "Marketing, SP Jain Institute of Management & Research",
            image: "/placeholder.svg",
        },
        {
            content:
                "Surendar is one of the most adaptable developers I've ever met. He can quickly learn any new technology or framework and produce workable prototypes in a couple of days. Working with Surendar may appear to be fast-paced at first, but the learning you can gain from the process is invaluable.",
            author: "Anonymous",
            position: "Tech Lead",
            image: "/placeholder.svg",
        },
        {
            content:
                "Surendar is a highly skilled and experienced website developer. I had the pleasure of working with him on my recent website redesign, and I was extremely impressed with his work. He has a deep understanding of the latest technologies, applications and their capabilities. He was able to quickly and efficiently translate my vision into reality.",
            author: "Client",
            position: "Business Owner",
            image: "/placeholder.svg",
        },
    ],
}

export default function Testimonials() {
    return (
        <section className="py-16 px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Testimonials</h2>
                    <p className="text-xl text-gray-600">
                        Curious what my clients think? Hear it straight from them—it&apos;s like applause, but with words!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Left testimonials */}
                    <div className="md:col-span-1 space-y-8">
                        {testimonials.side.slice(0, 2).map((testimonial, index) => (
                            <Card key={index} className="bg-gray-200">
                                <CardContent className="p-6">
                                    <p className="text-gray-600 mb-4">{testimonial.content}</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                            <Image
                                                src={testimonial.image || "/placeholder.svg"}
                                                alt={testimonial.author}
                                                width={48}
                                                height={48}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                                            <p className="text-sm text-gray-600">{testimonial.position}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Main testimonial */}
                    <div className="md:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:row-span-2"
                        >
                            <Card className="bg-gray-200 h-full">
                                <CardContent className="p-8">
                                    <p className="text-2xl font-medium mb-8 leading-relaxed text-black">{testimonials.main.content}</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                                            <Image
                                                src={testimonials.main.image || "/placeholder.svg"}
                                                alt={testimonials.main.author}
                                                width={64}
                                                height={64}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-black">{testimonials.main.author}</h4>
                                            <p className="text-black">{testimonials.main.position}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Right testimonials */}
                    <div className="md:col-span-1 space-y-8">
                        {testimonials.side.slice(2, 4).map((testimonial, index) => (
                            <Card key={index} className="bg-gray-200">
                                <CardContent className="p-6">
                                    <p className="text-gray-600 mb-4">{testimonial.content}</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                            <Image
                                                src={testimonial.image || "/placeholder.svg"}
                                                alt={testimonial.author}
                                                width={48}
                                                height={48}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                                            <p className="text-sm text-gray-600">{testimonial.position}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
