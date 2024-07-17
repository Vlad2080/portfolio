import "./style.css";

import vercel from './../../img/icons/vercel.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="https://vercel.com/vlads-projects-9c04a9e8">
                                <img src={vercel} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://github.com/Vlad2080?tab=repositories">
                                <img src={gitHub} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://www.linkedin.com/in/vvitkovskiy/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedIn} alt="Link" />
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© Vlad Vitkovskiy</p>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default Footer;