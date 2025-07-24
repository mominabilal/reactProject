import MenuList from "./Menu-List";
import './style.css'

export default function TreeView({list}){
    return(
        <div className="tree-veiw-container">
            <MenuList list={list}/>
        </div>
    )
}