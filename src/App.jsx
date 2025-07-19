import { useState } from 'react'

import Home from './Home'
import {Routes,Route} from 'react-router-dom';
import MainDashboard from './MainDashboard';
import UploadMedia from './UploadMedia';
import RenderImage from './RenderImage';
import FolderSelection from './FolderSelection';

function App(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<MainDashboard/>}/>
      <Route path='/upload' element={<UploadMedia/>}/>
      <Route path='/folders' element={<FolderSelection/>}/>
      
      <Route path='/images/:folderName' element={<RenderImage/>}/>
    </Routes>

  )
}
export default App
