import {useState, useEffect} from 'react'



export default function RandomColor(){
    const[type, setType]= useState('hex')
    const[color, setColor]= useState('#000000')
    useEffect(()=>{
        type==='hex'? CreateHexColor():CreateRgbColor()
    },[type])
    
    function randomColorUtillity(length){
        return Math.floor(Math.random()*length)
    }
    function CreateHexColor(){
        const hex =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor="#"
        for(let i=0; i<6; i++){
            hexColor+=hex[randomColorUtillity(hex.length)]
        }
        setColor(hexColor)
    }       
    function CreateRgbColor(){
        const r = randomColorUtillity(256)
        const g = randomColorUtillity(256)
        const b = randomColorUtillity(256)
        setColor(`rgb(${r},${g},${b})`);
    }
    
    return(
        <div style={{
            width:'100vw',
            height:`100vh`,
            background:color
            }}>
            <button onClick={()=>setType('hex')}>HEX Color</button>
            <button onClick={()=>setType('rgb')}>RGB Color</button>
            <button onClick={type==='hex'? CreateHexColor : CreateRgbColor}>Genrate Random Color</button>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                color: '#FFF',
                fontSize:'28px',
                marginTop:'50px',
            }}>
                <h1>{type=='hex'?'HEX color:':'RGB color: '}</h1>
                <br></br>
                <h1>{color}</h1>
            </div>
        </div>
    )
}