import { NavLink } from "react-router-dom"

//Página principal donde se puede navegar por todas los ambientes desarrollados
const PaginaPrincipal = () => {

    window.onscroll = function () { myFunction() };





    function myFunction() {
        var header = document.getElementById("navcontainer");


        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    return (<>
        <div className="row">
            <div className="row">
                <div className="titulo"> ENTRA</div>
            </div>
            <div className="row">
                <div className="tituloabajo"> Environment and Transportation Research Group</div>
            </div>
            <div className="row">
                <div id="navcontainer">
                    <ul>
                        <li><NavLink to="/"><a className="bold" href="">ABOUT</a></NavLink></li>
                        <li><NavLink to="/Research"><a href="">RESEARCH</a></NavLink></li>
                        <li><NavLink to="Team"><a href="">TEAM</a></NavLink></li>
                    </ul>
                </div>
            </div>
            <hr className="horizontal"></hr>
            <div className="row">
                <div className="introduccion">Our team conducts economic research on topics related to the environment and transportation.
                    We perform advanced econometrics analysis and use cloud computing, machine learning, and spatial data analysis to work with large-scale datasets,
                    such as semi-structure smartphone Big Data, satellite data, household surveys, and administrative records.
                </div>
            </div>
            <div className="row segundaParte">
                <div className="row horizontal">
                    <div className="col-1 overview">
                        Overview
                    </div>
                </div>
                <hr className="horizontal"></hr>
                <div className="row horizontal">
                    <div className="col-sm-6 col-12">
                        <img src="/images/foto research.jpg" className="imagenAmb" alt="Foto Research" />
                    </div>
                    <div className="col-12 col-sm-5">
                        <div className="row">
                            <div className="tituloMini">
                                Our Research
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-7 col-8">
                                <div className="txtBtn">
                                    Check projects
                                </div>
                            </div>
                            <div className="col-sm-5 col-4">
                                <NavLink to="/Research"><img src="/images/derecha.png" className="btnNext" alt="Foto Research" /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row horizontal">
                    <div className="col-sm-6 col-12">
                        <div className="row">
                            <div className="tituloMini">
                                Our team
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-7 col-8">
                                <div className="txtBtn">
                                    See our team
                                </div>
                            </div>
                            <div className="col-sm-5 col-4">
                                <NavLink to="/Team">
                                    <img src="./images/derecha.png" className="btnNext" alt="Foto Research" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-12">
                        <img src="./images/Group.jpg" className="imagenAmb" alt="Foto Research" />
                    </div>
                </div>
            </div>

        </div >
    </>
    )
}

export default PaginaPrincipal