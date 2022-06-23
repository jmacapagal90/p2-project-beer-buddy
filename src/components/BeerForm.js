import React, {useState} from "react";
import { Form, Button } from "semantic-ui-react"

function BeerForm({onHandleNewBeer}){
    const [beerName,setBeerName] = useState("");
    const [beerImage,setBeerImage] = useState("");
    const [beerPrice,setBeerPrice] = useState(0);


    function submitNewBeer(e){
        e.preventDefault();
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
        }

    return (
        <div className="homeHeader">
        <Form onSubmit={(e)=>{submitNewBeer(e)}}>
            <Form.Field>
                <label for="beerform">Beer Name:</label>
                <input placeholder='Beer Name' onChange={(e)=>setBeerName(e.target.value)} value={beerName}/>
            </Form.Field>
            <Form.Field>
                <label for="beerform">Image</label>
                <input placeholder='Image' onChange={(e)=>setBeerImage(e.target.value)} value={beerImage}/>
            </Form.Field>
                <label for="beerform">Price:</label>
                <input placeholder='Price' onChange={(e)=>setBeerPrice(e.target.value)} value={beerPrice}/>            
            <Button type='submit'>Submit</Button>
        </Form>
        </div>
    )
}

export default BeerForm;