import "./style.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>
                        Hi, my name is <em>Vlad</em>
                    </strong>
                    <br />I am a React developer
                </h1>
                <div className="header__text">
                    <p>I have 1 year of experience and <strong>6 projects</strong> in my portfolio. </p>
                </div>
                <a href="https://www.linkedin.com/in/vvitkovskiy/" className="btn" target="_blank" rel="noreferrer">
                    See my LinkedIn profile
                </a>
            </div>
        </header>
    );
}

export default Header;