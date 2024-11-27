const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];
  


//№1 & №2
players.forEach(function(element,index,array){
    console.log(element.name);
    console.log(element.points * 1.1);
    
})



//№4
const playerOnline = players.filter(function(element,index,array){
  return element.online === true
})
console.log(playerOnline);



//№5
const playerOfline = players.filter(function(element,index,array){
  return element.online === false
})
console.log(playerOfline);



//№6
const playerHard = players.filter(function(element,index,array){
  return element.timePlayed >= 250
})
console.log(playerHard);



//№7
const findPlayerId = players.find(function(element,index,array){
  return element.id == 'player-2'
})
console.log(findPlayerId);



//№8
const findPlayerName = players.find(function(element,index,array){
  return element.name == 'Kiwi'
})
console.log(findPlayerName)



//№9
const everyPlayerHour = players.every(function(element,index,array){
  return element.timePlayed >= 200
})
console.log(everyPlayerHour);



//№10
const everyPlayerOnline = players.every(function(element,index,array){
  return element.online == true
})
console.log(everyPlayerOnline);