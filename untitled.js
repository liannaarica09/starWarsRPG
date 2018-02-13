var baseAttack = attackingVillian.attack;
		var currentAttckPwr = attackingVillian.attack;
		var attackerHealth = attackingVillian.health;
		var defenderHealth = defendingVillian.health;

		//attack
		console.log("Attack!");
		console.log(defenderHealth);
		console.log(currentAttckPwr);

		defenderHealth = defenderHealth - currentAttckPwr;
		console.log(defenderHealth);
		console.log("Defender's Health Points are now " + (defenderHealth));
		// console.log("Attacker did " + (defendingVillian.health - defenderHealth) + " damage.");

		console.log(defenderHealth);
		
		//counter attack
		console.log("Counter attack!");
		console.log(attackerHealth);
		console.log(defendingVillian.counterAttack);

		attackerHealth = attackerHealth - defendingVillian.counterAttack;
		console.log(attackerHealth);
		console.log("Attacker's Health Points are now " + (attackerHealth));
		// console.log("Defender did " + (attackingVillian.health - attackerHealth) + " damage.");

		console.log(attackerHealth);

		//attack power increase 
		currentAttckPwr += baseAttack;
		console.log(currentAttckPwr);