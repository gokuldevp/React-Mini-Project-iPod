import './assets/css/Menu.css'
import MenuItem from './MenuItem';

function Menu() {
    const lst = ["Songs", "Albums", "Artists", "Playlist"]
    return(
        <div className='menu'>
            <h1>ipod.js</h1>

            <ul>
                {lst.map((item) => {
                return <MenuItem item={item}/>
                })}
            </ul>
            
        </div>
    );
}

export default Menu;