import { Button, Table, TableHead } from 'flowbite-react';
import { useState } from 'react';
 
const ProductList = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
        console.log('hello');
    }

    return (  
        <div className="product-list">
            <h2>Magazyn produktów.</h2>
        <br />
        <Button.Group>
            <Button onClick={handleClick} color="gray" >Rośliny {toggle?'on':'off'}</Button>
            <Button onClick={handleClick} color="gray" >Doniczki</Button>
            <Button onClick={handleClick} color="gray" >Produkty do Uprawy</Button>
            <Button onClick={handleClick} color="gray" >Narzędzia</Button>
        </Button.Group>
        <p> {toggle} </p>
        </div>
    );
}
 
export default ProductList;