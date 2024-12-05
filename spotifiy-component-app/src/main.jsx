import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './component/Sidemenu.css'
import './component/Mainmenu.css'
import './index.css'

import Sidemenu from './component/Sidemenu.jsx'
import Mainmenu from './component/Mainmenu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id="UI"> 
      <Sidemenu />
      <Mainmenu />
      </div> 
  
   
  </StrictMode>,
)
