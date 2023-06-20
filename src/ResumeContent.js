function ResumeContent(props) {

    const {years, title, text, learned} = props;

    return (
        <li>
            <div className="resume-content">
                <h2>{years}</h2>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul className="learned">
                    {learned.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
            </div>
        </li>
    )
}

export default ResumeContent;