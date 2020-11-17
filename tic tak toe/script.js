window.addEventListener("load", load);
document.getElementById('startGameDialog').addEventListener('click', start);
var slotClickId = "";
var turn = "user";
var tick;
var userSymbol;
var userTurnVal;
var gameTurnVal;
var aiTurnVal;
var aiDiffculty = 1;
var hostControllerTimer;
var isPlaying = false;
var winnerFound;
var gameEnded;
var winnerModal;
var aiSymbol;
var userWins;
var aiWins;
var userNameSC;
var aiNameSC;
var userSymbolSC;
var aiSymbolSC;
var symbolSC;
var userWinsSC;
var aiWinsSC;
var userTurnSC;
var aiTurnSC;
var winningPlayer = ""
 var slotsArr = [	"", "", "", 
 				"", "", "",
 				"", "", ""]
 
 tick = setInterval(mainControl, 100);
 function mainControl()
 {

 	if(isPlaying)
 	{
 		hostController();
 	}
 }
function load()
{
	
}
function start()
{
	gameEnded = false;
	var rowContainer = document.getElementsByClassName('rowCr');
		for(var i = 0; i < rowContainer.length;i++)
		{
			rowContainer[i].style.display = "flex";
		}
	document.getElementById("startGameDialog").style.display = "none";
	var slots = document.getElementsByClassName("boxCr")
	for(var i = 0; i < slots.length; i++)
	{
		slots[i].addEventListener('click', userSlotClickEvent);
		slots[i].firstElementChild.addEventListener('click',userSlotClickEvent);
	}
	userWins = 0;
	aiWins = 0;
	winnerModal = document.getElementById("winnerModal");
	document.getElementById('playAgainBtn').addEventListener('click', reset);
	assignUserAIValues();
	updateScoreBoard();
	winnerFound = false;
	isPlaying = true
}

function assignUserAIValues()
{
	turn = (Math.random() < .5)
	if(turn < .5)
	{
		userTurnVal	= 0;
		aiTurnVal = 1;
	}
	else	
	{
		userTurnVal	= 1;
		aiTurnVal = 0;
	}
	if(Math.random() < .5){ userSymbol = "X"; aiSymbol = "0";}
	else{userSymbol = "0"; aiSymbol = "X";} 
	gameTurnVal = 0;
	aiDoneExecuting = true;
	userNameSC = document.getElementById("userNameSC");
	userSymbolSC = document.getElementById("userSymbolSC");	
	userWinsSC= document.getElementById("userWinsSC");	
	userTurnSC = document.getElementById("userTurnSC");
	aiNameSC = document.getElementById("aiNameSC");
	aiSymbolSC = document.getElementById("aiSymbolSC");
	aiWinsSC = document.getElementById("aiWinsSC");
	aiTurnSC = document.getElementById("aiTurnSC");
	
}
function reset()
{
	tick = setInterval(mainControl, 100);
	winnerFound = false;
	isPlaying = true;
	gameEnded = false;
	slotClicked = false;
	turn = (Math.random() < .5)? 0:1;
	if(Math.random < .5){ userSymbol = "X"; aiSymbol = "0";}
	else{userSymbol = "0"; aiSymbol = "X";}
	updateScoreBoard();
	assignUserAIValues();
	clearViewSlots();
	winningPlayer = ""
 	 slotsArr = [	"", "", "", 
 				"", "", "",
 				"", "", ""]
 	winnerModal.style.display = "none";
}
function clearViewSlots()
{
	var slots = document.getElementsByClassName("boxCr")
	for(var i = 0; i < slots.length; i++)
	{
		slots[i].firstElementChild.innerHTML = "";
	}
}
function userSlotClickEvent(event)
{
	if(aiDoneExecuting)
	{
		slotClickId = event.target.id;
	}
}
function isUserTurn()
{
	return gameTurnVal % 2 == userTurnVal && aiDoneExecuting && !winningStateFound();	
}
function isAITurn()
{
	return gameTurnVal % 2 == aiTurnVal && aiDoneExecuting && !winningStateFound();	
}
function SetUserScoreboardSymbolBasedOnTurn()
{
	if(isUserTurn())
	{
		return "-";
	}
	else
	{
		return "";
	}
}
function SetAIScoreboardSymbolBasedOnTurn()
{
	if(isAITurn())
	{
		return "-";
	}
	else
	{
		return "";
	}
}
function userHasStartingTurn()
{
	return userTurnVal == 0;
}
function AIHasStartingTurn()
{
	return AITurnVal == 0;
}
function hostController()
{
	
	if(!winnerFound)
	{
		if(aiDoneExecuting)
		{
			updateScoreBoard();
		}
		if(isUserTurn())
		{
			userManage();
		}
		if(isAITurn())
		{
	 		AIManage(); 	
		}
		else if(gameTurnVal > 8)
		{
			reset();
		}

	}
	else
	{
		initiateWinningState();
		isPlaying = false;

		return;
	}
	
}
function updateScoreBoard()
{
	userNameSC.innerHTML = "User";
	userSymbolSC.innerHTML = userSymbol;
	userWinsSC.innerHTML = userWins;
	userTurnSC.innerHTML = SetUserScoreboardSymbolBasedOnTurn();

	aiNameSC.innerHTML = "AI";
	aiSymbolSC.innerHTML = aiSymbol;
	aiWinsSC.innerHTML = aiWins;
	aiTurnSC.innerHTML = SetAIScoreboardSymbolBasedOnTurn();
}

