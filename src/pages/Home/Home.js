import React from 'react'
import '../../index.css'
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap'
import bandPhoto from "../../photos/bandPhoto-min.jpg"
import MyForm from '../../components/MyForm'




const Home = () => {
  return (
    <>
      <section>

        <Container>
          <a name='home'></a>
          <div className="text-center asylus">
            <h1>ASYLUS</h1>

            <img className="bandPhoto" src={bandPhoto} alt="bandPhoto" />


            <Row>
              <Col lg='6'>
                <a href="https://open.spotify.com/artist/6ciIvNLUZ4wwhxxZJdBmlS?si=Wa1VrD9QS62oKcFZThS32Q"><Button className="button1">STREAM ON SPOTIFY</Button></a>
              </Col>

              <Col lg='6'>
                <a href="https://music.apple.com/us/artist/asylus/176094751"><Button className="button1">BUY ON ITUNES</Button></a>
              </Col>

            </Row>


          </div>

          <a name='band'></a>
          <div className="bio">
            <h1 className='text-center'>WE ARE ASYLUS</h1>

            <p className='text-center'>Hailing from Orange County California, Asylus formed in the summer of 2013.</p>

            <p>
              Asylus consists of Vocalists Nazaret Muñoz and Davon Harper, guitarists Chris Namoc and Erick Pastrana, and drummer Mel Torres. They have performed at many venues across Southern California like Chain Reaction, The House of Blues, The Observatory, and The Glass House.
          <br />
          <br />
            The band released their debut EP, "Dear Old Friend" in 2015 and have played with bands such as The Color Morale, The Word Alive, Slaves, Our Last Night, Like Moth To Flames, I See Stars, The Acacia Strain, Palisades, Sworn In, Upon This Dawning, Kublai Klahn, Vanna, Myka Relocate, Oceans Ate Alaska, Alive Like Me, Heartist, Silent Planet, and Secrets.
          <br />
          <br />
            Asylus has entered 2019 with no intention of slowing down, will be releasing 2 new singles this year and along music videos material blending metalcore, future bass, dubstep, and trap. Asylus has reinvented its image and sound and is ready to hit the west coast.
          </p>
          </div>







          <a name='videos'></a>
          <div className="videos">
            <Jumbotron id="videos">


              <h1 className="mvs text-center">MUSIC VIDEOS</h1>

              <Row>
                <Col lg='6'>
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/szDd1Vgb7B0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col lg='6'>
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/zhn9xjcYxOQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>

              </Row>
              <Row>
                <Col lg='4'>
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/7Bzk45BniGQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col lg='4'>
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/dWwHhvUYrqw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col lg='4'>
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/m2Yq5dn1Psk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>

              </Row>
            </Jumbotron>

          </div>


          <a name='contact'></a>
          <div className='contact'>
            <h1 className="text-center">Contact</h1>

            <MyForm />
          </div>


          <div className="socials text-center">

            <a target="_blank" href="https://www.facebook.com/AsylusMusic/">
            <img className="icons" src="https://image.flaticon.com/icons/svg/56/56582.svg" alt="facebook"/>
            </a>
            {"  "}

            <a target="_blank" href="http://instagram.com/asylusmusic">
            <img className="icons" src="https://cdn2.iconfinder.com/data/icons/social-icons-circular-black/512/instagram-512.png" alt="instagram"/>
            </a>
            {"  "}

            <a target="_blank" href="https://twitter.com/asylusmusic/">
            <img className="icons" src="https://image.flaticon.com/icons/png/512/23/23681.png" alt="twitter"/>
            </a>
            {"  "}

            <a target="_blank" href="https://www.youtube.com/channel/UCrG0lNbd0sBZgrIBRR9WJAg">
            <img className="icons" src="https://image.flaticon.com/icons/png/512/8/8782.png" alt="youtube"/>
            </a>
          </div>




        </Container>
      </section>
    </>
  )
}

export default Home
