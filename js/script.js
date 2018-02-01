//Вызов бокового меню при нажатии на кнопку "Меню"
var nav_button_x = document.getElementById("nav_button");
nav_button_x.className = " ";

var header_nav_x = document.getElementById("header_nav");
header_nav_x.className = "header_nav-baza";

var body_x = document.getElementById("body");
body_x.className = " ";

var opacity_x = document.getElementById("opacity");
opacity_x.className = " ";

var toggleElement = function(){
	if (nav_button_x.className == " ") {
		nav_button_x.className = "nav_button-click";
		header_nav_x.className = "header_nav-click";
		body_x.className = "body-no-overflow";
		opacity_x.className = "opacity-click";
	} else {
		nav_button_x.className = " ";
		header_nav_x.className = "header_nav-baza";
		body_x.className = " ";
		opacity_x.className = " ";
	}
}

nav_button.onclick = toggleElement;

//Вызов формы при нажатии на "Рассказать легенду" в подвале
var legend_form_block_x = document.getElementById("legend_form_block");
legend_form_block_x.className = "legend_form_block";

var legend_form_x = document.getElementById("legend_form");
legend_form_x.className = " ";

var toggleElement = function(){
	if (legend_form_block_x.className == "legend_form_block") {
		legend_form_block_x.className = "legend_form_block-click";
		body_x.className = "body-no-overflow";
	} else {
		legend_form_block_x.className = "legend_form_block";
		body_x.className = " ";
	}
}

legend_form.onclick = toggleElement;

//Вызов формы при нажатии на "Рассказать легенду" в бововом меню
var legend_form2_x = document.getElementById("legend_form2");
legend_form2_x.className = " ";

var toggleElement = function(){
	if (legend_form_block_x.className == "legend_form_block") {
		legend_form_block_x.className = "legend_form_block-click";
		nav_button_x.className = " ";
		header_nav_x.className = "header_nav-baza";
		body_x.className = "body-no-overflow";
		opacity_x.className = " ";
	} else {
		legend_form_block_x.className = "legend_form_block";
		body_x.className = " ";
	}
}

legend_form2.onclick = toggleElement;

//Закрытие формы по нажатию на "X"
var close_form_x = document.getElementById("close_form");
close_form_x.className = " ";

var toggleElement = function(){
	if (legend_form_block_x.className == "legend_form_block-click") {
		legend_form_block_x.className = "legend_form_block";
		body_x.className = " ";
	} else {
		legend_form_block_x.className = "legend_form_block";
	}
}

close_form.onclick = toggleElement;