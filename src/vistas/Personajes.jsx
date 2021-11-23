

//import { useParams, useHistory } from "react-router-dom";
import { useContext,useEffect} from "react";
import { Context } from "../store/appContext";
import CardPersonajes from "../Componentes/CardPersonajes";
import styles from "../Componentes/CarPersonajes.module.css";





const Personajes = () => {
    const { store} = useContext(Context);
    return (
        <div className="Container">
        
            <div className="row">
            <h1>Lista de Personajes de marvel</h1>

                {
                    store.Personajes !== null &&
                    Object.keys(store.Personajes).map(par => {
                        const value = store.Personajes[par];
                            //let UrlWiki = value.urls[0].url
                            let exten = value.thumbnail.extension
                  
                        return (
                            <>

                                <div className="col-sm-4 py-3" key={value.id}>

                                    <CardPersonajes className={styles.card}
                                    //descripcion={value.description}
                                   // id={value.id}
                             Url={value.thumbnail.path+"."+exten}
                                        titulo={value.name}
                                        
                                    />
                                    

                                </div>
                            </>
                        )
                    })
                }



            </div>

        </div>
    );

};

export default Personajes;