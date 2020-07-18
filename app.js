const gameObject = {
  "home": {
    "teamName": "Brooklyn Nets", 
    "colors": ["Black", "White"], 
    "players": {
      "Alan Anderson": {
        "Number": 0, 
        "Shoe": 16, 
        "Points": 22, 
        "Rebounds": 12, 
        "Assists": 12, 
        "Steals": 3, 
        "Blocks": 1, 
        "Slam Dunks": 1
      }, 
      "Reggie Evans": {
        "Number": 30, 
        "Shoe": 14, 
        "Points": 12, 
        "Rebounds": 12, 
        "Assists": 12, 
        "Steals": 12, 
        "Blocks": 12, 
        "Slam Dunks": 7
      }, 
      "Brook Lopez": {
        "Number": 11, 
        "Shoe": 17, 
        "Points": 17, 
        "Rebounds": 19, 
        "Assists": 10, 
        "Steals": 3, 
        "Blocks": 1, 
        "Slam Dunks": 15
      }, 
      "Mason Plumlee": {
        "Number": 1, 
        "Shoe": 19, 
        "Points": 26, 
        "Rebounds": 12, 
        "Assists": 6, 
        "Steals": 3, 
        "Blocks": 8, 
        "Slam Dunks": 5
      }, 
      "Jason Terry": {
        "Number": 31, 
        "Shoe": 15, 
        "Points": 19, 
        "Rebounds": 2, 
        "Assists": 2, 
        "Steals": 4, 
        "Blocks": 11, 
        "Slam Dunks": 1
      } 
    }
  }, 
  "away": {
    "teamName": "Charlotte Hornets", 
    "colors": ["Turquoise", "Purple"], 
    "players": {
      "Jeff Adrien": {
        "Number": 4, 
        "Shoe": 18, 
        "Points": 10, 
        "Rebounds": 1, 
        "Assists": 1, 
        "Steals": 2, 
        "Blocks": 7, 
        "Slam Dunks": 2
      }, 
      "Bismak Biyombo": {
        "Number": 0, 
        "Shoe": 16, 
        "Points": 12, 
        "Rebounds": 4, 
        "Assists": 7, 
        "Steals": 7, 
        "Blocks": 15, 
        "Slam Dunks": 10
      }, 
      "DeSagna Diop": {
        "Number": 2, 
        "Shoe": 14, 
        "Points": 24, 
        "Rebounds": 12, 
        "Assists": 12, 
        "Steals": 4, 
        "Blocks": 5, 
        "Slam Dunks": 5
      }, 
      "Ben Gordon": {
        "Number": 8, 
        "Shoe": 15, 
        "Points": 33, 
        "Rebounds": 3, 
        "Assists": 2, 
        "Steals": 1, 
        "Blocks": 1, 
        "Slam Dunks": 0
      }, 
      "Brendan Haywood": {
        "Number": 33, 
        "Shoe": 15, 
        "Points": 6, 
        "Rebounds": 12, 
        "Assists": 12, 
        "Steals": 22, 
        "Blocks": 5, 
        "Slam Dunks": 12
      } 
    }
  }
}

function homeTeamPlayers() {
  return gameObject["home"]["players"];
}

function awauTeamPlayers() {
  return gameObject["away"]["players"];
}

function players() {
  const home = gameObject["home"]["players"];
  const away = gameObject["away"]["players"];

  const allPlayers = Object.assign(home, away); 
  return allPlayers; 
}

function numPointsScored(playerName) {
  return players()[playerName]["Points"];
}

function shoeSize(playerName) {
  return players()[playerName]["Shoe"]; 
}

function teamColors(teamName) {
  if (teamName === "Brooklyn Nets") {
    return gameObject["home"]["colors"]; 
  } else {
    return gameObject["away"]["colors"]; 
  }
}

function teamNames() {
  const home = gameObject["home"]["teamName"].split(); 
  const away = gameObject["away"]["teamName"].split(); 

  const bothNames = home.concat(away); 
  return bothNames; 
}

function playerNumbers(teamName) {
  const home = []
    for (let player in gameObject["home"]["players"]) {
      home.push(gameObject["home"]["players"][player]["Number"]);
    }
  
  const away = []
    for (let player in gameObject["away"]["players"]) {
      away.push(gameObject["away"]["players"][player]["Number"]);
    }
  
  if (teamName === "Brooklyn Nets") {
    return home; 
  } else {
    return away; 
  }
}

function playerStats(playerName) {
  return players()[playerName]; 
}

function bigShoeRebounds() {
  
}

console.log(playerStats("Ben Gordon")); 

