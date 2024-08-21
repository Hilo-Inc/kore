import React, { useState, useRef } from "react";
import Segmentations from "./Segmentations";
import { Line, segColors } from "../../types/types";

interface ContainerProps {
    className: string;
    segmentSelected: string;
}

const Container: React.FC<ContainerProps> = ({ className, segmentSelected }) => {
    const [lines, setLines] = useState<Line[]>([]);
    const [nextId, setNextId] = useState(1);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [draggingLineId, setDraggingLineId] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const lineColor = segColors[segmentSelected as keyof typeof segColors]
    

    const addLine = () => {
        const newLine = { id: nextId, position: 0, lineColor };
        setLines([...lines, newLine]);
        setNextId(nextId + 1);
    };

    const startDragging = (id: number) => {
        setIsDragging(true);
        setDraggingLineId(id);
    };

    const stopDragging = () => {
        setIsDragging(false);
        setDraggingLineId(null);
    };

    const handleMouseMove = (event: React.MouseEvent) => {
        if (!isDragging || draggingLineId === null || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const newPosition = event.clientX - containerRect.left;

        setLines(lines.map(line =>
            line.id === draggingLineId ? { ...line, position: newPosition } : line
        ));
    };

    return (
        <div
            className={className}
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
        >
            <Segmentations lines={lines} startDragging={startDragging} />
            <button
                onClick={addLine}
                style={{
                    position: "relative",
                    top: 10,
                    left: 10,
                    padding: "5px 10px",
                    background: "#007bff",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                ||
            </button>
        </div>
    );
};

export default Container;