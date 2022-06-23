import React, {useState} from "react";
import { Form, Button,Input,Label,Container } from "semantic-ui-react"

function BeerForm({onHandleNewBeer}){
    const [beerName,setBeerName] = useState("");
    const [beerImage,setBeerImage] = useState("");
    const [beerPrice,setBeerPrice] = useState(0);


    function submitNewBeer(e){
        e.preventDefault();
        alert("Thanks For Submitting a Beer!")
        const newBeerObj = {
            name: beerName,
            image: beerImage,
            price: beerPrice,
            rating: {
                average: 0,
                reviews: 0,
              }
        }

        // post to tabDB
        fetch('https://sheltered-beach-53138.herokuapp.com/ale', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBeerObj),
          })
          .then(response => response.json())
          .then(data => 
            console.log(data)
          )
          .catch((error) => {
            console.error('Error:', error);
          });
        setBeerName("")
        setBeerImage("")
        setBeerPrice(0)
        }

    return (
        <Container textAlign="center">
        <Form onSubmit={(e)=>{submitNewBeer(e)}} >
            <Form.Field>
                <Label for="beerform">Beer Name:</Label>
                <Input placeholder='Beer Name' onChange={(e)=>setBeerName(e.target.value)} value={beerName}/>
            </Form.Field>
            <Form.Field>
                <Label for="beerform">Image: </Label>
                <Input placeholder='Image' onChange={(e)=>setBeerImage(e.target.value)} value={beerImage}/>
            </Form.Field>
            <Form.Field>
                <Label for="beerform">Price:</Label>
                <Input placeholder='Price' onChange={(e)=>setBeerPrice(e.target.value)} value={beerPrice}/>            
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
        </Container>
    )
}

export default BeerForm;