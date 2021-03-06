import '../style/MainCard.css';

const MainCard = ({data}) => {
    const vote = `./images/icon-${data.todayStatus[1]}.svg`
    let helperClasses = "Maincard "

    if (data.todayStatus[1] === "down") {
        helperClasses += "down"
    }

    const style = {
        borderColor: [data.platform === "facebook" ? "#168ff8" : data.platform === "twitter" ? "#1da1f3" : data.platform === "instagram" ? "#f19878" : "#c30028"]
    }

    return ( 
        <div className={helperClasses} style={style}>
            <div className="cardHeader">
                <img src={data.logo} alt={`${data.platform} logo`} />
                <p>{data.username}</p>
            </div>
            <div className="cardMain">
                <p className="population">{data.population[0]}</p>
                <p className="title">{data.population[1]}</p>
            </div>
            <div className="cardFooter">
                <img src={vote} alt="" />
                <p className='footerNum'>{data.todayStatus[0]}</p>
                <p>Today</p>
            </div>

        </div>
     );
}
 
export default MainCard;