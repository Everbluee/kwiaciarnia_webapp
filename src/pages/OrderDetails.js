import { useParams } from "react-router-dom";

const OrderDetails = () => {
    const { id } = useParams();

    return (  
        <div className="order-details">
            <h2>Zamówienie nr: { id }</h2>
        </div>
    );
}

export default OrderDetails;