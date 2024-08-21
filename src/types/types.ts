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
    RUN_BLOCK: 'RUN BLOCK'
}

const DEPTH = {
    DEPTH_MARK: 'DEPTH MARK'
}

const WEATHERED = {
    WEATHERED_1: 'WEATHERED 1',
    WEATHERED_2: 'WEATHERED 2'
}

export const segColors = {
    "FRACTURE": 'bg-yellow-200',
    "DISPLACED FRACTURE": 'bg-yellow-100',
    "EMPTY SPACE": 'bg-yellow-50',
    "INTACT": 'bg-sky-700',
    "DAMAGED 1": 'bg-red-100',
    "DAMAGED 2": 'bg-red-200',
    "DAMAGED 3": 'bg-red-300',
    "DAMAGED 4": 'bg-red-400',
    "BLOCK": 'bg-emerald-300',
    "RUN BLOCK": 'bg-emerald-700',
    "DEPTH MARK": 'bg-blue-700',
    "WEATHERED 1": 'bg-amber-200',
    "WEATHERED 2": 'bg-amber-100'
}

type SegmentationKeys = 'Fractures' | 'Core Quality' | 'Blocks' | 'Depth' | 'Weathered';

export const segmentationTypes: Record<SegmentationKeys, string[]> = {
    'Fractures': [FRACTURES.FRACTURE, FRACTURES.DISPLACED_FRACTURE, FRACTURES.EMPTY_SPACE],
    'Core Quality': [CORE_QUALITY.INTACT, CORE_QUALITY.DAMAGED_1, CORE_QUALITY.DAMAGED_2, CORE_QUALITY.DAMAGED_3, CORE_QUALITY.DAMAGED_4],
    'Blocks': [BLOCKS.BLOCK, BLOCKS.RUN_BLOCK],
    'Depth': [DEPTH.DEPTH_MARK],
    'Weathered': [WEATHERED.WEATHERED_1, WEATHERED.WEATHERED_2],
}

export type Line = {
    id: number;
    position: number;
    lineColor: string;
}