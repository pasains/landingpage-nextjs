"use client";

import { useEffect } from "react";

function TimedAlert({ message, duration, color, onClose }: any) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div
            className={`p-2 md:p-4 test-sm md:text-md flex justify-between text-white bg-${color}-600 rounded-lg`}
        >
            {message}
        </div>
    );
}

export default TimedAlert;
