/*Import des libraries utiliser*/
import {useNavigate, useParams } from "react-router-dom"
import Line from "../components/Line"
import RadarComponent from "../components/Radar"
import RadialBarComponent from "../components/RadialBar"
import Bar from "../components/Bar"

import InfoComponent from "../components/Infos"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import { getUserData } from "../actions/user.action"

function Dashboard() {
    const [PageCharged,setPageCharged] = useState(false)
    let userData = useSelector((state) => state.userReducer);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getUserData(id))
    }, [])
    useEffect(() => {
        console.log(userData)
        if (userData && userData.user_infos && userData.user_infos.user_activity && userData.user_infos.user_performance && userData.user_infos.user_average_sessions) {
            setPageCharged(true)
        } else if (userData.error && userData.error === 500) {
            console.log("error tu coco")
            navigate('/error500')
        }
    }, [userData])
    if (PageCharged) {
        return (
            <div className='dashboard'>
                <div className="dashboard_intro">
                    <h1>Bonjour <span>{userData.user_infos.user_infos.userInfos.firstName + ' ' + userData.user_infos.user_infos.userInfos.lastName}</span></h1>
                    <p>Félicitation! Vous avez explosé vos objectifs hier !</p>
                </div>
                <div className="dashboard_graphs">
                    <div className="dashboard_graph_bar">
                        <p className="dashboard_graph_bar_title">Activité quotidienne</p>
                        <div className="dashboard_graph_bar_legend">
                            <div className="circle_legend_black"></div>
                            <p>Poids (kg)</p>
                            <div className="circle_legend_red"></div>
                            <p>Calories brûlées (kCal)</p>
                        </div>
                        <Bar data={userData.user_infos.user_activity.sessions}></Bar>
                    </div>
                    <div className="dashboard_graph_line">
                        <p className="dashboard_graph_line_title">Durée moyenne des sessions</p>
                        <Line data={userData.user_infos.user_average_sessions}></Line>
                    </div>
                    <div className="dashboard_graph_radar">
                        <RadarComponent data={userData.user_infos.user_performance}></RadarComponent>
                    </div>
                    <div className="dashboard_graph_radial">
                        <p className="dashboard_graph_radial_score_title">Score</p>
                        <RadialBarComponent score={userData.user_infos.user_infos.score}></RadialBarComponent>
                        <p className="dashboard_graph_radial_score_result"><span className="dashboard_graph_radial_score_percentage">{userData.user_infos.user_infos.score*100}%</span><br></br>de votre objectif</p>
                    </div>
                </div>
                <div className="dashboard_infos">
                    <InfoComponent color='255, 0, 0' url='svg_energy' alt='yoga' result={userData.user_infos.user_infos.keyData.calorieCount} type='Calories' unite="kCal"  ></InfoComponent>
                    <InfoComponent color='74, 184, 255' url="svg_chicken" alt='yoga' result={userData.user_infos.user_infos.keyData.proteinCount} type='Proteines' unite="g" ></InfoComponent>
                    <InfoComponent color='253, 204, 12' url="svg_apple" alt='yoga' result={userData.user_infos.user_infos.keyData.carbohydrateCount} type='Glucides' unite="g" ></InfoComponent>
                    <InfoComponent color='253, 81, 129' url="svg_cheeseburger" alt='yoga' result={userData.user_infos.user_infos.keyData.lipidCount} type='Lipides' unite="g"></InfoComponent>
                </div>
            </div>
        )
    } else {
        return (
            <Loading></Loading>
        )
    }
}
export default Dashboard