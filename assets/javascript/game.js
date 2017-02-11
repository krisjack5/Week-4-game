  var randomNumber;
  var wins;
  var losses;
  var redCrystal;
  var blueCrystal;
  var greencrystal;
  var purpleCrystal;
  var score;

  function start() {
    randomNumber = Math.floor(19 + (Math.random() * 101));
    wins = 0;
    losses = 0;
    redCrystal = Math.floor(1 + (Math.random() * 12));
    blueCrystal = Math.floor(1 + (Math.random() * 12));
    greencrystal = Math.floor(1 + (Math.random() * 12));
    purpleCrystal = Math.floor(1 + (Math.random() * 12));
    score = 0;
  }

  function reset() {
    randomNumber = Math.floor(19 + (Math.random() * 101));
    redCrystal = Math.floor(1 + (Math.random() * 12));
    blueCrystal = Math.floor(1 + (Math.random() * 12));
    greencrystal = Math.floor(1 + (Math.random() * 12));
    purpleCrystal = Math.floor(1 + (Math.random() * 12));
    score = 0;
    $('#win').html("Wins: " + wins + '<br>' + "Losses: " + losses);
    $('#prize').html("Random Number: " + randomNumber);
    $('#number').html("Your Number: " + score);
  }


  function points() {
    if(score > randomNumber) {
      alert("Sorry. Better Luck Next Time.");
      losses += 1;
      reset();
    };
    if (score == randomNumber) {
      alert("Congratulations. You're a Winner!");
      wins += 1;
      reset();
    };
  }


  $(document).ready(function() {
    start();
    $('#prize').html("Random Number: " + randomNumber);
    $('#win').html("Wins: " + wins + '<br>' + "Losses: " + losses);
    $('#number').html('Your Number: ' + score);
  });

  

  $('#red').click(function() {
    score += redCrystal;
    $('#number').html('Your Number: ' + score);
    points();
  });

  $('#blue').click(function() {
    score += blueCrystal;
    $('#number').html('Your Number: ' + score);
    points();
  });

  $('#green').click(function() {
    score += greencrystal;
    $('#number').html('Your Number: ' + score);
    points();
  });

  $('#purple').click(function() {
    score += purpleCrystal;
    $('#number').html('Your Number: ' + score);
    points();
  });