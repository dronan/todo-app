import React from "react";
import PageHeader from "../template/pageHeader";

export default props => (
    <div>
        <PageHeader name="About" small="About this system"></PageHeader>
        <h2>Porpouse</h2>
        <p>It's a simple task manager.</p>
        <p>It was developed with React with Redux making communications between components on a easy way.</p>
        <h2>Shortcuts</h2>
        <ul>
            <li>
                <strong>Enter</strong> - Add a new task
            </li>
            <li>
                <strong>Shift + Enter</strong> - Search a task
            </li>
            <li>
                <strong>Esc</strong> - Clear the search
            </li>
        </ul>
        <h2>Tech Stack</h2>
        <h4>Front End</h4>
        <ul>
            <li>React</li>
            <li>Redux
                <ul>
                    <li>react-redux</li>
                    <li>redux-multi</li>
                    <li>redux-promise</li>
                    <li>redux-thunk</li>
                </ul>
            </li>
            <li>Webpack</li>
            <li>Bootstrap</li>
            <li>Font Awesome</li>
        </ul>
        <h4>Back End</h4>
        <ul>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>PM2</li>
            <li>Node Restful</li>
            <li>Body Parser</li>
            <li>Cors</li>
        </ul>
    </div>
);
