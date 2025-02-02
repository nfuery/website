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
            width="800"
            height="400"
            viewBox="0 0 800 400"
            initial="hidden"
            animate="visible"
            style={image}
            onAnimationComplete={onComplete}
        >
            {/* Different letters of name */}
            {/* N */}
            <motion.line
                x1="30"
                y1="30"
                x2="30"
                y2="170"
                stroke="#4ff0b7"
                variants={draw}
                custom={1}
                style={shape}
            />
            <motion.line
                x1="30"
                y1="30"
                x2="160"
                y2="170"
                stroke="#4ff0b7"
                variants={draw}
                custom={1}
                style={shape}
            />
            <motion.line
                x1="160"
                y1="30"
                x2="160"
                y2="170"
                stroke="#4ff0b7"
                variants={draw}
                custom={1}
                style={shape}
            />
            {/* O */}
            <motion.circle
                className="circle-path"
                cx="290"
                cy="100"
                r="80"
                stroke="#4ff0b7"
                variants={draw}
                custom={3}
                style={shape}
            />
            {/* A */}
            <motion.line
                x1="410"
                y1="170"
                x2="475"
                y2="30"
                stroke="#4ff0b7"
                variants={draw}
                custom={4}
                style={shape}
            />
            <motion.line
                x1="475"
                y1="30"
                x2="540"
                y2="170"
                stroke="#4ff0b7"
                variants={draw}
                custom={4}
                style={shape}
            />
            {/* H */}
            <motion.line
                x1="590"
                y1="30"
                x2="590"
                y2="170"
                stroke="#4ff0b7"
                variants={draw}
                custom={2}
                style={shape}
            />
            <motion.line
                x1="590"
                y1="100"
                x2="720"
                y2="100"
                stroke="#4ff0b7"
                variants={draw}
                custom={2}
                style={shape}
            />
            <motion.line
                x1="720"
                y1="30"
                x2="720"
                y2="170"
                stroke="#4ff0b7"
                variants={draw}
                custom={2}
                style={shape}
            />
            {/* F */}
            <motion.line
                x1="30"
                y1="230"
                x2="30"
                y2="370"
                stroke="#4ff0b7"
                variants={draw}
                custom={2}
                style={shape}
            />
            <motion.line
                x1="30"
                y1="230"
                x2="128"
                y2="230"
                stroke="#4ff0b7"
                variants={draw}
                custom={2}
                style={shape}
            />
            <motion.line
                x1="30"
                y1="300"
                x2="128"
                y2="300"
                stroke="#4ff0b7"
                variants={draw}
                custom={2}
                style={shape}
            />
            {/* U */}
            <motion.path
                d="M178 230 v110 q0 35 49 35 q49 0 49 -35 v-110"
                stroke="#4ff0b7"
                fill="none"
                variants={draw}
                custom={4}
                style={shape}
            />
            {/* E */}
            <motion.line
                x1="326"
                y1="230"
                x2="326"
                y2="370"
                stroke="#4ff0b7"
                variants={draw}
                custom={5}
                style={shape}
            />
            <motion.line
                x1="326"
                y1="230"
                x2="424"
                y2="230"
                stroke="#4ff0b7"
                variants={draw}
                custom={5}
                style={shape}
            />
            <motion.line
                x1="326"
                y1="300"
                x2="424"
                y2="300"
                stroke="#4ff0b7"
                variants={draw}
                custom={5}
                style={shape}
            />
            <motion.line
                x1="326"
                y1="370"
                x2="424"
                y2="370"
                stroke="#4ff0b7"
                variants={draw}
                custom={5}
                style={shape}
            />
            {/* R */}
            <motion.line
                x1="474"
                y1="230"
                x2="474"
                y2="370"
                stroke="#4ff0b7"
                variants={draw}
                custom={3}
                style={shape}
            />
            <motion.path
                d="M474 230 h74 q20 0 20 35 q0 35 -20 35 h-74"
                stroke="#4ff0b7"
                fill="none"
                variants={draw}
                custom={3}
                style={shape}
            />
            <motion.line
                x1="529"
                y1="300"
                x2="572"
                y2="370"
                stroke="#4ff0b7"
                variants={draw}
                custom={3}
                style={shape}
            />
            {/* Y */}
            <motion.line
                x1="622"
                y1="230"
                x2="671"
                y2="300"
                stroke="#4ff0b7"
                variants={draw}
                custom={1}
                style={shape}
            />
            <motion.line
                x1="720"
                y1="230"
                x2="671"
                y2="300"
                stroke="#4ff0b7"
                variants={draw}
                custom={1}
                style={shape}
            />
            <motion.line
                x1="671"
                y1="300"
                x2="671"
                y2="370"
                stroke="#4ff0b7"
                variants={draw}
                custom={1}
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
    strokeWidth: 10,
    strokeLinecap: "round",
    fill: "transparent",
};
