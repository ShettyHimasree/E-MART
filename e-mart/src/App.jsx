import React from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './stores/pages/LandingPage'
import {Routes , Route} from 'react-router-dom'
import ComputerPage from './stores/pages/ComputerPage'
import MobilePage from './stores/pages/MobilePage'
import FridgePage from './stores/pages/FridgePage'
import SpeakerPage from './stores/pages/SpeakerPage'
import BooksPage from './stores/pages/BooksPage'
import TvPage from './stores/pages/TvPage'
import MenPage from './stores/pages/MenPage'
import WomenPage from './stores/pages/WomenPage'
import WatchPage from './stores/pages/WatchPage'
import KitchenPage from './stores/pages/KitchenPage'
import AcPage from './stores/pages/AcPage'
import FurniturePage from './stores/pages/FurniturePage'
import MobileSingle from './singles/MobileSingle'
import ComputerSingle from './singles/ComputerSingle'
import FridgeSingle from './singles/FridgeSingle'
import TvSingle from './singles/TvSingle'
import MenSingle from './singles/MenSingle'
import WomenSingle from './singles/WomenSingle'
import WatchSingle from './singles/WatchSingle'
import KitchenSingle from './singles/KitchenSingle'
import AcSingle from './singles/AcSingle'
import SpeakerSingle from './singles/SpeakerSingle'
import BookSingle from './singles/BookSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import UserCart from './stores/UserCart'

const App = () => {
  return (
    <div>
      <Routes>
        {/* <h1>Welcome to E-Mart</h1> */}
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/mobiles' element={<MobilePage/>}/>
        <Route path='/computers' element={<ComputerPage/>}/>
        <Route path='/fridges' element={<FridgePage/>}/>
        <Route path='/television' element={<TvPage/>}/>
        <Route path='/men' element={<MenPage/>}/>
        <Route path='/women' element={<WomenPage/>}/>
        <Route path='/watches' element={<WatchPage/>}/>
        <Route path='/kitchen' element={<KitchenPage/>}/>
        <Route path='/ac' element={<AcPage/>}/>
        <Route path='/speakers' element={<SpeakerPage/>}/>
        <Route path='/books' element={<BooksPage/>}/>
        <Route path='/furniture' element={<FurniturePage/>}/>
        {/* DYNAMIC ROUTING */}
        <Route path='/mobiles/:id'  element={<MobileSingle />} />
        <Route path='/computers/:id'  element={<ComputerSingle />} />
        <Route path='/fridges/:id'  element={<FridgeSingle />} />
        <Route path='/television/:id'  element={<TvSingle />} />
        <Route path='/men/:id'  element={<MenSingle />} />
        <Route path='/women/:id'  element={<WomenSingle />} />
        <Route path='/watches/:id'  element={<WatchSingle />} />
        <Route path='/kitchen/:id'  element={<KitchenSingle />} />
        <Route path='/ac/:id'  element={<AcSingle />} /> 
        
        <Route path='/speakers/:id'  element={<SpeakerSingle />} /> 
        <Route path='/books/:id'  element={<BookSingle />} /> 
        <Route path='/furniture/:id'  element={<FurnitureSingle />} /> 
        
        <Route path='/cart'  element={<UserCart />} /> 
        
        

      </Routes>
    <ToastContainer />

    </div>
  )
}

export default App
