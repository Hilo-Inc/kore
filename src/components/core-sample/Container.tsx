import React, { useState, useRef } from "react";
import Segmentations from "./Segmentations";

interface Line {
    id: number;
    position: number;
}

const Container: React.FC = () => {
    const [lines, setLines] = useState<Line[]>([]);
    const [nextId, setNextId] = useState(1);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [draggingLineId, setDraggingLineId] = useState<number | null>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    const addLine = () => {
        const newLine = { id: nextId, position: 0 };
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
        if (!isDragging || draggingLineId === null || !timelineRef.current) return;

        const timelineRect = timelineRef.current.getBoundingClientRect();
        const newPosition = event.clientX - timelineRect.left;

        setLines(lines.map(line =>
            line.id === draggingLineId ? { ...line, position: newPosition } : line
        ));
    };

    return (
        <div className="parent-container">
            <button
                onClick={addLine}
                style={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    padding: "5px 10px",
                    background: "#007bff",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Add Line
            </button>
            <div
                ref={timelineRef}
                style={{
                    width: "100%",
                    height: "100px",
                    position: "relative",
                    background: "#f0f0f0",
                    boxSizing: "border-box",
                    userSelect: "none",
                }}
                onMouseMove={handleMouseMove}
                onMouseUp={stopDragging}
                onMouseLeave={stopDragging}
            >
                <Segmentations lines={lines} startDragging={startDragging} />
            </div>
        </div>
    );
};

export default Container;