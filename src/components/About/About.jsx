import "./About.css";

function About() {
    return (
        <section id="about" className="about">

            <div className="about-title">
                <p>Get To Know</p>
                <h2>About Me</h2>
            </div>

            <div className="about-content">

                <div className="about-left">

                    <div className="about-card">

                        <h3>Who am I?</h3>

                        <p>
                            I'm Sathiya Narayanan, an Engineering student passionate
                            about Game Development, UI/UX Design, and AR/VR
                            technologies. I enjoy solving real-world problems by
                            creating modern, scalable, and user-friendly applications.
                        </p>

                        <p>
                            My goal is to become a Game Developer while
                            continuously exploring immersive technologies and
                            innovative user experiences.
                        </p>

                    </div>

                </div>

                <div className="about-right">

                    <div className="info-box">
                        <h4>Education</h4>
                        <p>B.E Computer Science</p>
                    </div>

                    <div className="info-box">
                        <h4>Experience</h4>
                        <p>AR/VR Intern</p>
                    </div>

                    <div className="info-box">
                        <h4>Projects</h4>
                        <p>2 Completed</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;