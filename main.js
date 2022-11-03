function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
    </li>
  `
}

function createCard(date, day, games) {
  return `
   <div class="card">
                <h2>${date} <span>${day}</span></h2>
                <ul>
                ${games}
                </ul>
            </div>
  `
}

document.querySelector("#app").innerHTML = `
<header>
            <img src="./assets/logo.svg" alt="Logo da NWL">
        </header>
        <main id="cards">
        ${createCard(
          "25/11",
          "friday",
          createGame("brazil", "05:00", "serbia")
        )}            
        ${createCard(
          "29/11",
          "tuesday",
          createGame("brazil", "02:00", "switzerland")
        )}            
        ${createCard(
          "03/12",
          "saturday",
          createGame("brazil", "05:00", "camaron")
        )}            
        </main>
`
