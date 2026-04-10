import { Link } from "react-router-dom";
import "./back-button.css";
import { FiArrowLeft } from "react-icons/fi";

export default function BackButton() {
    return (
        <Link to="/" className="backButton"><FiArrowLeft size={24} style={{display: "block"}} /></Link>
    );
}