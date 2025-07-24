import MenuItem from "./Menu-Item";


export default function MenuList({list=[]}){

    return (
        <ul className="menu-list-container">
            {
                list && list.length ?
                list.map((item)=><MenuItem key={item.label} item={item}/>)
                :null
            }
        </ul>
    )
}