function userManage()
{
	var slotIndex = "";

	if(slotClickId != "")
	{
		switch(slotClickId)
		{
			case "slot0":
				slotIndex = 0;
				break;
			 case "slot1":
				slotIndex = 1
				break; 
			case "slot2":
				slotIndex = 2;
				break;
			case "slot3":
				slotIndex = 3;
				break;
			case "slot4":
				slotIndex = 4;
				break;
			case "slot5":
				slotIndex = 5;
				break;
			case "slot6":
				slotIndex = 6;
				break;
			case "slot7":
				slotIndex = 7;
				break ;
			case "slot8":
				slotIndex = 8;
				break;
			default:
			break;
		}

		if(slotIndex !== "")
		{
			// console.log("slot index does not equal empty string");
			if(!slotOccupied(slotIndex))
			{
				console.log("slot index is not occupied");
				var element = document.getElementById("slot" + slotIndex + "").firstElementChild;
				//element.firstElementChild.innerHTML = userSymbol;
				writeToSlot(element, userSymbol);
				slotsArr[slotIndex] = userSymbol;
				slotClickId = "";
				gameTurnVal++;
			}

		}
		
	}
}
function getRandInt(min, max)
{
	return  Math.floor(Math.random() * (max - min + 1)) + min;
}
function getOpenSlots()
{
	var openSlotsArr = [];
	for(var i = 0; i < slotsArr.length;i++ )
	{
		if(!slotOccupied(i))
		{
			openSlotsArr.push(i);
			
		}

	}


	return openSlotsArr;
}
function getAIOccupiedSlots()
{
	var AIOccupiedSlots = [];
	for(var i = 0; i < slotsArr.length;i++ )
	{
		if(slotsArr[i] == aiSymbol)
		{
			AIOccupiedSlots.push(i);
			
		}
		
	}
	if(AIOccupiedSlots.length <=0)
	{
		return -1;
	}
		for(var i = 0;i < AIOccupiedSlots.length;i++)
		{
			console.log("AI occupied slots:  " + AIOccupiedSlots[i]);
		}

	return AIOccupiedSlots;
}
function AIManage()
{
		
		var openSlotsArr = getOpenSlots();
		var slotChoice = -1;
		if(openSlotsArr.length == 9 || userHasStartingTurn() && gameTurnVal == 1 || Math.random() > aiDiffculty)
		{
			console.log("inside of ai random slot choice condition");
			 slotChoice = getRandInt(0, openSlotsArr.length - 1);
		}
		else
		{
			console.log("current slot choice value: " + slotChoice);
			slotChoice = AISlotSelection();
			if(slotChoice == -1)
			{
				slotChoice = getRandInt(0, openSlotsArr.length - 1);
			}
			console.log("AI finalized selection choice is: " + slotChoice);
		}
		

			setTimeout(function()
			{
				var index = slotChoice;
				console.log("chosen slot index: " + index);
				var element = document.getElementById("slot" + index + "").firstElementChild;
				console.log("slot choice value is: " + index);
				writeToSlot(element, aiSymbol);		
				slotsArr[index] = aiSymbol;
				gameTurnVal++;
				aiDoneExecuting = true;	
			}, (Math.random() * 1000) + 1000);
			aiDoneExecuting = false
			

}
function AISlotSelection()
{
	var slotChoice = -1;
	console.log("inside of AISlotSelection method");
			AISlots = getAIOccupiedSlots();
			var currentChoices = [];
			for(var i = 0; i < AISlots.length;i++)
			{
				var index = AISlots[i];
				
				if(index != 0 && index != 3 && index != 6)
				{
					if(!slotOccupied(index - 1))
					{
						slotChoice = index - 1;
						currentChoices.push(slotChoice)
					}
				}
				
				if(index != 2 && index != 5 && index != 8)
				{
					if(!slotOccupied(index + 1))
					{
						slotChoice = index + 1;
						currentChoices.push(slotChoice);
					}
				}
				if(index != 0 && index != 1 && index != 2)
				{
					if(!slotOccupied(index - 3))
					{
						slotChoice = index - 3;
						currentChoices.push(slotChoice);
					}
				}
				if(index != 6 && index != 7 && index != 8)
				{
					if(!slotOccupied(index + 3))
					{
						slotChoice = index + 3;
						currentChoices.push(slotChoice);
					}
				}
				if(index != 0 && index != 8)									//angle check

				{
					if(index != 3 && index != 6 && index != 7  && !slotOccupied(index - 2))
					{
						slotChoice = index - 2;
						currentChoices.push(slotChoice);
					}
					if(index != 1 && index != 2 && index != 5 && !slotOccupied(index + 2) )
					{
						slotChoice = index + 2;
						currentChoices.push(slotChoice);
					}
				}
				if(index != 2 && index != 6)									//angle check
				{
					if( index != 5 && index != 7 && index != 8  && !slotOccupied(index - 4))
					{
						slotChoice = index - 4;
						currentChoices.push(slotChoice);
					}
					if(index != 0 && index != 1 && index != 3 && !slotOccupied(index + 4) )
					{
						slotChoice = index + 4;
						currentChoices.push(slotChoice);
					}
				}

			}
			/*if(currentChoices.length <= 0)
			{
				slotChoice = -1;
				console.log("AI randomly decided on slot");
				return slotChoice;
			}*/
			for(var i = 0; i < currentChoices.length;i++)
			{
				console.log("all current slot choices" + currentChoices[i]);
			}
			var index = getRandInt(0, currentChoices.length - 1);
			console.log("AI selectively decided on slot");
			return currentChoices[index];
}
function writeToSlot(element, value)
{
	element.innerHTML = value;
}

