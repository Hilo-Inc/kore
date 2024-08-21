import React from "react";
import './SegmentationsPanel.css';
import { segColors, segmentationTypes } from "../../types/types";

interface SegmentationPanelProps {
    className: string;
    handleSelectingSegmentation: (value: string) => void;
}

const SegmentationsPanel: React.FC<SegmentationPanelProps> = ({ className, handleSelectingSegmentation }) => {

    return (
        <div className={className}>
            {Object.entries(segmentationTypes).map(([key, labels]) =>
                <section key={key} className="flex flex-wrap flex-row">
                    <h2 className="text-2xl">{key}</h2>
                    {labels.map((label) => {
                       return (<button 
                                    key={label} 
                                    className={`w-full m-1 ${segColors[label as keyof typeof segColors]}`}
                                    onClick={() => handleSelectingSegmentation(label)}
                                >
                                    {label}
                                </button>)
                    })}
                </section>
            )}
        </div>
    )
}

export default SegmentationsPanel;