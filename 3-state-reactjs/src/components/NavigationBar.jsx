import React from "react";

export default function NavigationBar ({navValue}) {
    return (
        <div>
            <ul>
                <li><a href="#" target="_blank">{!navValue ? "Home" : navValue}</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
    )
}