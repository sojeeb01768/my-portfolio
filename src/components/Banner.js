import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import sojeebImg from "../assets/img/sojeeb.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front-End Web Developer", "ReactJS Developer", "MERN-Stack Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <div className="btn btn-light m-5 px-5 py-3">
                    <a className="text-black text-decoration-none" href="https://drive.google.com/file/d/1eNy_1b5E73BDpEJjkqwKaqw0h8fxOuKx/view?usp=share_link" target="_blank" >My Resume </a>
                  </div>
                  <h1>{`Hi! I'm Al-Kafee`} <span className="txt-rotate" dataPeriod="100" data-rotate='[ "Front-End Web Developer", "ReactJS Developer", "MERN-Stack Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    I build new projects to tickle my brain. My knowledge in this field will help me to solve any problem in this
                    field. Moreover, my devotion to the job will encourage me to carry on any difficult tasks. I have the skills which
                    will aid me to maintain a good relationship with clients and tea.
                  </p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                </div>}
            </TrackVisibility>
          </Col>
          <Col>
            <img src={sojeebImg} alt="" />
          </Col>

        </Row>
      </Container>
    </section>
  )
}
