import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
}

export default function FadeIn({
    children,
    className = "",
    fullWidth = false
}: FadeInProps) {
    return (
        <div className={`${fullWidth ? "w-full" : ""} transition-all duration-500 ease-out ${className}`}>
            {children}
        </div>
    );
}
