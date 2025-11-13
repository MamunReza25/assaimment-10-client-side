import React from 'react';
import { motion } from "framer-motion";

const FremarMotion = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 120,
                damping: 12,
            }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
};

export default FremarMotion;
