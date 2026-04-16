import { useContext } from "react";
import { typeContext } from "../contexts/typeContext";

export default function useType() {
    const { type, setType } = useContext(typeContext)
    return { type, setType }
}