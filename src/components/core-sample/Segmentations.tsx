import React from "react";

type Line = {
  id: number;
  position: number;
  lineColor: string;
}

interface SegmentationProps {
  lines: Line[];
  startDragging: (id: number) => void;
}

const Segmentations: React.FC<SegmentationProps> = ({ lines, startDragging }) => {
  return (
    <>
      {lines.map(line => (
        <div
          key={line.id}
          className={line.lineColor}
          style={{
            position: "absolute",
            left: `${line.position}px`,
            width: "2px",
            height: "inherit",
            cursor: "pointer",
          }}
          onMouseDown={() => startDragging(line.id)}
        >
          {/* Circle at the top */}
          <div
            className={line.lineColor}
            style={{
              position: "absolute",
              top: "-5px",
              left: "-3px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
            }}
          />
        </div>
      ))}
    </>
  );
};

export default Segmentations;