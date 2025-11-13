import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-center bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800">
            <title>Error-404</title>
            <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="text-7xl font-extrabold text-blue-600"
            >
                404
            </motion.h1>

            <p className="text-gray-700 dark:text-gray-300 mt-3 text-lg">
                Oops! The page you’re looking for doesn’t exist 😅
            </p>

            <Link
                to="/"
                className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
