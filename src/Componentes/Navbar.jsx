
import { Link } from 'react-router-dom'
const Navbar = () => {

    return (
        <div className="container">

            <div className="row">
                <div className="col-md-4">

                </div>


                <div className="col-md-4">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light  " id="nav">

                        <div className="container-fluid nav justify-content-center">

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" aria-current="page" to="/">
                                            <img src="https://e7.pngegg.com/pngimages/584/842/png-clipart-iron-man-computer-icons-edwin-jarvis-hero-marvel-avengers-assemble-orange-thumbnail.png" alt="..." className="logohome" />
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="Personajes">
                                            <img src="https://es.seaicons.com/wp-content/uploads/2016/03/Marvel-Book-icon.png" alt="..." className="logohome" />
                                            Personajes
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="Comics">

                                            Comics
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="Contact">

                                            Contact
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="About">

                                            About
                                        </Link>
                                    </li>

                        


                                </ul>

                            </div>
                        </div>
                    </nav>

                </div>
                <div className="col-md-4">

                </div>

            </div>

        </div>







    )


}

export default Navbar