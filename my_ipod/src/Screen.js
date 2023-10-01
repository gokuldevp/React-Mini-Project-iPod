import './assets/css/Screen.css'
import Menu from './Menu';

function Screen(props) {
    const menu = props.menu;
    
    return(
        <div className='screen'>
            {menu.menu_display ? <Menu menu={menu}/> : null}
        </div>
    );
}


export default Screen;