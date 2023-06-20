import './Header.css';

function Header() {
    return (
        <header>
            <div>
                <img src="images/Pic_Of_me.jpg" alt="My face"/>
                <h2>Diego Goethals</h2>
            </div>
            <nav>
                <a className="navbutton" type='button' href="/#home">Home</a>
                <a className="navbutton" type='button' href="/#about">About me</a>
                <a className="navbutton" type='button' href="/#resume">Resume</a>
                <a className="navbutton" type='button' href="/#projects">Projects</a>
            </nav>
        </header>
    )
}

export default Header;