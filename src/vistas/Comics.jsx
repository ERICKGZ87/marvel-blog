

import { useParams, useHistory } from "react-router-dom";
import { useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import CardComics from "../Componentes/CardComics";
import Example from "../Componentes/VerTexto";





const Comics = () => {
    const { store,actions} = useContext(Context);
    const Historia = useHistory()
      
    const {Heroe_id} = useParams();


    //actions.getComics(Heroe_id);


    useEffect(() => {
      
        actions.getComics(Heroe_id);
        console.log(Historia)
       }, [])

    return (
        <div className="Container">
           <button className="btn btn-warning"
                onClick={Historia.goBack}>
                Back

            </button>

            <div className="row">
         
            <h1>Lista de comics</h1>
         
                {
                    store.Comics !== null &&
                    Object.keys(store.Comics).map(par => {
                        const value = store.Comics[par];
                        //let UrlWiki = value.urls[0].url
                        let exten = value.thumbnail.extension

                        return (
                            <>

                                <div className="col-sm-4 py-10" key={value.id}>
                            
                       

                            
                                    <CardComics
                               
                                        NombreComics={value.title}
                                        id={value.id}
                                        descripcion={value.description}
                                       
                                
                                        Url={value.thumbnail.path+"."+exten}
                                        paginas={value.pageCount}
                                        digitalID={value.digitalId}


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

export default Comics;