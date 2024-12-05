
// import './App.css'
import img1 from './img/logo.png'
import img2 from './img/Home.png'
import img3 from './img/search.png'
import img4 from './img/library.png'
import img6 from './img/Like.png'
import img5 from './img/cr.png'
import img7 from './img/yp.png'

function Sidemenu() {
 
  return (
    <>
 <div id='sidebar'>
<div id="logo"><img src={img1} alt="logo" style={{height:"60px",width:"180px"}} /></div>
<div id='first'>
<div id='home'>
  <div id='homeimg'><img src={img2} alt=""style={{height:"35px",width:"35px"}} /></div>
  <div id='hometext'>Home</div>
</div>
<div id='search'>
  <div id='homeimg'><img src={img3} alt=""style={{height:"35px",width:"35px"}} /></div>
  <div id='hometext'>Search</div>
</div>
<div id='library'>
  <div id='homeimg'><img src={img4} alt=""style={{height:"35px",width:"35px"}} /></div>
  <div id='hometext'>library</div>
</div>
</div>

<div id='first'>
<div id='cp'>
  <div id='homeimg'><img src={img5} alt=""style={{height:"35px",width:"35px"}} /></div>
  <div id='hometext'>Create Playlis</div>
</div>
<div id='ls'>
  <div id='homeimg'><img src={img6} alt=""style={{height:"35px",width:"35px"}} /></div>
  <div id='hometext'>Search</div>
</div>
<div id='ye'>
  <div id='homeimg'><img src={img7} alt=""style={{height:"35px",width:"35px"}} /></div>
  <div id='hometext'>library</div>
</div>

<div id='last'>
<div id='lt'><b>FAV</b></div>
<div id='lt'><b>Daily MIx 1</b></div>
<div id='lt'><b>Discover Weekly</b></div>
<div id='lt'><b>Malyalam</b></div>
<div id='lt'><b>Dance/Electronic Mix</b></div>
<div id='lt'><b>EDM/Popular</b></div>
</div>
</div>

<div>
</div>
</div>


    </>
  )
}
export default Sidemenu
