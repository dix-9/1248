$(function(){
	var villes = new Array();
	villes.push("Lyon");
	villes.push("Paris");
	villes.push("Marseille");
	villes.push("Bordeaux");
	villes.push("Vesoul");
	villes.push("Besançon");
	villes.push("Nantes");
    villes.push("Reims");
    villes.push("Guadeloupe");
    villes.push("Réunion");
    villes.push("Louhans");
    villes.push("Lille");
    villes.push("Nice");
    villes.push("Toulon");
    villes.push("Mâcon");
	
	//Autocomplete
	$("#villes").autocomplete({source:villes});

})