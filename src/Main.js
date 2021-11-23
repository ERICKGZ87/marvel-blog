import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import InjectContext from './store/appContext';
import Home from './vistas/Home';
import Personajes from './vistas/Personajes';
import Comics from './vistas/Comics';
import Footer from './Componentes/Footer';




const Main = () => {
    return (
        <div className="container-fluid">


            <div className="row">

                <div className="col-sm-1"></div>
                <div className="col-sm-10">

                    <BrowserRouter>

                        <Navbar />


                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/Personajes" component={Personajes} />
                            <Route exact path="/Personajes/:Heroe_id/Comics" component={Comics} />

                        </Switch>




                    </BrowserRouter>

                </div>


                <div className="col-sm-1"></div>



            </div>

            <div className="row">
                <Footer />
            </div>

        </div>



    )
}

export default InjectContext(Main);