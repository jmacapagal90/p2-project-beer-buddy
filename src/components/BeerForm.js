import React, {useState} from "react";
import { Form, Button } from "semantic-ui-react"

function BeerForm(){
    return (
        <div className="homeHeader">
        <Form>
        <Form.Field>
            <label for="beerform">Beer Name:</label>
            <input placeholder='Beer Name' />
        </Form.Field>
        <Form.Field>
            <label for="beerform">Image</label>
            <input placeholder='Image' />
        </Form.Field>
            <label for="beerform">Price:</label>
            <input placeholder='Price' />            
        <Form.Field>
        </Form.Field>
        <Button type='submit'>Submit</Button>
        </Form>
        </div>
    )
}

export default BeerForm;