import './assets/css/MenuItem.css'

function MenuItem(props) {
    const item = props.item
    const selectedItem = props.menu.items[props.menu.selected]

    let style = {
        backgroundColor: 'white'
    }

    if(item===selectedItem){
        style.backgroundColor = 'blue'
    }

    return(
        <div className='item' style={style}>
            <p >{item}</p>
        </div>
    );
}

export default MenuItem;