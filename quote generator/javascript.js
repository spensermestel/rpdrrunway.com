var quotes1 = [
'strutting',
'pummeling',
'gliding',
'stomping',
'camping it',
'classing it' 
]
var quotes2 = [
'serving',
'giving',
'looking like',
'wearing'
]
var quotes3 = [
"Shakira",
"Nicki Minaj",
"Mary J Blige",
"Black Barbie",
"Lisa Vanderpump",
"Vanessa Williams",
"Beyonce",
"Naomi Campbell",
"Vivian Westwood",
"Toni Braxton",
"Lil' Kim",
"Grace Jones",
"Alyssa Edwards",
"Gizelle",
"Kylie Minogue",
"Ke$ha",
"Robyn",
"Diana Ross",
"Cardi B"
]
var quotes4 = [
"Las Vegas",
"Daytona Beach",
"Nancy Pelosi",
"Betty Rubble",
"P. Diddy's mom",
"a Miami housewife ",
"Snooki",
"The Jetsons",
"Alyssa Edwards",
"R2D2",
"C3P-Hoe",
"Brooklyn prom ",
"extreme plastic surgery",
"Hoe-ville",
"a super sweet 16",
"Orange Jigglious ",
"Fire Island ",
"the Gay Olympics",
"Sharon Needles",
"Pat Benatar",
"a Nubian Princess ",
"Relaskatox ",
"Hillary Clinton ",
"the Bush Twins ",
"Party City ",
"Atlantic City ",
"a Dallas strip club",
"killer jellyfish ",
"Porkchop ",
"Bobo the Clown ",
"Barbara Cockrin ",
"Queen Elizabeth "
]
var quotes5 = [
'acid cunt',
'hand-stitched',
'dark and twisted',
'post-apocalyptic',
'in-your-face',
'pretty-in-pink',
'million-dollar',
'avant-guarde',
'plus-size',
'other-worldy',
'Rodeo-drive',
'little-Miss-Perfect',
'cock-and-bull',
'lace-front',
'80s-inspired',
'100%',
'early 90s',
'Tex-Mex',
'power-poof',
'post-post-post',
'animalistic',
'girl-next-door',
'fashion-forward',
'black-and-white',
'rock-and-roll', 
'big-booty',
'all-black'
]
var quotes6 = [
"white woman",
"Hollywood",
"going to the met Gala",
"octupussy",
"bald bitch",
"stripper",
"ghost from the Civil War",
"big girl",
"camel toe",
"boricua",
"disco",
"femme",
"super model",
"Pacific Northwest",
"quinceanera",
"Chinchilla ",
"lion tamer",
"Mariachi ",
"bondage",
"sell-that-garment",
"Snow White and the Hunty",
"black cock",
"baby doll",
"outerspace",
"Waterworld",
"Renaissance",
"center-fold",
"lion tamer"
]
var quotes7 = [
"couture",
"extravaganza",
"glamour",
"realness",
"chic",
"drama",
"glamorousa"
]
var quotes8 = [
"boobiscles",
"coochy coochy",
"chi-chis",
"poochy",
"maracas",
"ass",
"titties",
"pussy",
"fuego",
"body oddy oddy",
"Jiggy Caliente",
"ass-less chaps ",
"weave",
"porthole",
"whole package",
"lemon drop",
"cleavage "
]
var quotes9 = [
"Belenciaga",
"solid gold",
"curvacious",
"edible",
"Versace",
"high fashion",
"extra extra",
"hand-painted",
"stoned from head to toe",
"darker than usual",
"a couch from Rent-A-Center",
"for the gods",
"pura Latina",
"real leather"
]

function newQuote() {
	var randomNumber1 = Math.floor(Math.random() * (quotes1.length));
	var randomNumber2 = Math.floor(Math.random() * (quotes2.length));
	var randomNumber3 = Math.floor(Math.random() * (quotes3.length));
	var randomNumber4 = Math.floor(Math.random() * (quotes4.length));
	var randomNumber5 = Math.floor(Math.random() * (quotes5.length));
	var randomNumber6 = Math.floor(Math.random() * (quotes6.length));
	var randomNumber7 = Math.floor(Math.random() * (quotes7.length));
	var randomNumber8 = Math.floor(Math.random() * (quotes8.length));
	var randomNumber9 = Math.floor(Math.random() * (quotes9.length));
	document.getElementById('quoteDisplay').innerHTML = "I am " + quotes1[randomNumber1] + ' down the runway '
	+ quotes2[randomNumber2] + ' ' + quotes3[randomNumber3] + ' meets ' + quotes4[randomNumber4] + ' ' + quotes5[randomNumber5] + ' ' + quotes6[randomNumber6] + ' ' + quotes7[randomNumber7] + ' -- and you know my ' + 
	quotes8[randomNumber8] + ' be ' + quotes9[randomNumber7] + '.';
		
}