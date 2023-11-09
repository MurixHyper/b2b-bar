import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from "./Components/App/App";

const ap=document.getElementById("app")
const app = ReactDOMClient.createRoot(ap)

app.render(<App/>)