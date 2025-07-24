import { useState } from "react";
import MenuList from "./Menu-List";
import {FaMinus, FaPlus} from 'react-icons/fa'

export default function MenuItem({ item, key }) {
  const [displayChildren, setDisplayChidren] = useState({});

  function handleToggleDisplay(label) {
    setDisplayChidren({ ...displayChildren, [label]: !displayChildren[label] });
  }
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleDisplay(item.label)}>
            {
                displayChildren[item.label]?<FaMinus color='#fff' size={25}/>:<FaPlus color='#fff' size={25}/>
            }
            </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
