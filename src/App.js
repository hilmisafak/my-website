import "./App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Button} from "@material-tailwind/react";

function App() {
    return (
        <main className="container">
            <section className="profile">
                <img
                    src={require("./images/IMG_20220816_164712_128.jpg")}
                    alt="My Profil Photo"
                    width="350"
                    height="350"
                />
                <div className="profile-text">
                    <h1>HILMI SAFAK</h1>
                    <h4><span>FULLSTACK DEVELOPER</span></h4>
                    <div className="icons">
                        <a
                            href="https://www.instagram.com/hm.sfkk/"
                            target="_blank"
                            className="i ai"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hilmi-safak/"
                            target="_blank"
                            className="i ai"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <a
                            href="https://x.com/hilmi_safak"
                            target="_blank"
                            className="i ai"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a
                            href="https://github.com/hilmisafak"
                            target="_blank"
                            className="i ai"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UClQQsXPjHynuY4A7X18eNKw"
                            target="_blank"
                            className="i ai"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faYoutube}/>
                        </a>
                    </div>
                    <div className="hire-me">
                        <button onClick={() => (window.location = "mailto:hilmisafak1@gmail.com")}  target="_blank">
                            Contact Me Now !
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
