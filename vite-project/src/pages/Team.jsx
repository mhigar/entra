import { NavLink } from "react-router-dom"

const Team = () => {

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
                        <li><NavLink to="/"><a href="">ABOUT</a></NavLink></li>
                        <li><NavLink to="/Research"><a href="">RESEARCH</a></NavLink></li>
                        <li><NavLink to="/Team"><a className="bold">TEAM</a></NavLink></li>
                    </ul>
                </div>
            </div>
            <hr className="horizontal"></hr>
            <div className="row">
                <div className="titulo2">OUR TEAM
                </div>
            </div>
            <div className="row segundaParte">
                <div className="espacioMini"></div>
                <hr className="horizontal"></hr>
                <div className="row horizontal">
                    <div className="row">
                        <p className="titulosTeam">DIRECTOR</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-auto">
                            {/* Foto de perfil de Minoru */}
                            <img src="/images/profile.png" className="imagenMinoru" alt="Foto Perfil Minoru" />
                        </div>
                        <div className="col-md-9 perfil">
                            <div className="row textoTeamBold">
                                Minoru Higa
                            </div>
                            <div className="row textoTeam">
                                Assistant Professor
                            </div>
                            <div className="row textoTeam">
                                School of Management
                            </div>
                            <div className="row textoTeam">
                                Universidad de los Andes
                            </div>
                            <div className="row textoTeam">
                                d.higa@uniandes.edu.co
                            </div>
                            <div className="row botonesMinoru">
                                <div className="col-12">
                                    <div className="minorucontainer">
                                        <ul>
                                            <li><a className="bold" href="https://www.minoruhiga.com/publications/" target="_blank">Publications</a></li>
                                            <li><a className="bold" href="https://www.minoruhiga.com/teaching/" target="_blank">Teaching</a></   li>
                                            <li><a className="bold" href="/docs/CV_MinoruHiga.pdf" download="CV_MinoruHiga.pdf">Download CV</a></li>
                                            <li><a className="bold" href="https://www.minoruhiga.com" target="_blank" >Minoru's Website</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="horizontal"></hr>
                <div className="row horizontal">
                    <div className="row">
                        <p className="titulosTeam">CURRENT MEMBERS</p>
                    </div>
                    <div className="row justify-content-md-center">
                        {/* Primer integrante de Current members*/}
                        <div className="col-md-auto perfiles">
                            {/* Imagen de primer integrante de current members*/}
                            <img src="/images/Alejandro_crop.jpg" className="imagenMembers" alt="Foto Alejandro Alcaraz" />
                            {/* Nombre de primer integrante de current members*/}
                            <div className="row textoMembersBold"> Alejandro Alcaraz</div>
                            {/* Correo de segundo integrante de current members*/}
                            <div className="row textoMembers"> a.alcaraz@uniandes.edu.co</div>
                            {/* Información académica de primer integrante de current members*/}
                            <div className="row textoMembers"> Bachelor’s in Management and Systems Engineering</div>
                            {/* Año de grado de primer integrante de current members*/}
                            <div className="row textoMembers"> Expected 2024</div>
                            {/* Botón con vínculo al linkedin de primer integrante de current members*/}
                            <div className="row textoMembers"><a href="https://www.linkedin.com/in/alejandro-alcaraz-432612246" target="_blank">
                                <img src="/images/linkedin.png" className="imagenLinkedin" alt="Linkedin Alejandro Alcaraz" /></a>
                            </div>
                        </div>
                        {/* Segundo integrante de Current members*/}
                        <div className="col-md-auto perfiles">
                            <img src="/images/Santiago_crop.jpg" className="imagenMembers" alt="Foto Santiago Aristizabal" />
                            <div className="row textoMembersBold"> Santiago Aristizabal</div>
                            <div className="row textoMembers"> s.aristizabala@uniandes.edu.co</div>
                            <div className="row textoMembers"> Bachelor’s in Management</div>
                            <div className="row textoMembers"> Expected 2024</div>
                            <div className="row textoMembers"><a href="https://www.linkedin.com/in/santiago-aristizabal-595655274" target="_blank">
                                <img src="/images/linkedin.png" className="imagenLinkedin" alt="Linkedin Santiago Aristizabal" /></a>
                            </div>
                        </div>
                        {/* Tercer integrante de Current members*/}
                        <div className="col-md-auto perfiles">
                            <img src="/images/Juan Felipe Agudelo.jpg" className="imagenMembers" alt="Foto Juan Felipe Agudelo" />
                            <div className="row textoMembersBold"> Juan Agudelo</div>
                            <div className="row textoMembers"> j.agudelo@uniandes.edu.co</div>
                            <div className="row textoMembers"> Bachelor’s in Economics, Master’s in Economics</div>
                            <div className="row textoMembers"> Expected 2025</div>
                            <div className="row textoMembers"><a href="https://www.linkedin.com/in/juan-felipe-agudelo-rios-b38a0422a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                                <img src="/images/linkedin.png" className="imagenLinkedin" alt="Linkedin Juan Felipe Agudelo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="espacioMini"></div>
                <hr className="horizontal"></hr>
                <div className="row horizontal">
                    <div className="row">
                        <p className="titulosTeam">ALUMNI</p>
                    </div>
                    <div className="row justify-content-md-center">
                        {/* Agregar alumnos antiguos acá*/}
                       {/* <div className="col-md-auto perfiles">
                            <img src="/images/Santiago_crop.jpg" className="imagenMembers" alt="Foto Santiago Aristizabal" />
                            <div className="row textoMembersBold"> Santiago Aristizabal</div>
                            <div className="row textoMembers"> s.aristizabala@uniandes.edu.co</div>
                            <div className="row textoMembers"> Bachelor’s in Management</div>
                            <div className="row textoMembers"> Graduated 2024</div>
                            <div className="row textoMembers"><a href="https://www.linkedin.com/in/santiago-aristizabal-595655274" target="_blank">
                                <img src="/images/linkedin.png" className="imagenLinkedin" alt="Linkedin Santiago Aristizabal" /></a>
                            </div>
    </div> */}
                    </div>
                </div>
            </div>

        </div >
    </>
    )
}




export default Team;