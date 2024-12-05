// import './App.css'
import img6 from './img/Like.png'
import img8 from './img/ur.png'
import img9 from './img/ta.png'
import img10 from './img/a2.png'
import img11 from './img/a3.png'
import img12 from './img/a4.png'
import img13 from './img/a5.png'
import img14 from './img/image9.png'
import img15 from './img/image8.png'
import img16 from './img/image7.png'
import img17 from './img/image6.png'
import img18 from './img/i5.png'
import img19 from './img/image10.png'

function Mainmenu() {
  const first= [
    {id: 1,img_url: img6  , text:'Liked Song' },
    {id: 2,img_url: img10 , text:'Liked Song' },
    {id: 3,img_url: img11 , text:'Liked Song' },
    {id: 4,img_url: img12 , text:'Liked Song' },
    {id: 5,img_url: img13 , text:'Liked Song' },
  ]

  const second=[
    {id: 1, img_url:img14 ,text:'Weekly Motivation'},
    {id: 2, img_url:img15 , text:'Meditation Self'},
    {id: 3, img_url:img16 , text:'Words beyond'},
    {id: 4, img_url:img17 , text:'The Alexa Show'},
    {id: 5, img_url:img18 , text:'The stories of'},
    {id: 6, img_url:img19 , text:'Motivation Daily'}
  ]

  return (
    <>
     <div id="main bar">
<nav id="mupper">
  <div id='mstart'><img src={img9} alt="" style={{height:"40px",width:"120px"}} /></div>
  <div id='mend'><img src={img8} alt="" style={{height:"40px",width:"140px"}} /></div>
</nav>
<div>
<h2>Good Morning</h2>
</div>

<div id='gridcontainer'>
{first.map((x) => (
    <div key ={x.id} id='gridcontainer'>
    <div id="box">
       <div id="img"><img src={x.img_url} /></div>
        <div id="text">{x.text}</div>
        </div>  
         </div>
     
))}
  </div> 


  
<div id="yml">
<h2>Shows You Might like</h2>
<h3>See All</h3>
</div>  

<div id='ml'>
{second.map((y) => (
  <div key={y.id} id='f'>
    <div id='yobox'><div id='zbox'><img src={y.img_url}></img></div></div>
    <div id="txt">{y.text}</div>
    </div>
    

))}
</div>
{/* <div id="ml">
 <div id='yobox'><div id='zbox'><img src={img14} alt="" /></div>
 <div id="txt"><b>Weekly Motivation</b></div></div>
 <div id='yobox'><div id='zbox'><img src={img15} alt="" /></div>
 <div id="txt"><b>Meditation Self</b></div></div>
 <div id='yobox'><div id='zbox'><img src={img16} alt="" /></div>
 <div id="txt"><b>Words beyond</b></div></div>
 <div id='yobox'><div id='zbox'><img src={img17} alt="" /></div>
 <div id="txt"><b>The Alexa Show</b></div></div>
 <div id='yobox'><div id='zbox'><img src={img18} alt="" /></div>
 <div id="txt"><b>The stories of</b></div></div>
 <div id='yobox'><div id='zbox'><img src={img19} alt="" /></div>
 <div id="txt"><b>Motivation Daily</b></div></div>
  */}
{/* </div> */}
</div>

    </>
  )
}

export default Mainmenu