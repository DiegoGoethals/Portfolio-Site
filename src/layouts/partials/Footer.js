import './Footer.css';

function Footer() {
    return (
        <footer>
            <ul id="contact">
                <li id="email"><a href="mailto:goethalsdiego@gmail.com?SUBJECT=Site">goethalsdiego@gmail.com</a></li>
                <li>
                    <ul className="socials">
                        <li className="social"><a href="https://github.com/DiegoGoethals" target="_blank" rel='noreferrer'><i className="fa-brands fa-github"></i></a></li>
                        <li className="social"><a href="https://www.linkedin.com/in/diego-goethals-9a17aa23a/" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin-in"></i></a></li>
                    </ul>
                </li>
                <li><p>&#169;Copyright 2022, Made by <a href="index.html">Diego Goethals</a></p></li>
            </ul>
        </footer>
    );
}

export default Footer;