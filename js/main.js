var charactersArray = [
	{
		charName:"Qui-Gon Jinn",
		description:"Qui-Gon Jinn era un Maestro Jedi humano nacido en Coruscant durante los días de declinación de la República Galáctica.",
		imgSrc:"img/characters/qui-gon.jpg"
	},
	{
		charName:"R2-D2",
		description:"R2-D2, un robot del tipo R2, perteneció a las fuerzas de defensa en Naboo sirvió al Rey Veruna durante su término.",
		imgSrc:"img/characters/r2d2.jpg"
	},
	{
		charName:"Darth Maul",
		description:"Darth Maul fue el aprendiz de Darth Sidious, quien le entrenó hasta llegar a ser un Lord Sith.",
		imgSrc:"img/characters/darth-maul.png"
	},
	{
		charName:"Padmé Amidala",
		description:"Padmé Amidala fue una senadora humana que representó a la gente de Naboo durante los últimos años de la República Galáctica.",
		imgSrc:"img/characters/padme.png"
	}

]

const fillCharacters = ()=>{
	charactersArray.forEach((obj)=>{
		$(".main-characters").append(`
			<div class="w-1/4 p-3 float-left">
				<div class="character-card p-3 border-white border rounded-lg shadow-lg w-full relative h-full overflow-hidden">
					<h2 class="character-name text-white mb-5 z-10 relative mt-32">${obj.charName}</h2>
					<p class="chareacter-bio text-white z-10 relative">${obj.description}</p>
					<img class="absolute pin-t pin-l z-0 w-full opacity-25" src="${obj.imgSrc}" alt="">
				</div>
			</div>
		`)
	})
}

fillCharacters();