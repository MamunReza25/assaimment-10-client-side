import React from "react";
import { motion } from "framer-motion";

const ScrollAnimation = ({
    children,
    direction = "up",
    delay = 0,
    duration = 0.7,
    bounce = 0.3,
}) => {

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
            y: direction === "up" ? 80 : direction === "down" ? -50 : 30,
            scale: 0.99,
            filter: "blur(6px)",
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration,
                delay,
                type: "spring",
                stiffness: 100,
                damping: 15,
                bounce,
            },
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;
