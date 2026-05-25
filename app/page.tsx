"use client";

import { HomeContent } from "@/src/content/home";
import { Post } from "@/src/content/post";

export default function Page() {
    return (
        <div className="font-nunito scroll-smooth focus:scroll-auto">
            <HomeContent />
            <Post />
        </div>
    );
}
