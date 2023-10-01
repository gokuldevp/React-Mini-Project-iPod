import './assets/css/Menu.css'
import MenuItem from './MenuItem';

function Menu(props) {
    const menu = props.menu;
    

    return(
        <div className='menu'>
            <h1>ipod.js</h1>

            <ul>
                {menu.items.map((item, index) => {
                return <
                MenuItem 
                item={item} 
                menu={menu}
                key={index}
                />
                })}
            </ul>
            
        </div>
    );
}

export default Menu;