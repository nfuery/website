"use client";

import React, { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import PathDrawing from "@/components/BoxPathDraw";

export default function AnimatedCube() {
    const ref = useRef(null);

    useAnimationFrame((t) => {
        if (!ref.current) return;
        const rotate = Math.sin(t / 10000) * 200;
        const y = (1 + Math.sin(t / 1000)) * -50;
        ref.current.style.transform = `rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });

    return (
        <div className="container">
            <div className="cube" ref={ref}>
                <div className="side front">
                    <PathDrawing />
                </div>
                <div className="side right" />
                <div className="side back" />
                <div className="side left" />
                <div className="side top" />
                <div className="side bottom" />
            </div>
            <style jsx>{`
                .container {
                    perspective: 400px;
                    width: 50px;
                    height: 50px;
                    position: absolute;
                    top: 5%;
                    left: 10%;
                    transform: translate(-5%, -5%);
                }

                .cube {
                    width: 50px;
                    height: 50px;
                    position: relative;
                    transform-style: preserve-3d;
                    transform-origin: center center;
                }

                .side {
                    position: absolute;
                    width: 50px;
                    height: 50px;
                    opacity: 0.6;
                    backface-visibility: visible;
                }

                .front {
                    transform: rotateY(0deg) translateZ(25px);
                    background-color: rgba(255, 0, 0, 0.6);
                }

                .back {
                    transform: translateZ(-25px) rotateY(180deg);
                    background-color: rgba(0, 255, 0, 0.6);
                }

                .right {
                    transform: translateX(25px) rotateY(90deg);
                    background-color: rgba(0, 0, 255, 0.6);
                }

                .left {
                    transform: translateX(-25px) rotateY(-90deg);
                    background-color: rgba(255, 255, 0, 0.6);
                }

                .top {
                    transform: translateY(-25px) rotateX(90deg);
                    background-color: rgba(128, 0, 128, 0.6);
                }

                .bottom {
                    transform: translateY(25px) rotateX(-90deg);
                    background-color: rgba(255, 165, 0, 0.6);
                }
            `}</style>
        </div>
    );
}