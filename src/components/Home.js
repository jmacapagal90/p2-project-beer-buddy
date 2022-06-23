import React from 'react';
import {Container, Input, Dropdown, Header, Form, Button, Image} from "semantic-ui-react";

function Home({sendActiveTab,openTabs}) {

    const openTabDisplay = (openTabs ? openTabs.map((tab)=>{
        return {
            key: tab.id,
            text: tab.tabName,
            value: tab.tabName,
        }
    }) : null)

    function submitNewTab(e){
        e.preventDefault();
        const tabName = e.target.name.value

        // post to tabDB
        fetch('https://sheltered-beach-53138.herokuapp.com/openTabs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tabName: tabName,
                beersOrdered:[],
            }),
          })
          .then(response => response.json())
          .then(data => 
            sendActiveTab(data)
          )
          .catch((error) => {
            console.error('Error:', error);
          });
        }

    function selectOpenTab(e){
        const tabFilter = openTabs.filter((tab)=> tab.tabName === e.target.textContent)[0]
        sendActiveTab({id: tabFilter.id, name: tabFilter.tabName, beersOrdered: tabFilter.beersOrdered})
    }

    return (
        <Container textAlign='center'>
                <Header as='h1'>Welcome to Beer Buddy!</Header>
                <Header subheader>Your one-stop shop for Beer!</Header>
        <Form onSubmit={(e)=>submitNewTab(e)}>
                <Header as='h4'>Add A New Tab</Header>
                <Input type="text" name="name" placeholder="Tab Name"/>
                <Button type="submit">Open Tab</Button>
        </Form>
        <Header as='h4'>Update Tab</Header>
        <Dropdown 
                placeholder='Select Existing Tab'
                selection
                options={openTabDisplay}
                onChange={(e)=>selectOpenTab(e)}
        />
        <Container >
            <Image id="mainImage" centered circular inline src="https://i.gifer.com/1SVr.gif" alt="beer"/>
        </Container>
        </Container>
    )
}

export default Home;