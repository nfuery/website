"use client";

import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = i * 0.9;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        };
    },
};

export default function PathDrawing({ onComplete }) {
    return (
        <motion.svg
            width="75"
            height="75"
            viewBox="0 0 100 100"
            initial="hidden"
            animate="visible"
            style={image}
            onAnimationComplete={onComplete}
        >
            <motion.line
                x1="18"
                y1="15"
                x2="18"
                y2="55"
                stroke="#4ff0b7"
                variants={draw}
                custom={7}
                style={shape}
            />
            <motion.line
                x1="18"
                y1="15"
                x2="48"
                y2="55"
                stroke="#4ff0b7"
                variants={draw}
                custom={8}
                style={shape}
            />
            <motion.line
                x1="48"
                y1="15"
                x2="48"
                y2="55"
                stroke="#4ff0b7"
                variants={draw}
                custom={9}
                style={shape}
            />

        </motion.svg>
    );
}

/**
 * ==============   Styles   ================
 */

const image = {
    maxWidth: "80vw",
};

const shape = {
    strokeWidth: 5,
    strokeLinecap: "round",
    fill: "transparent",
};
