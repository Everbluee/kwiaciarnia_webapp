import { useParams } from "react-router-dom";

const ProductDetails = () => {
	const { id } = useParams();

	return (
		<div className="product-details">
			<h2>Produkt nr: {id}</h2>
		</div>
	);
}

export default ProductDetails;
