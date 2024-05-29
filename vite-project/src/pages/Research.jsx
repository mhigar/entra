import { NavLink } from "react-router-dom"

const Research = () => {


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
                        <li><NavLink to="/Research"><a className="bold">RESEARCH</a></NavLink></li>
                        <li><NavLink to="/Team"><a href="">TEAM</a></NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="row segundaParte">
                <div className="row horizontal">
                    <div className="col-1 overview">
                        Featured
                    </div>
                </div>
                <hr className="horizontal"></hr>
                <div className="row horizontal">
                    {/* Inicio del primer Featured paper*/}
                    <div className="col-md-6 col-12">
                        <div className="card" style={{ width: 484 + 'px' }}>
                            {/* Imagen de primer Featured paper*/}
                            <img className="card-img-top imagenCarros" src="/images/muchoscarros.png" alt="Card image cap" />
                            <div className="card-body">
                                {/* Título del primer Featured paper*/}
                                <h5 className="card-title cardTitulo">Traffic Congestion and Labor Supply: Evidence from Smartphone data in Mexico</h5>
                                {/* Abstract del primer Featured paper*/}
                                <p className="card-text cardCuerpo">Does traffic congestion affect time allocation? I use highly granular smartphone data from Mexico City
                                    to study empirically how traffic congestion affects work- time allocation. I find that traffic increases hours worked. The effect is
                                    driven by workers leaving work later, not by changes in arrival time. There is modest evidence that labor income does not increase although total hours do.
                                    These results highlight an avoidance mechanism consistent with bottleneck models that has been overlooked when estimating the costs of congestion.</p>
                            </div>
                        </div>
                    </div>
                    {/* Final del primer Featured paper*/}
                    {/* Inicio de segundo Featured paper*/}
                    <div className="col-md-6 col-12">
                        <div className="card" style={{ width: 484 + 'px' }}>
                            <img className="card-img-top imagenCarros" src="/images/Amazon.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title cardTitulo">Nobody’s Watching: COVID-19, Monitoring, and the Amazon Rainforest</h5>
                                <p className="card-text cardCuerpo">How do pandemics may affect the Amazon rainforest? Using an event study design and a difference-in-differences approach,
                                    we find that COVID-19 increased deforestation by 35% across the Peruvian Amazon during the first pandemic year. This increased CO2 emissions by over 17 million tons,
                                    representing a social cost equivalent to 3 times the national budget for forest management. The main mechanism behind this was reduced monitoring investment and supervision,
                                    coupled with a rise in illicit activities tied to coca production and mining. These findings underscore the crucial role of monitoring and enforcement in averting forest loss
                                    in countries with weak forest governance.</p>
                            </div>
                        </div>
                    </div>
                    {/* Final de segundo Featured paper*/}
                </div>
                <div className="row horizontal">
                    <div className="col-1 overview">
                        In progress
                    </div>
                </div>
                <hr className="horizontal"></hr>
                <div className="row horizontal">
                    {/* Lista de papers en progreso */}
                    <ul className="listaResearch">
                        {/* Primer paper en progreso */}
                        <li className="espacioLista">“Migration and Environmental Quality: Evidence from Facebook data in Colombia”, with Pablo Ordonez and Julieth Santamaria.</li>
                        {/* Segundo paper en progreso */}
                        <li className="espacioLista"> “Who work outdoors? Implication for Climate Change and Pandemics using Machine learning and text-as-data”, with Jose Incio and Carlos Ospino.</li>
                    </ul>
                    <div className="espacioMini"></div>
                </div>
                <div className="row horizontal">
                    <div className="col-1 overview">
                        Working papers
                    </div>
                </div>
                <hr className="horizontal"></hr>
                <div className="row horizontal">
                    {/* Lista de working papers*/}
                    <ul className="listaResearch">
                        {/* Primer working paper */}
                        <li className="espacioLista">“Traffic Congestion and Labor Supply: Evidence from Smartphone data in Mexico”</li>
                        {/* Segundo working paper */}
                        <li className="espacioLista">“Nobody’s Watching: COVID-19, Monitoring, and the Amazon Rainforest”, with Jerico Fiestas and Javier Montoya (Submitted).</li>
                        {/* Tercer working paper */}
                        <li className="espacioLista">“Is it Too Hot to Work? Evidence from Peru” (Submitted)</li>
                    </ul>
                    <div className="espacioMini"></div>
                </div>
                <div className="row horizontal">
                    <div className="col-1 overview">
                        Publications
                    </div>
                </div>
                <hr className="horizontal"></hr>
                <div className="row horizontal">
                    {/* Lista de publicaciones*/}
                    <ul className="listaResearch">
                        {/* Primer publicación*/}
                        <li className="espacioLista">“The Persistent Effects of COVID-19 on Labor Outcomes: Evidence from Peru”, Applied Economics Letters 30:8, 1065-1076, 2023 (with Fernando Aragon and Carlos Ospino)
                            <a href="https://www.tandfonline.com/eprint/ZEJY7UNFNQAUNRV9ABH9/full?target=10.1080/13504851.2022.2036319" target="_blank"> paper </a>
                            - <a href="https://ideas.repec.org/p/sfu/sfudps/dp21-10.html" target="_blank">working paper</a></li>
                    </ul>
                    <div className="espacioMini"></div>
                </div>
            </div>

        </div >
    </>
    )
}




export default Research;