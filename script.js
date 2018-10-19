function onSubmit(){
    var userMonth = document.getElementById('month').value;
    var userDay = document.getElementById('day').value;

    var sign = determineSign(userMonth, userDay);
    document.getElementById('sign').innerHTML = sign;

    var horoscope = determineHoroscope(sign);
    document.getElementById('horoscope').innerHTML = horoscope;

    var image = determineSrc(sign);
    document.getElementById('img').src = image;
}

function determineSign(userMonth, userDay){
    var sign = "";

    if(userMonth == 0){
        if(userDay >= 20){
            sign = "Aquarius";
        }
        if(userDay <= 19){
            sign = "Capricorn";
        }
    }

    if(userMonth == 1){
        if(userDay >= 19 && userDay <= 28){
            sign = "Pisces";
        }
        if(userDay <= 18){
            sign = "Aquarius";
        }
        if(userDay > 28){
            sign = "That's not a real date silly ;P";
        }
    }

    if(userMonth == 2){
        if(userDay <= 20){
            sign = "Pisces";
        }
        if(userDay >= 21){
            sign = "Aries";
        }
    }

    if(userMonth == 3){
        if(userDay <= 19){
            sign = "Aries";
        }
        if(userDay >= 20 && userDay <= 30){
            sign = "Taurus";
        }
        if(userDay > 30){
            sign = "That's not a real date silly ;P";
        }
    }

    if(userMonth == 4){
        if(userDay <= 20){
            sign = "Taurus";
        }
        if(userDay >= 21){
            sign = "Gemini";
        }
    }

    if(userMonth == 5){
        if(userDay <= 20){
            sign = "Gemini";
        }
        if(userDay >= 21 && userDay <= 30){
            sign = "Cancer";
        }
        if(userDay > 30){
            sign = "That's not a real date silly ;P";
        }
    }

    if(userMonth == 6){
        if(userDay <= 22){
            sign = "Cancer";
        }
        if(userDay >= 23){
            sign = "Leo";
        }
    }

    if(userMonth == 7){
        if(userDay <= 22){
            sign = "Leo";
        }
        if(userDay >= 23){
            sign = "Virgo";
        }
    }

    if(userMonth == 8){
        if(userDay <= 22){
            sign = "Virgo";
        }
        if(userDay >= 23 && userDay <= 30){
            sign = "Libra";
        }
        if(userDay > 30){
            sign = "That's not a real date silly ;P";
        }
    }

    if(userMonth == 9){
        if(userDay <= 22){
            sign = "Libra";
        }
        if(userDay >= 23){
            sign = "Scorpio";
        }
    }

    if(userMonth == 10){
        if(userDay <= 21){
            sign = "Scorpio";
        }
        if(userDay >= 22 && userDay <= 30){
            sign = "Sagittarius";
        }
        if(userDay > 30){
            sign = "That's not a real date silly ;P";
        }
    }

    if(userMonth == 11){
        if(userDay <= 21){
            sign = "Sagittarius";
        }
        if(userDay >= 22){
            sign = "Capricorn";
        }
    }
    return sign;
}

function determineHoroscope(sign){
    var horoscope = "";

    if(sign == "Capricorn"){
        horoscope = "This week may be busy busy, but don't let it get to you! Your Capricorn determination will help you push it through and rise to success!";
    }

    if(sign == "Aquarius"){
        horoscope = "Being a strong communicator and holding that charm, new relationships may be coming your way. It's up to you whether they benefit or destroy you.";
    }

    if(sign == "Pisces"){
        horoscope = "Your heart may be too good for your own good! But not this week, don't hesitate to help others, good karma will come your way.";
    }

    if(sign == "Aries"){
        horoscope = "Feeling overwhelmed? Perhaps try to get some time alone, you are incredibly independent! You don't need others to thrive and be great.";
    }

    if(sign == "Taurus"){
        horoscope = "Don't hold back and chase your desires this week, follow your ambitions and a great fortune will come!";
    }

    if(sign == "Gemini"){
        horoscope = "Despite your quick temper changes, be yourself and act freely. You will remain the gem in every eye!";
    }

    if(sign == "Cancer"){
        horoscope = "Your known as the emotional one, don't let others take advantage of that. Watch out this week for some traitors.";
    }

    if(sign == "Leo"){
        horoscope = "Is math and science getting on your last nerve? Try relaxing with some arts, you may surprise yourself and find your inner leo creativity.";
    }

    if(sign == "Virgo"){
        horoscope = "Think you're overthinking it? Nope, you are so close to reaching the conclusion, your analytical virgo mind will never fail you.";
    }

    if(sign == "Libra"){
        horoscope = "Stay on your own path and much harmony will be coming your way. Go be great!";
    }

    if(sign == "Scorpio"){
        horoscope = "Congratulations on being born as a Scorpio, the SUPERIOR sign! You hold so much power and the universe is in your hands";
    }

    if(sign =="Sagittarius"){
        horoscope = "Let your curiosity take you to wherever it lead, you may be surprised.";
    }

    if(sign == "That's not a real date silly ;P"){
        horoscope = "Please try again";
    }

    return horoscope;
}

function determineSrc(sign){
    var src = "";

    if(sign == "Capricorn"){
        src = "images/capri.png";
    }

    if(sign == "Aquarius"){
        src = "images/aqua.png";
    }

    if(sign == "Pisces"){
        src = "images/pisces.png";
    }

    if(sign == "Aries"){
        src = "images/aries.png";
    }

    if(sign == "Taurus"){
        src = "images/taurus.png";
    }

    if(sign == "Gemini"){
        src = "images/gemini.png";
    }

    if(sign == "Cancer"){
        src = "images/cancer.png";
    }

    if(sign == "Leo") {
        src = "images/leo.png";
    }

    if(sign == "Virgo"){
        src = "images/virgo.png";
    }

    if(sign == "Libra"){
        src = "images/libra.png";
    }

    if(sign == "Scorpio"){
        src = "images/scorp.png";
    }

    if(sign =="Sagittarius"){
        src = "images/sag.png";
    }

    return src;
}