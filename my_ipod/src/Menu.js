import './assets/css/Menu.css';
import MenuItem from './MenuItem';

function Menu(props) {
    const menu = props.menu;

    return (
        <div className='menu'>
            <h1>{menu.heading}</h1>
            {menu.items && menu.items.length > 0 ? (
                <ul>
                    {menu.items.map((item, index) => (
                        <MenuItem
                            item={item}
                            menu={menu}
                            key={`${item}-${index}`}
                        />
                    ))}
                </ul>
            ) : (
                <p>No items available.</p>
            )}
        </div>
    );
}

export default Menu;
