import './App.css'
import CoreContainer from './components/core-sample/Container'
import SegmentationsPanel from './components/segmentations-panel/SegmentationsPanel'

function App() {
  return (
    <div className='parent-container'>
      <div className="cores-panel">
        <CoreContainer className='cores-container'/>
        <CoreContainer className='cores-container'/>
        <CoreContainer className='cores-container'/>
        <CoreContainer className='cores-container'/>
      </div>
      <SegmentationsPanel className="segmentation-panel" />
    </div>
  )
}

export default App
