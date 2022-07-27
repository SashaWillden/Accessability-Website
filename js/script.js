// *** The code below was created, hard coded by Sasha Willden. Copyright 2019, all rights reserved of the creator of the created codes. *** //

// Oldsite/FLEX (UI UPDATE) REF Sasha Willden below [6] - http://igor.gold.ac.uk/~swill026/oldsite/home.html 
// Nav bar for menu-icon from flex box in Jquery plugin for this Javascript allowing the user to toggle the Nav bar
$(document).ready(function(){ //Jquery document function ready
	$(".menu-icon").on("click", function(){ // Jquery for HTML Div menu-icon for on click function
		$("nav ul").toggleClass("showing"); // Jquery for HTML Div/CSS when toggle for showing the Nav
	}); // Closing first line of iteration for menu-icon on click function
}); // Closing second line of iteration toggle variable for showing


// Nav bar for pull-me and panel from flex box in Jquery plugin for this Javascript allowing the user to untoggle the Nav Bar in slow
$(document).ready(function() { //Jquery document function ready
    $('.pull-me').click(function() { // Jquery for HTML Div pull-me for on click function
        $('.panel').slideToggle('slow'); // Jquery for HTML Div/CSS panel when toggled down in slow motion of the Nav
    }); // Closing first line of iteration for pull-me on click function
}); // Closing second line of iteration panel toggle variable for slow

jQuery(document).ready(function(){
  jQuery(function() {
        jQuery(this).bind("contextmenu", function(event) {
            event.preventDefault();
            alert('Right click disable in this site!!')
        });
    });
});


// Javascript for family font change from Nav in the body of the html page
function changeFontFamily(fontFam) // Function for Javascript to change Font Family on fontFam
{
document.getElementById("familyfont").style.fontFamily = fontFam; // Document to get ID in HTML of familyfont, for the style and fontFamily
}; // Closing Javascript document


//  Javascript for background colour change from Nav in the body of the html page
function bgChange(bg) { // Function for Javascript to change bg
    document.body.style.background = bg; // Document to get body style of background in HTML of ID
} // Closing Javascript document


// Javascript for resize Text to increase and decrease the text size of multiplier in the html page
function resizeText(multiplier) { // Function for Javascript resizeText inside function for multiplier
  if (document.getElementById('main-content').style.fontSize == "") { // If the Javascript document ID main-content in body is styled fontSize equal to auto
    document.getElementById('main-content').style.fontSize = "1.0em"; // Else allow Javascript document ID main-content in body is styled fontSize to be 1 em
  } // Closing First if and else statement in Javascript document
  document.getElementById('main-content','h1','h2','h3','h4').style.fontSize = parseFloat(document.getElementById('main-content').style.fontSize) + (multiplier * 0.2) + "em";
    // The main-content in body style FontSize to get these float size by multiplying by 0.2 with em in the Nav for the text to increase and decrease
} // Close Second Javascript document



// Below are the functions for background colour of text change from in body in the main-content
function turnred() { // Function for Javascript turnred
document.getElementById('main-content'); // Javascript document to get ID main-content in body
var myPara = document.getElementById("main-content"); // Variable myPara is equal to the Javascript document id main-content to pass in this variable
myPara.style.color = "red"; // The variable myPara is styled to a colour equalling to the colour red
} // Closing Javascript document and function


function turnblack() { // Function for Javascript turnblack
document.getElementById('main-content'); // Javascript document to get ID main-content in body
var myPara = document.getElementById('main-content'); // Variable myPara is equal to the Javascript document id main-content to pass in this variable
myPara.style.color = "black"; // The variable myPara is styled to a colour equalling to the colour black
} // Closing Javascript document and function


function turngreen() { // Function for Javascript turngreen
document.getElementById('main-content'); // Javascript document to get ID main-content in body
var myPara = document.getElementById('main-content'); // Variable myPara is equal to the Javascript document id main-content to pass in this variable
myPara.style.color = "green"; // The variable myPara is styled to a colour equalling to the colour green
} // Closing Javascript document and function


function turnblue() { // Function for Javascript turnblue
document.getElementById('main-content'); // Javascript document to get ID main-content in body
var myPara = document.getElementById('main-content'); // Variable myPara is equal to the Javascript document id main-content to pass in this variable
myPara.style.color = "blue"; // The variable myPara is styled to a colour equalling to the colour blue
}; // Closing Javascript document and function
// End of CR notice

// GOOGLE MAPS REF [8] - https://developers.google.com/maps/documentation/javascript/tutorial
// Javascript Function start for initMap
function initMap() {
          var map = new google.maps.Map(document.getElementById('map'), { // Variable map equal to google maps, gets id map info
          center: {lat: 51.5074, lng: 0.1278}, // for mal lat and at
          zoom: 11, // zoom for map
          mapTypeId:google.maps.MapTypeId.ROADMAP // The style of the map
        });
        map.setTilt(45); // Rotation view of map
} // End of Javacript


// Carousel bootstrap - codeply REF [9] - https://www.codeply.com/go/JEAsn1lz3a
// Jquery id carosuel to be on slide for function
$('#carouselExample').on('slide.bs.carousel', function (e) {
// Variables below
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;
// if, else and for loops
    if (idx >= totalItems-(itemsPerSlide-1)) { // if idx is greater equal to totalItems take away times by timesPerslide by 1 (one image at a time)
        var it = itemsPerSlide - (totalItems - idx); // varible it equal to itemsPerSlide variable, take away times totalitems take away idx
        for (var i=0; i<it; i++) { // for variable i is 0, start, i less than it and continue plus
            // append slides to end
            if (e.direction=="left") { // if e in direction then equal to left (going left slides)
                // the carosel item is equal in i which is 1, adding the others to append on view
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else { // else carosuel is equal in 0 which is null append to crosuel
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});
// End of Jquery


