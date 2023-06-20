function Project(props) {

    const {name, displayName, setTypewriter} = props;

    const onClick = (e) => {
        e.preventDefault();
        setTypewriter(null);
        window.location.href = `${name}`;
    }

    return (
        <li onClick={onClick}>
            <img src={`/images/${name}.png`} alt={`${name} logo`}/>
            <h3>{displayName}</h3>
        </li>
    );
}

export default Project;