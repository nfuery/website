"use client";

import { useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+1) 949 294 8353",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "nfuery@chapman.edu",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "School Address",
        description: "1 University Drive, Orange CA 92866",
    },
];

import { motion } from "framer-motion";

const Contact = () => {
    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm(
                "service_4cizz3x",
                "template_ca8rera",
                formRef.current,
                "IjBtDvXufy4QIdMOG"
            );

            alert("Your message has been sent!");
            formRef.current.reset();
        } catch (error) {
            console.error("Failed to send email:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4, duration: 0.4, ease: "easeIn"
                },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">
                                Let's work together
                            </h3>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="firstname" placeholder="First Name" required />
                                <Input type="text" name="lastname" placeholder="Last Name" required />
                                <Input type="email" name="email" placeholder="Email address" required />
                                <Input type="text" name="phone" placeholder="Phone number" />
                            </div>
                            {/* select */}
                            <Select name="topic">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a topic" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a topic</SelectLabel>
                                        <SelectItem value="hiring"> Hiring/Job Opportunities</SelectItem>
                                        <SelectItem value="questions"> General Concerns/Questions</SelectItem>
                                        <SelectItem value="mysteries"> Discussing the Mysteries of Life</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea
                                className="h-[200px]"
                                name="message"
                                placeholder="Type your message here."
                                required
                            />
                            {/* btn */}
                            <Button size="lg" className="max-w-40" type="submit">
                                Send message
                            </Button>
                        </form>
                    </div>

                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-non mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        </motion.section>
    );
};

export default Contact;