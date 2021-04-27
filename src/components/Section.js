const Section = (props) => {
    console.log(props);
    return (
        <div className="section">
            <div> {props.time}</div>
            <img src={props.image} alt="" />
            <div>
                <p>{props.title}</p>
                <p>{props.type}</p>
                <p>
                    <span>{props.duration}</span>

                    {props.direct && <span>• Direct</span>}
                    {props.isUnseen && <span>• Inédit </span>}
                </p>
            </div>
        </div>
    );
};

export default Section;
