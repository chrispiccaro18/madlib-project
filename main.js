
function madLib() {
    //links string input to js variables
    var adjective1 = document.getElementById('adjective-1').value;
    var adjective2 = document.getElementById('adjective-2').value;
    var pluralNoun1 = document.getElementById('plural-noun-1').value;
    var pluralNoun2 = document.getElementById('plural-noun-2').value;
    var adjective3 = document.getElementById('adjective-3').value;
    var noun1 = document.getElementById('noun-1').value;
    var noun2 = document.getElementById('noun-2').value;
    var pluralNoun3 = document.getElementById('plural-noun-3').value;
    var adjective4 = document.getElementById('adjective-4').value;
    var personInRoom = document.getElementById('person-in-room').value;
    var adjective5 = document.getElementById('adjective-5').value;
    var noun3 = document.getElementById('noun-3').value;
    var adjective6 = document.getElementById('adjective-6').value;
    var noun4 = document.getElementById('noun-4').value;
    var pluralNoun4 = document.getElementById('adjective-4').value;
    var pluralNoun5 = document.getElementById('adjective-5').value;
    var adjective7 = document.getElementById('adjective-7').value;
    var adjective8 = document.getElementById('adjective-8').value;
    var adjective9 = document.getElementById('adjective-9').value;
    console.log(adjective1, adjective2, pluralNoun1, pluralNoun2, adjective3, noun1, noun2, pluralNoun3, adjective4, personInRoom, adjective5, noun3, adjective6, noun4, pluralNoun4, pluralNoun5, adjective7, adjective8, adjective9);
    
    //creates madlib body once input fields are recognized
    var madLibBody = 'Ladies and gentlemen, on this ' + adjective1 + ' occasion it is a privelage to address such a/an ' + adjective2 + ' looking group of ' + pluralNoun1 + '. I can tell from your smiling ' + pluralNoun2 + ' that you will support my ' + adjective3 + ' program in the coming election. I promise that, if elected, there will be a/an ' + noun1 + ' in every ' + noun2 + ' and two ' + pluralNoun3 + ' in every garage. I want to warn you about my ' + adjective4 + ' opponent, Mr. ' + personInRoom + '. The man is nothing but a/an ' + adjective5 + ' ' + noun3 + '. He has a ' + adjective6 + ' character and is working ' + noun4 + ' in glove with the criminal element. If elected I promise to eliminate vice. I will keep the ' + pluralNoun4 + ' off the city streets. I will keep the crooks from dipping their ' + pluralNoun5 + ' in the public till. I promise you ' + adjective7 + ' government, ' + adjective8 + ' taxes, and ' + adjective9 + ' schools.';
    var displayMadLib = document.getElementById('madlib-body');
    displayMadLib.textContent = madLibBody;
}
var allAdjectives = ['alpha', 'bravo', 'charlie', 'delta', ' enigma'];

var allPluralNouns = ['plural', 'nouns'];

var allNouns = ['nouns']

var allNames = ['Charlie', 'Jacob', 'Donald']

function randomizer() {
    var adjectiveSelector1 = Math.floor(Math.random() * 100);
    var adjectiveSelector2 = Math.floor(Math.random() * 100);
    var adjectiveSelector3 = Math.floor(Math.random() * 100);
    var adjectiveSelector4 = Math.floor(Math.random() * 100);
    var adjectiveSelector5 = Math.floor(Math.random() * 100);
    var adjectiveSelector6 = Math.floor(Math.random() * 100);
    var adjectiveSelector7 = Math.floor(Math.random() * 100);
    var adjectiveSelector8 = Math.floor(Math.random() * 100);
    var adjectiveSelector9 = Math.floor(Math.random() * 100);
    var pluralNounSelector1= Math.floor(Math.random() * 100);
    var pluralNounSelector2= Math.floor(Math.random() * 100);
    var pluralNounSelector3 = Math.floor(Math.random() * 100);
    var pluralNounSelector4 = Math.floor(Math.random() * 100);
    var pluralNounSelector5 = Math.floor(Math.random() * 100);
    var nounSelector1 = Math.floor(Math.random() * 100);
    var nounSelector2 = Math.floor(Math.random() * 100);
    var nounSelector3 = Math.floor(Math.random() * 100);
    var nounSelector4 = Math.floor(Math.random() * 100);
    var personInRoomSelector = Math.floor(Math.random() * 100);
    

    document.getElementById('adjective-1').value = allAdjectives[0];
    document.getElementById('adjective-2').value = 'testing 123';
    document.getElementById('plural-noun-1').value = 'testing 123';
    document.getElementById('plural-noun-2').value = 'testing 123';
    document.getElementById('adjective-3').value = 'testing 123';
    document.getElementById('noun-1').value = 'testing 123';
    document.getElementById('noun-2').value = 'testing 123';
    document.getElementById('plural-noun-3').value = 'testing 123';
    document.getElementById('adjective-4').value = 'testing 123';
    document.getElementById('person-in-room').value = 'testing 123';
    document.getElementById('adjective-5').value = 'testing 123';
    document.getElementById('noun-3').value = 'testing 123';
    document.getElementById('adjective-6').value = 'testing 123'
    document.getElementById('noun-4').value = 'testing 123';
    document.getElementById('plural-noun-4').value = 'testing 123';
    document.getElementById('plural-noun-5').value = 'testing 123';
    document.getElementById('adjective-7').value = 'testing 123';
    document.getElementById('adjective-8').value = 'testing 123';
    document.getElementById('adjective-9').value = 'testing 123';
}

//madLib();
//randomizer();