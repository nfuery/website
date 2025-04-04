"use client";

import {
    FaReact,
    FaJava,
    FaPython,
    FaSwift,
    FaDatabase,
    FaDocker
} from 'react-icons/fa';

import { SiTailwindcss, SiCplusplus } from 'react-icons/si';

// about data
const about = {
    title: 'About me',
    info: [
        {
            fieldName: "Name",
            fieldValue: "Noah Fuery"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+1) 949 294 8353"
        },
        {
            fieldName: "Citizenships",
            fieldValue: "USA, UK, Australia"
        },
        {
            fieldName: "Personal Email",
            fieldValue: "noahf2666@gmail.com"
        },
        {
            fieldName: "School Email",
            fieldValue: "nfuery@chapman.edu"
        },

    ]
};

// experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description:
        "Relevant internship and research experience",
    items: [
        {
            company: "Chapman University",
            position: "C++ Graduate Student Instructor",
            duration: "August 2024 - Present",
        },
        {
            company: "Chapman University",
            position: "Calculus I Graduate Student Instructor",
            duration: "August 2024 - January 2025",
        },
        {
            company: "Caltrans - California Department of Transportation",
            position: "Engineering Intern",
            duration: "October 2023 - March 2024",
        },
        {
            company: "Chapman University",
            position: "MLAT Student Researcher",
            duration: "November 2022 - July 2023",
        },

    ]
};

// education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description:
        "My academic career at Chapman University, graduating May 2025.",
    items: [
        {
            institution: "Chapman University",
            degree: "MS in Electrical Engineering and Computer Science",
            duration: "2023 - 2025",
            gpa: "4.0 GPA"
        },
        {
            institution: "Chapman University",
            degree: "BS in Computer Science, Minor in Mathematics",
            duration: "2020 - 2024",
            gpa: "3.79 GPA"
        },

    ]
};

// skills data
const skills = {
    title: "My skills",
    description:
        "A brief selection of languages and frameworks that I am most proficient with.",
    skillList: [
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: <SiCplusplus />,
            name: "C++",
        },
        {
            icon: <FaSwift />,
            name: "Swift",
        },
        {
            icon: <FaReact />,
            name: "ReactJS",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <FaDatabase />,
            name: "SQL",
        },
        {
            icon: <FaDocker />,
            name: "Docker",
        },

    ]

};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}

            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-g-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px
                                                     text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.gpa}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="capitalize">
                                                        <p>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>;
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap[30px]">
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-4xl font-bold">{about.title}</h3>
                                    <p></p>
                                </div>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </motion.div>

    );

};

export default Resume;