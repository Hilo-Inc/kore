import './App.css'
import CoreContainer from './components/core-sample/Container'
import SegmentationsPanel from './components/segmentations-panel/SegmentationsPanel'

function App() {
  return (
    <div className='parent-container'>
      <div className="cores-panel">
        <CoreContainer key="row1" className='cores-container'/>
        <CoreContainer key="row2" className='cores-container'/>
        <CoreContainer key="row3" className='cores-container'/>
        <div>
          <CoreContainer key="row4" className='cores-container'/>
        </div>
      </div>
      <SegmentationsPanel className="segmentation-panel" />
    </div>
  )
}

export default App
