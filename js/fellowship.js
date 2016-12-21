console.log("Fellowship loaded.");

var makeMiddleEarth = function() {
  // 1.  Create a section tag with an id of "middle-earth".
  var $middleEarth = jQuery('<section>');
  $middleEarth.attr('id', 'middle-earth');
  // 2.  Create an article tag for each land in the lands array.
  lands.forEach(function(land) {
    var $land = jQuery('<article>');
    $land.addClass('land');
    var $title = jQuery('<h1>');
    $title.text(land);
    $land.append($title);
    $land.appendTo($middleEarth);
  });
  // 3.  Give each article tag a class of "land".
  // 4.  Inside each article tag include an h1 tag with the name
  //     of the land as content.
  // 5.  Append each article.land to section#middle-earth.
  // 6.  Append section#middle-earth to the document body.
  jQuery('body').append($middleEarth);
}

var makeHobbits = function() {
  // 1.  Create a ul tag with an id of "hobbits".
    var $hobbits = jQuery('<ul>');
    $hobbits.attr('id','hobbits');
  // 2.  Create li tags for each Hobbit in the hobbits array.
    hobbits.forEach(function(hobbit) {
      var $hobbitName = jQuery('<li>');
      $hobbitName.addClass('hobbit');
      $hobbitName.text(hobbit);
      $hobbits.append($hobbitName);
      // jQuery('.land').eq(0).append($hobbits);
      jQuery('.land').first().append($hobbits);
    });
  // 3.  Give each li tag a class of "hobbit".
  // 4.  Set the text of each li.hobbit to one of the Hobbits
  //     in the array.
  // 5.  Append the ul#hobbits to the article.land representing
  //     "The Shire" (the first article tag on the page).
}

var keepItSecretKeepItSafe = function() {
  // 1.  Create a div with an id of "the-ring".
  // 2.  Give div#the-ring a class of "magic-imbued-jewelry".
  // 3.  Add div#the-ring as a child element of the li.hobbit
  //     representing "Frodo."
}

var makeBuddies = function() {
  // 1.  Create an aside tag.
  // 2.  Create a ul tag with an id of "buddies" and append it to
  //     the aside tag.
  // 3.  Create li tags for each buddy in the buddies array in
  //     data.js.
  // 4   Give each li tag a class of "buddy" and append them to
  //       "ul#buddies".
  // 5.  Insert the aside tag as a child element of the secion.land
  //     representing "Rivendell."
}

var beautifulStranger = function() {
  // 1.  Find the li.buddy representing "Strider".
  // 2.  Change the "Strider" text to "Aragorn" and make its
  //     color green.
}

var leaveTheShire = function() {
  // 1.  "Assemble the Hobbits" and move them (as a list) to Rivendell.
}

var forgeTheFellowShip = function() {
  // 1.  Create a div with an id of "the-fellowship" within the
  //     section.land for "Rivendell". Append a list to it.
  // 2.  Add each hobbit and buddy one at a time to
  //     'div#the-fellowship' list.
  // 3.  After each character is added make an alert that they
  //     have joined your party.
}

var theBalrog = function() {
  // 1.  Select the "li.buddy" for "Gandalf"...
  // 2.  And change its text to "Gandalf the White", and give it
  //     the class "the-white".
  // 3.  Apply style to the element, adding a "3px solid white"
  //     border to it, giving it a border radius of "10px," and
  //     making it's color white.
}

var hornOfGondor = function() {
  // 1.  Pop up an alert that the Horn of Gondor has been blown.
  // 2.  Put a line-through on Boromir's name.
  // 3.  Fade Boromir's opacity to 0.3 (he lives on in spirit).
  // 4.  Make Boromir's text color black.
}

var itsDangerousToGoAlone = function() {
  // 1.  Create a list with class "soulmates" in Mordor.
  // 2.  Take Frodo and Sam out of The Fellowship and move them
  //     to ul.soulmates in Mordor.
  // 3.  Add a div with an id of "mount-doom" to Mordor
}

function weWantsIt() {
  // 1.  Create a div with an id of "gollum" and add it to Mordor.
  // 2.  Remove The Ring from Frodo and give it to Gollum.
  // 3.  Move Gollum into Mount Doom.
}

function thereAndBackAgain() {
  // 1.  Remove Gollum and the Ring from the document.
  // 2.  Add a list to the shire, and move all the hobbits in to it.
  // 3.  Add the class "collapse" to Mordor.
}
