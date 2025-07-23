import {useState} from 'react'
import accordianData from './data.js'
import styles from './index.module.css'

function Accordian() {
    const [selected, setSelected]= useState(null)
    const [Mselection, setMselection]=useState(false)
    const [multiple, setMultipe]=useState([])

    function handleClick(id) {
    if (!Mselection) {
      setSelected(selected === id ? null : id)
    } else {
      let cpyMultiple = [...multiple]
      const idx = cpyMultiple.indexOf(id)
      if (idx === -1) {
        cpyMultiple.push(id)
      } else {
        cpyMultiple.splice(idx, 1)
      }
      setMultipe(cpyMultiple)
    }
  }
  return (
    <div className={styles.wrapper}>
        <button onClick={()=>setMselection(!Mselection)}>Enable Multi Selection</button>
        <div className={styles.accordian}>
            {accordianData && accordianData.length >0 ?
            accordianData.map(item=>(
                <div className={styles.item} onClick={()=>handleClick(item.id)}>
                    <div>
                        <h3>{item.title}</h3>
                    </div>
                    <span>+</span>
                {(selected===item.id|| multiple.indexOf(item.id) !==-1) ? <div>{item.content}</div>:<div></div>}
                </div>
            ))
            :(<div>No data availible</div>)}
        </div>
    </div>
  )
}

export default Accordian