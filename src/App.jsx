import { Route, Routes, Router} from 'react-router-dom'
import Homepage from './components/Homepage'
import Vanpage from './components/Vanpage'
import About from './components/About'
import Signin from './components/Signin'
import Vanview from './components/Vanview'
import Errorpage from './components/Errorpage'

import Host from './host/Host'
import Income from './host/Income'
import Vans from './host/Vans'
import Review from './host/Review'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage /> } />
      <Route path="/about" element={<About />} />
      <Route path="/van" element={<Vanpage />}/>
      <Route path="/vavi" element={<Vanview/>}/>
      <Route path="/sign" element={<Signin />}/>
      <Route path="/error" element={<Errorpage />}/>
      <Route path="/host" element={<Host/>}/>
    
      <Route path="/host">
        <Route path="/host/dashboard" element={<Host/>} />
        <Route path="/host/income" element={<Income />}/>
        <Route path="/host/Vans" element={<Vans/>}/>
        <Route path="/host/Review" element={<Review/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
