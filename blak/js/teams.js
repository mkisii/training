import {moverButton} from "../js/app.js";

const teams = document.querySelector(".company_creative_teams")
console.log(teams.children);
const buttons = document.querySelectorAll(".teams-button button");
 console.log(buttons)

moverButton(buttons,teams)
