import './assets/css/Menu.css'
import MenuItem from './MenuItem';

function Menu(props) {
    const items = props.list_items;
    

    return(
        <div className='menu'>
            <h1>ipod.js</h1>

            <ul>
                {items.map((item) => {
                return <MenuItem item={item}/>
                })}
            </ul>
            
        </div>
    );
}

export default Menu;