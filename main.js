function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
    </li>
  `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
   <div class="card" style="animation-delay: ${delay}s">
                <h2>${date} <span>${day}</span></h2>
                <ul>
                ${games}
                </ul>
            </div>
  `
}

document.querySelector("#cards").innerHTML =         
        createCard(
          "25/11",
          "friday",
          createGame("brazil", "05:00", "serbia")
        )+            
        createCard(
          "29/11",
          "tuesday",
          createGame("brazil", "02:00", "switzerland")
        )+            
        createCard(
          "03/12",
          "saturday",
          createGame("brazil", "05:00", "camaron") +
            createGame("serbia", "05:00", "switzerland")
        )            
        