function slotOccupied(index)
{
	if(slotsArr[index] !== "")
	{
		return true;
	}
	return false; 
}
function initiateWinningState()
{
	winnerModal.style.display = "block";
	if(winningPlayer == 'USER')
	{
		userWins++;
	}
	else
	{
		aiWins++;
	}
	gameEnded = true;
	document.getElementById("winnerAnnouncement").innerHTML = winningPlayer + " is the winner";

}
function findPlayerBySymbol( symbol)
{
	if(userSymbol == symbol)
		return "USER";
	else
		return "AI"
}
function sameSymbol(a, b, c)
{
	return (a == b && b == c);
}
function winningStateFound()
{
	var s = slotsArr
	var symbol = "";

	 if(sameSymbol(s[0],s[3],s[6])  ||  sameSymbol(s[0],s[1],s[2]) )
		{
			symbol = s[0];
		}
	
	else if(sameSymbol(s[0], s[4], s[8]) || sameSymbol(s[6],s[4],s[2]) 
		|| sameSymbol(s[1],s[4],s[7]) || sameSymbol(s[3],s[4],s[5]))
		{
			symbol = s[4];
		}
	
	else if(sameSymbol(s[2],s[5],s[8]) ||  sameSymbol(s[6],s[7],s[8]) )
		{
			symbol = s[8];
		}
							
	if(symbol == "")
	{
		console.log("nobody won");
	}
	if (symbol != "")
	{
		winningPlayer = findPlayerBySymbol(symbol);
		winnerFound = true;
		return true;
	}
	return false;

}


