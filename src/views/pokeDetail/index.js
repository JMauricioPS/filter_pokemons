import { useParams} from "react-router-dom"
export default function PokeDetail(){
    const { id } = useParams();
    return (
        <div>
            <p>j: {id}</p>
        </div>
    );
}