import React, { useState,useEffect } from 'react';
import {Dropdown, Form, Button} from "semantic-ui-react";

function Home({sendActiveTab}) {
    const [openTabs, setOpenTabs] = useState(null)
    /// add functionality to create a new tab or update a new tab
    // add new tab >> fill out form for tab name 
    // update a tab >> opens a drop down of open existing tabs
    // once opened/submit it takes you to browse beers
    // choose a tab 

    const openTabDisplay = (openTabs ? openTabs.map((tab)=>{
        return {
            key: tab.id,
            text: tab.tabName,
            value: tab.tabName,
        }
    }) : null)

    useEffect(() => {
        fetch('https://sheltered-beach-53138.herokuapp.com/openTabs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }}
        )
        .then(response => response.json())
        .then(tabs => setOpenTabs(tabs))
        .catch((error) => {
        console.error('Error:', error);
        });
    }, [openTabs])

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
            }),
          })
          .then(response => response.json())
          .then(data => 
            sendActiveTab({id: data.id, name: data.tabName})
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
        <div className="homeBlock">
                <h1>Welcome to Beer Buddy!</h1>
                <h3>Your one-stop shop for Beer!</h3>
        <Form onSubmit={(e)=>submitNewTab(e)}>
                <h3>Add A New Tab</h3>
                <input type="text" name="name" placeholder="Tab Name"/>
                <Button type="submit">Open Tab</Button>
        </Form>
        <h3>Update Tab</h3>
        <Dropdown
                placeholder='Select Existing Tab'
                fluid
                selection
                options={openTabDisplay}
                onChange={(e)=>selectOpenTab(e)}
        />
        <div id="gif">
            <img src="https://i.gifer.com/1SVr.gif" alt="beer"/>
        </div>
        </div>
    )
}

export default Home;