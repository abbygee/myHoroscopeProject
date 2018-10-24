var signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "That's not a real date silly!"];
var horoscopes = [
    "this week may be busy busy, but don't let it get to you! Your Capricorn determination will help you push it through and rise to success!",
    "being a strong communicator and holding that charm, new relationships may be coming your way. It's up to you whether they benefit or destroy you.",
    "your heart may be too good for your own good! But not this week, don't hesitate to help others, good karma will come your way.",
    "feeling overwhelmed? Perhaps try to get some time alone, you are incredibly independent! You don't need others to thrive and be great.",
    "don't hold back and chase your desires this week, follow your ambitions and a great fortune will come!",
    "despite your quick temper changes, be yourself and act freely. You will remain the gem in every eye!",
    "your known as the emotional one, don't let others take advantage of that. Watch out this week for some traitors.",
    "is math and science getting on your last nerve? Try relaxing with some arts, you may surprise yourself and find your inner leo creativity.",
    "think you're overthinking it? Nope, you are so close to reaching the conclusion, your analytical virgo mind will never fail you.",
    "stay on your own path and much harmony will be coming your way. Go be great!",
    "congratulations on being born as a Scorpio, the SUPERIOR sign! You hold so much power and the universe is in your hands.",
    "let your curiosity take you to wherever it leads, you may be surprised.",
    "please try again"
];
var images = ["images/capri.png", "images/aqua.png", "images/pisces.png", "images/aries.png",
    "images/taurus.png", "images/gemini.png", "images/cancer.png", "images/leo.png",
    "images/virgo.png", "images/libra.png", "images/scorp.png", "images/sag.png"];

function onSubmit(){
    var userMonth = document.getElementById('month').value;
    var userDay = document.getElementById('day').value;
    var username = document.getElementById('username').value;
    var sign = determineSign(userMonth, userDay);
    var bday = determineBirthday(userMonth, userDay);
    var horoscope = determineHoroscope(sign);
    var image = determineImage(sign);

    document.getElementById('sign').innerHTML = sign;

    if(username.length >= 1){
        document.getElementById('horoscope').innerHTML = bday + username + ", " + horoscope;
    }else{
        document.getElementById('horoscope').innerHTML =  bday + horoscope;
    }

    document.getElementById('img').src = image;
}

function determineSign(userMonth, userDay){

    if(userMonth == 0){
        if(userDay >= 20){
            return signs[1]
        }
        if(userDay <= 19){
            return signs[0];
        }
    }

    if(userMonth == 1){
        if(userDay >= 19 && userDay <= 28) {
            return signs[2];
        }
        if(userDay <= 18){
            return signs[1];
        }
        if(userDay > 28){
            return signs[12];
        }
    }

    if(userMonth == 2){
        if(userDay <= 20){
            return signs[2];
        }
        if(userDay >= 21){
            return signs[3];
        }
    }

    if(userMonth == 3){
        if(userDay <= 19){
            return signs[3];
        }
        if(userDay >= 20 && userDay <= 30){
            return signs[4];
        }
        if(userDay > 30){
            return signs[12];
        }
    }

    if(userMonth == 4){
        if(userDay <= 20){
            return signs[4];
        }
        if(userDay >= 21){
            return signs[5];
        }
    }

    if(userMonth == 5){
        if(userDay <= 20){
            return signs[5];
        }
        if(userDay >= 21 && userDay <= 30){
            return signs[6];
        }
        if(userDay > 30){
            return signs[12];
        }
    }

    if(userMonth == 6){
        if(userDay <= 22){
            return signs[6];
        }
        if(userDay >= 23){
            return signs[7];
        }
    }

    if(userMonth == 7){
        if(userDay <= 22){
            return signs[7];
        }
        if(userDay >= 23){
            return signs[8];
        }
    }

    if(userMonth == 8){
        if(userDay <= 22){
            return signs[8];
        }
        if(userDay >= 23 && userDay <= 30){
            return signs[9];
        }
        if(userDay > 30){
            return signs[12];
        }
    }

    if(userMonth == 9){
        if(userDay <= 22){
            return signs[9];
        }
        if(userDay >= 23){
            return signs[10];
        }
    }

    if(userMonth == 10){
        if(userDay <= 21){
            return signs[10];
        }
        if(userDay >= 22 && userDay <= 30){
            return signs[11];
        }
        if(userDay > 30){
            return signs[12];
        }
    }

    if(userMonth == 11){
        if(userDay <= 21){
            return signs[11];
        }
        if(userDay >= 22){
            return signs[0];
        }
    }
}

function determineHoroscope(sign){
    if(sign == "Capricorn"){
        return horoscopes[0];
    }

    if(sign == "Aquarius"){
        return horoscopes[1];
    }

    if(sign == "Pisces"){
        return horoscopes[2];
    }

    if(sign == "Aries"){
        return horoscopes[3];
    }

    if(sign == "Taurus"){
        return horoscopes[4];
    }

    if(sign == "Gemini"){
        return horoscopes[5];
    }

    if(sign == "Cancer"){
        return horoscopes[6];
    }

    if(sign == "Leo"){
        return horoscopes[7];
    }

    if(sign == "Virgo"){
        return horoscopes[8];
    }

    if(sign == "Libra"){
        return horoscopes[9];
    }

    if(sign == "Scorpio"){
        return horoscopes[10];
    }

    if(sign =="Sagittarius"){
        return horoscopes[11];
    }

    if(sign == "That's not a real date silly!"){
        return horoscopes[12];
    }
}

function determineImage(sign){
    if(sign == "Capricorn"){
        return images[0];
    }

    if(sign == "Aquarius"){
        return images[1];
    }

    if(sign == "Pisces"){
        return images[2];
    }

    if(sign == "Aries"){
        return images[3];
    }

    if(sign == "Taurus"){
        return images[4];
    }

    if(sign == "Gemini"){
        return images[5];
    }

    if(sign == "Cancer"){
        return images[6];
    }

    if(sign == "Leo") {
        return images[7];
    }

    if(sign == "Virgo"){
        return images[8];
    }

    if(sign == "Libra"){
        return images[9];
    }

    if(sign == "Scorpio"){
        return images[10];
    }

    if(sign =="Sagittarius"){
        return images[11];
    }
}

function determineBirthday(userMonth, userDay){
    var bday = "";
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    if(userDay == currentDay && userMonth == currentMonth){
        bday = "Happy Birthday! ";
    }
    return bday;
}