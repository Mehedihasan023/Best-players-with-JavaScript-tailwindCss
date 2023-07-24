// set initial player numbers to 0
let num =0; 
const players = document.getElementById('players').addEventListener('click', function(event) {
    // get the inner text from h3 
    const playerName = event.target.parentNode.childNodes[3].innerText;
//  check if the button tag is clicked by event handler
    if (event.target.innerText == 'Select') {
        // disable the clicked button
        event.target.setAttribute("disabled","");
        event.target.setAttribute("class", "text-center text-white bg-blue-400 rounded text-3xl mx-auto px-20 py-1 flex justify-center m-2 ");
       
        //  increase the selected player list number
        num++;
        const playerList=parseInt(document.getElementById('selectedNumbers').innerText) ;
        // check if the player numbers is not more than 11
        if(playerList >=11){
            alert('You can not select more than 11 players');
            event.target.setAttribute("class", "text-center text-white bg-blue-600 hover:bg-blue-500 rounded text-3xl mx-auto px-20 py-1 flex justify-center m-2 ");
            return;
        }else{
            document.getElementById('selectedNumbers').innerText=num;
        }
    //     create element to show the players name 
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="flex ml-9 justify-start items-start">
            <p class="text-white mr-4 " >${num}</p>
            <h2 class="text-white  ">${playerName}</h2>
        </div>
        `;
    //    set the created html element 
        const showPlayer = document.getElementById('selected-players');
        showPlayer.appendChild(div);
        
    } else {
        return;
    }
});
// calculate the expenses of players

// calculate total players cost
function total(){
  const playerNumbers =document.getElementById('selectedNumbers').innerText.length;
  if(playerNumbers >0){
    listNumbers =parseFloat(document.getElementById('selectedNumbers').innerText);
    const perPlayer =parseFloat(document.getElementById('perPlayer').value);
    const playerExpenses= document.getElementById('playerExpenses').innerText=listNumbers * perPlayer;
    return playerExpenses;
  }
  else{
    return 0;
  }

    
    
}

const calculate = document.getElementById('calculate').addEventListener('click', function(){
 total();
})
// calculate total expenses
const calculateTotal = document.getElementById('calculateTotal').addEventListener('click',function(){
    total();
    const manager = parseFloat(document.getElementById('manager').value);
    const coach = parseFloat(document.getElementById('coach').value);
    const playerExpense =parseFloat(document.getElementById('playerExpenses').innerText);

   document.getElementById('total').innerText=(manager+coach+playerExpense);
})