import React from 'react'
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <div style={{backgroundColor:"pink", height:"92vh",padding:"20px"}}>
    <Card className='d-flex flex-row ' style={{padding:"10px"}}>
    <Card.Body style={{alignSelf:"center", padding:"55px"}}>
      <Card.Text>
        <h2>About Us :</h2>
      <p>Every good company was founded on an idea — something the current marketplace might not yet offer. And that’s what makes your story truly unique.</p>
      <p>Think about the idea that made all of this happen and use this “aha!” moment as a focus point when telling your company story.</p>
      </Card.Text>
    </Card.Body>
    <Card.Img className='w-50' variant="top" src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?cs=srgb&dl=pexels-fauxels-3184398.jpg&fm=jpg" />
  </Card>
  </div>
  )
}

export default About
