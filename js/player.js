let selectedPlayers = [];
// ======== Function display player list ========================
function display (Players,name){
    const tabel = document.getElementById('display_player_list')
    const tr    = document.createElement('tr')

     for(let i=0;i<Players.length ;i++){
        tabel.appendChild(tr)
        tr.innerHTML= `<td>${i+1} </td>  <td style="padding-left:50px" >${Players[i].name}</td> `
     }
     document.getElementById('display_player').innerHTML = name
} 


// ======== Function for get Player =============================
function getPlayer (element){
    let playerName = element.parentNode.children[0].innerText
    let playerInfo = {name:playerName}

if(selectedPlayers.length<5){
        selectedPlayers.push(playerInfo)
        display(selectedPlayers,playerName)
        element.classList.add("disabled", "btn-secondary");
    }
else{alert("You can't select more than 5 player !!!")}
}


// ======== Function Player Expense =============================
function getPlayerExpense(){
    let  costPerPlayer = parseInt(document.getElementById('getPlayerExpense').value)
    
   if(costPerPlayer>0) {
       let PlayerExpenses  = selectedPlayers.length*costPerPlayer
   
       document.getElementById('displayPlayerExpense').innerHTML = PlayerExpenses
       console.log( typeof costPerPlayer)
       return PlayerExpenses
   }
   else{
       alert("You need to input POSITIVE and NUMBER Type value !!! ")
       
   }}


// Get The Player Expense By eventHandeler 
document.getElementById('Calculate').addEventListener('click', getPlayerExpense) 



// Get The total of team Cost
document.getElementById('Total').addEventListener('click', function () {
    const players = getPlayerExpense()
    const manager = parseInt(document.getElementById('cost_manager').value)
    const coach   = parseInt(document.getElementById('cost_coach').value)
   if(manager>0 && coach>0 ) {
      const total = players + manager + coach
      document.getElementById('display_total').innerHTML = total
   }
   else{
      alert("You need to input POSITIVE and NUMBER Type value !!!")
     
}})
