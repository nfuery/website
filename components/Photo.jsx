"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
            >
                {/* image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
                    <Image
                        src="/assets/photo.png"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-contain"
                    />
                </motion.div>

                {/* rectangle */}
                <motion.svg
                    className="w-[298px] xl:w-[498px] h-[298px] xl:h-[498px]"
                    fill="transparent"
                    viewBox="0 0 300 500"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.rect
                        x="-40"
                        y="2"
                        width="380"
                        height="496"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                            strokeDasharray: "24 10 0 0"
                        }}
                        animate={{
                            strokeDasharray: ["15 200 25 25", "16 25 150 72", "4 350 22 22"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;