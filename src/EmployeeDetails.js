import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
    const { id } = useParams();

    return (  
        <div className="employee-details">
            <h2>Pracownik nr: { id }</h2>
        </div>
    );
}

export default EmployeeDetails;