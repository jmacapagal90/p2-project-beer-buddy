import React, { useState } from 'react';
import {Dropdown, Tab} from "semantic-ui-react";

function Home() {
    const [tabName, setTabName] = useState("")
    const [openTabs, setOpenTabs] = useState([])
    /// add functionality to create a new tab or update a new tab
    // add new tab >> fill out form for tab name 
    // update a tab >> opens a drop down of open existing tabs
    // once opened/submit it takes you to browse beers
    // choose a tab 
    const exampleTabs = [
        {
          key: 'Jenny Hess',
          text: 'Jenny Hess',
          value: 'Jenny Hess',
        },
        {
          key: 'Elliot Fu',
          text: 'Elliot Fu',
          value: 'Elliot Fu',
        },]



    function submitNewTab(e){
        e.preventDefault();
        console(e.target.name.value)
        //setTabName(e.target.name.value)
        // post to tabDB
        // fetch('https://tabDB.com/tabs/open', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         tabName: tabName,
        //     }),
        //   })
        //   .then(response => response.json())
        //   .then(data => {
        //     console.log('Success:', data);
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
        }

    function selectOpenTab(e){
        console.log(e.target.textContent)
        //setOpenTabs(exampleTabs)
    }

    return (
        <div className="homeBlock">
                <h1>Welcome to Beer Buddy!</h1>
                <h3>Your one-stop shop for Beer!</h3>
            <h3>Got a Tab?</h3>
        <h3>Create Tab</h3>
            <form onSubmit={(e)=>submitNewTab(e)}>
                <label for="tabname">Tab name:</label>
                <input type="text" name="name"/>
                <input type="submit" value="Submit"/>
                {/* form will create POST for new Tab to Tab DB and pass key */}
            </form>
        <h3>Update Tab</h3>
        <Dropdown
                placeholder='Select Friend'
                fluid
                selection
                options={exampleTabs}
                onChange={(e)=>selectOpenTab(e)}
            /> 
            {/* will need an onchange fx to update state variable with tabID from TabDB and passed to checkout */}
        <div id="gif">
            <img src="https://i.gifer.com/1SVr.gif" alt="beer"/>
        </div>
        </div>
    )
}

export default Home;