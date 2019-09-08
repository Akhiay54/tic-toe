var restart = document.querySelector("button");


var square = document.querySelectorAll('td');


function restartgame()
 {  for(var i=0;i<9;i++ )
 	{square[i].textContent = '' ; }
 	}

restart.addEventListener('click',restartgame);

 function add() {
 	 if(this.textContent===''){this.textContent='X'}
 	 else if(this.textContent==='X'){this.textContent='O'}
 	 	else {this.textContent=''}
 }
for(var i=0;i<square.length ;i++)
{
	square[i].addEventListener('click',add);
}
//console.log("ak")
