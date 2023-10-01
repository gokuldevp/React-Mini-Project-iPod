import './assets/css/MenuItem.css'

function MenuItem(props) {
    const {item} = props
    return(
        <div className='item'>
            <p>{item}</p>
        </div>
    );
}

export default MenuItem;