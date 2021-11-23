
import PropType from "prop-types";


const CardComics = ({ NombreComics, descripcion, Url, id, digitalID, paginas }) => {


    return (
        <>

            <div className="card" style={{ width: "23rem" }}>
                <img src={Url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{NombreComics}</h5>
                    <p className="card-text">
                            {descripcion}
                       

                    </p>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">ID: {id}</li>
                    <li className="list-group-item">DigitalID{digitalID}</li>
                    <li className="list-group-item">Paginas: {paginas}</li>
                </ul>
                <div className="card-body">

                </div>
            </div>



        </>
    )

}
CardComics.PropType = {
    descripcion: PropType.object,
    titulo: PropType.string,
    id: PropType.number,
    Url: PropType.string,


}

export default CardComics;