const Section = (props) => {
    console.log(props);
    return (
        <div className="section">
            <div className="left-block">
                <div className="time"> {props.time}</div>
                <img src={props.image} alt="" />
            </div>
            <div className="right-block">
                <p className="title">{props.title}</p>
                <p className="type">{props.type}</p>
                <p className="info">
                    <span className="duration">{props.duration}</span>

                    {props.direct && <span id="direct">• Direct</span>}
                    {props.isUnseen && <span id="inedit">• Inédit </span>}
                </p>
            </div>
        </div>
    );
};

export default Section;
