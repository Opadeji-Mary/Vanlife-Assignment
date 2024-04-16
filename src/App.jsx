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
import Details from './Vanrout.jsx/details'
import Pricing from './Vanrout.jsx/Pricing'
import Photo from './Vanrout.jsx/Photo'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage /> } />
      <Route path="/home" element={<Homepage /> } />
      <Route path="/about" element={<About />} />
      <Route path="/van" element={<Vanpage />}/>
      <Route path="/vavi" element={<Vanview/>}/>
      <Route path="/sign" element={<Signin />}/>
      <Route path="/host" element={<Host/>}/>
      <Route path="/*" element={<Errorpage />}/>

      <Route path="/host">
        <Route path="/host/dashboard" element={<Host/>} />
        <Route path="/host/income" element={<Income />}/>
        <Route path="/host/Review" element={<Review/>}/>
        <Route path="/host/Vans" element={<Vans/>}/>
      </Route>

      <Route path="/host/Vans/123">
        <Route path="/host/Vans/123/details" element={<Details/>}/>
        <Route path="/host/Vans/123/pricing" element={<Pricing/>}/>
        <Route path="/host/Vans/123/photo" element={<Photo/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
