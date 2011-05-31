var teamdata;

$(function() { 

	$.getJSON("team.js", function(data){
		teamdata = data.results.bindings;
	});
	
	
	$("#pv-go").click(function() {
		var victimIndex = Math.floor(Math.random() * (teamdata.length - 1));
		var row = teamdata[victimIndex];
		$("#pv-result").html("<div class='pv-person-name'>" + row["firstname"].value + " " + row["lastname"].value + "</div><div class='pv-person-img'><img src='"+ row["img"].value + "' /></div>");
	});
});
