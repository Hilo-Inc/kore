import { useEffect, useState } from 'react';
import './App.css'
import CoreContainer from './components/core-sample/Container'
import SegmentationsPanel from './components/segmentations-panel/SegmentationsPanel'

function App() {
  const [segmentSelected, setSegmentSelected] = useState<string>("");

  const handleSelectingSegmentation = (value: string) => {
    setSegmentSelected(value);
    console.log('segmentSelected', value);
  }

  useEffect(() => {
    console.log('useEffect segmentSelected', segmentSelected);
  }, [segmentSelected]);

  return (
    <div className='parent-container'>
      <div className="cores-panel">
        {/* CoreContainers would be created using map of array of all the core samples*/}
        <CoreContainer className='cores-container' segmentSelected={segmentSelected} />
        <CoreContainer className='cores-container' segmentSelected={segmentSelected} />
        <CoreContainer className='cores-container' segmentSelected={segmentSelected} />
        <CoreContainer className='cores-container' segmentSelected={segmentSelected} />
      </div>
      <SegmentationsPanel className="segmentation-panel" handleSelectingSegmentation={handleSelectingSegmentation} />
    </div>
  )
}

export default App
