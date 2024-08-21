import React from "react";
import './SegmentationsPanel.css';

const FRACTURES = {
    FRACTURE: 'FRACTURE',
    DISPLACED_FRACTURE: "DISPLACED FRACTURE",
    EMPTY_SPACE: 'EMPTY SPACE'
}

const CORE_QUALITY = {
    INTACT: 'INTACT',
    DAMAGED_1: 'DAMAGED 1',
    DAMAGED_2: 'DAMAGED 2',
    DAMAGED_3: 'DAMAGED 3',
    DAMAGED_4: 'DAMAGED 4'
}

const BLOCKS = {
    BLOCK: 'BLOCK',
    RUN_BLOCK: 'RUN_BLOCK'
}

const DEPTH = {
    DEPTH_MARK: 'DEPTH_MARK'
}

const WEATHERED = {
    WEATHERED_1: 'WEATHERED 1',
    WEATHERED_2: 'WEATHERED 2'
}

const segColors = {
    "FRACTURE": 'bg-yellow-200',
    "DISPLACED FRACTURE": 'bg-yellow-100',
    "EMPTY SPACE": 'bg-yellow-50',
    "INTACT": 'bg-sky-700',
    "DAMAGED 1": 'bg-red-100',
    "DAMAGED 2": 'bg-red-200',
    "DAMAGED 3": 'bg-red-300',
    "DAMAGED 4": 'bg-red-400',
    "BLOCK": 'bg-emerald-300',
    "RUN_BLOCK": 'bg-emerald-700',
    "DEPTH_MARK": 'bg-blue-700',
    "WEATHERED 1": 'bg-amber-200',
    "WEATHERED 2": 'bg-amber-100'
}

type SegmentationKeys = 'Fractures' | 'Core Quality' | 'Blocks' | 'Depth' | 'Weathered';

const segmentationTypes: Record<SegmentationKeys, string[]> = {
    'Fractures': [FRACTURES.FRACTURE, FRACTURES.DISPLACED_FRACTURE, FRACTURES.EMPTY_SPACE],
    'Core Quality': [CORE_QUALITY.INTACT, CORE_QUALITY.DAMAGED_1, CORE_QUALITY.DAMAGED_2, CORE_QUALITY.DAMAGED_3, CORE_QUALITY.DAMAGED_4],
    'Blocks': [BLOCKS.BLOCK, BLOCKS.RUN_BLOCK],
    'Depth': [DEPTH.DEPTH_MARK],
    'Weathered': [WEATHERED.WEATHERED_1, WEATHERED.WEATHERED_2],
}

interface SegmentationPanelProps {
    className: string;
}

const SegmentationsPanel: React.FC<SegmentationPanelProps> = ({ className }) => {

    return (
        <div className={className}>
            {Object.entries(segmentationTypes).map(([key, labels]) =>
                <section key={key} className="flex flex-wrap flex-row">
                    <h2 className="text-2xl">{key}</h2>
                    {labels.map((label) => {
                       return (<button 
                                    key={label} 
                                    className={`w-full m-1 ${segColors[label as keyof typeof segColors]}`}
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