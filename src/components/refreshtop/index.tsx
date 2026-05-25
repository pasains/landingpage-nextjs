"use client";

import React, { useEffect } from "react";

const RefreshTop: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
};

export default RefreshTop;
