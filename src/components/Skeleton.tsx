import styles from "./Skeleton.module.css";

interface SkeletonProps {
    width?: string;
    height?: string;
    borderRadius?: string;
    className?: string;
}

export default function Skeleton({ width, height, borderRadius, className }: SkeletonProps) {
    return (
        <div
            className={`${styles.skeleton} ${className || ""}`}
            style={{
                width: width || "100%",
                height: height || "1rem",
                borderRadius: borderRadius || "var(--radius)"
            }}
        />
    );
}
