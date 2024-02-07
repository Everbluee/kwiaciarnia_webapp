import { useParams } from "react-router-dom";

const ClientDetails = () => {
	const { id } = useParams();

	return (
		<div className="client-details">
			<h2>Klient nr: {id}</h2>
		</div>
	);
}

export default ClientDetails;