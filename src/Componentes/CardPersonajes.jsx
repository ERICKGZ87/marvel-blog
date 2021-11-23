import { Link } from "react-router-dom";
import PropType from "prop-types";
import { useContext} from "react";
import { Context } from "../store/appContext";
import { useParams} from "react-router-dom";





const CardPersonajes = ({ id, titulo, descripcion,Url }) => {

    const { actions } = useContext(Context);
     
   //const {Heroe_id} = useParams();
 
   
   //actions.getComics(parseInt(Heroe_id));
    return (
        <>

            <div className="card">


                <div className="card-body">
                <img src={Url} className="card-img-top" alt="..." />
                    <h5 className="card-title">{id}</h5>
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">
                        {descripcion}
                    </p>
                    <Link to={"/Personajes/" + id + "/Comics"} className="btn btn-primary" >
                       Comics
                    </Link>


                </div>



            </div>




        </>
    )

}
CardPersonajes.PropType = {
    descripcion: PropType.string,
    titulo: PropType.string,
    id: PropType.number,
    Url: PropType.string,


}

export default CardPersonajes;