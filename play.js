
$(document).ready(function() {

	var voldy = {
		health:1,
		attack:100,
		counterAttack:100,
	};

	var magneto = {
		health:2,
		attack:100,
		counterAttack:100,
	};

	var vader = {
		health:3,
		attack:100,
		counterAttack:100,
	};

	var saruman = {
		health:4,
		attack:100,
		counterAttack:100,
	};

	var loki = {
		health:5,
		attack:100,
		counterAttack:100,
	};

	var attackingVillian;
	var attackerChosen = false;
	var defendingVillian;
	var defenderChosen = false;
	var attackButton = $("#attackBtn");

	console.log("Document ready");

	
	//onClick for characters

	$(".villian").on("click", function(){
		if (!attackerChosen) {
			console.log("villian not chosen");
			var chosenOne = $(this).attr("alt").toString();
			console.log("attacker is " + chosenOne);

			switch (chosenOne) {

				case "loki" :
					attackingVillian = loki;
					break;

				case "saruman" :
					attackingVillian = saruman;
					break;	

				case "vader" :
					attackingVillian = vader;
					break;	

				case "magneto" :
					attackingVillian = magneto;
					break;	

				case "voldy" :
				attackingVillian = voldy;
				break;	
			}

			moveChar(chosenOne);
			attackerChosen = true;
		}
		else if (attackerChosen && !defenderChosen) {
			console.log("villian chosen, choosing defender");
			var victim = $(this).attr("alt").toString();
			console.log("Defender is " + victim);

			switch (victim) {

				case "loki" :
					defendingVillian = loki;
					break;

				case "saruman" :
					defendingVillian = saruman;
					break;	

				case "vader" :
					defendingVillian = vader;
					break;	

				case "magneto" :
					defendingVillian = magneto;
					break;	

				case "voldy" :
					defendingVillian = voldy;
					break;	
			}
			moveChar(victim);
			defenderChosen = true;
		}

		else {
			console.log("You've chosen a character and someone to attack, try attacking now.")
		}
	});

	//move attacker or defender to correct area
	function moveChar(charClicked){
		//if chooseing attacker (attacker hasn't been chosen already)
		if (!attackerChosen) {
			$("#" + charClicked).appendTo("#attackerArea");
			$("#attackerArea").attr("style", "display:block;");
		}
		//if attacker has been chosen, but defender hasn't
		else if (attackerChosen && !defenderChosen){
			$("#" + charClicked).appendTo("#defenderArea");
			$("#attackerArea").css("display", "block");
		}
	}

	//onClick for Attack Button

	$("#attackBtn").on("click", function(){
		
	});

	//Win check 

	//Overall win check



});