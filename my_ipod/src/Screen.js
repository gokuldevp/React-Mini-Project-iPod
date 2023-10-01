import './assets/css/Screen.css'
import Menu from './Menu';

function Screen(props) {
    const list_items = props.list_items;
    const display = props.menu_display;

    return(
        <div className='screen'>
            {display ? <Menu list_items={list_items}/> : null}
        </div>
    );
}

export default Screen;