import {FaStar} from 'react-icons/fa'
import {useState} from 'react'
import './style.css'


export default function StarRating({stars=5}){
    const [rating, setRating]=useState(0)
    const [hover,setHover]= useState(0)

    function handleClick(index){
        setRating(index)
    }
    function handleMouseEnter(index){
        setHover(index)
    }
    function handleMouseLeave(){
        setHover(rating)
    }

    return(
        <div className="star-rating">
            {
               [...Array(stars)].map((_,index)=>{
                return<FaStar
                key={index}
                className={index<=(hover||rating)?'active':'inactive'}
                onClick={()=>handleClick(index)}
                onMouseMove={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave()}
                size={40}
                />
               }) 
            }
        </div>
    )
}