// To support: theme="express" scale="medium" color="light"
// import these spectrum web components modules:
import "@spectrum-web-components/theme/express/scale-medium.js";
import "@spectrum-web-components/theme/express/theme-light.js";

// To learn more about using "swc-react" visit:
// https://opensource.adobe.com/spectrum-web-components/using-swc-react/
import { Button } from "@swc-react/button";
import  flyingpig from "../flyingpig.png"
import { Theme } from "@swc-react/theme";
import Logo from "./Logo"
import React, { useEffect, useState } from 'react';
import "./App.css";

const App = ({ addOnUISdk, sandboxProxy }) => {

    const message = "Budget"
    const [data, setData] = useState([]);
    


   async function getTaxes() {
    try {
        const response = await fetch("http://localhost:3010/api/getTax");
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        setData(data);
    } catch (error) {
        // Handle errors appropriately
        console.error("Error fetching taxes:", error);
    }
}

async function getSavings() {
    try {
        const response = await fetch("http://localhost:3010/api/getSaving");
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        setData(data);
    } catch (error) {
        // Handle errors appropriately
        console.error("Error fetching taxes:", error);
    }
}

async function getInvest() {
    try {
        const response = await fetch("http://localhost:3010/api/getInvestment");
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        setData(data);
    } catch (error) {
        // Handle errors appropriately
        console.error("Error fetching taxes:", error);
    }
}

    function handleClick() {
        sandboxProxy.createRectangle();
    }

    return (
        // Please note that the below "<Theme>" component does not react to theme changes in Express.
        // You may use "addOnUISdk.app.ui.theme" to get the current theme and react accordingly.
        <Theme theme="express" scale="medium" color="light">
            <div>
                <div>
                    <img className="image" src={flyingpig} />
                    <label className="body-title">
                        OINK
                    </label>
                </div>
                <div className="button-container">
                    <button className="button" onClick={getTaxes}>
                        TAXES
                    </button>
                    <div class="divider"/>
                    <button className="button" onClick={getSavings}>
                        SAVING
                    </button>
                    <div class="divider"/>
                    <button  className="button" onClick={getInvest}>
                        INVESTING
                    </button>
                </div>
            <div className="results-container">
                {data.map((x) => (
                <Logo className='result' key={x.id} data={x} />
                ))}
        </div>
            </div>
        </Theme>
    );
};

export default App;
