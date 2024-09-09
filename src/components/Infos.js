function InfoComponent(props) {
    return (
        <div className='home_infos_components'>
            <div className="home_infos_components_icon" style={{"--info-color": props.color}}>
                <img src={require(`../assets/svg/${props.url}.svg`)} alt={props.alt}></img>
            </div>
            <div className="home_infos_components_text">
                <p className="home_infos_components_text_result">{props.result + props.unite}</p>
                <p className="home_infos_components_text_type">{ props.type}</p>
            </div>
        </div>
    )
}
export default InfoComponent