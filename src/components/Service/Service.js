import React, { useState } from 'react'
import { Jumbotron, Button, Card } from 'reactstrap'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';




const Service = props => {

  // const items = [
  //   {
  //     src: props.photo1,
     
  //   },
  //   {
  //     src: props.photo2,
      
  //   },
  //   {
  //     src: props.photo3,
      
  //   }
  // ];

  const items = props.pics.map(photo => ({ src: photo }))

  // console.log(props.pics)

  const text = props.moreDetails

  const [modal, setModal] = useState(false)
  
  const toggle = () => setModal(!modal)


// ++=+++++++++++++++++++++++++++++

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="photo" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });




// ++=+++++++++++++++++++++++++++++







  return (
    <>
      <div>
        <Card className='service  text-center'>

          <div className='description'>
            <div className="cardText">
              <div className="desc">

                <h5>{props.name}</h5>
                <p>{props.description}</p>
              </div>

              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
              </Carousel>


            <Button className="myBtn" onClick={toggle}>More Details</Button>
            </div>
          </div>

         
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}><h1>{props.name}</h1></ModalHeader>
          <ModalBody>
      
            
            <p>{props.moreDetails}</p>
            


          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>
        </Card>
      </div>






    </>
  )
}

export default Service