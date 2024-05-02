// Alustetaan pistemäärä localStoragesta tai asetetaan se oletusarvoksi 0, jos sitä ei ole vielä tallennettu
var pisteet = JSON.parse(localStorage.getItem('pisteet')) || 0;

// Tallennetaan pistemäärä localStorageen vain, kun peli päättyy

var laskujaTehty = 0; // alustetaan laskujen lukumäärä

//arvotaan random numero minimi ja maksin välillä//
function arvoNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//laskujen arvo operaattorin arvonta//
function arvoOperaattori() {
    const operaattorit = ['+', '-', '*', ':'];
    return operaattorit[Math.floor(Math.random() * operaattorit.length)];
}

//laskujen  random generointi//
function generoiLasku() {
    const luku1 = arvoNumero(1, 10);
    const luku2 = arvoNumero(1, 10);
    const operaattori = arvoOperaattori();

    document.getElementById("question").innerHTML = luku1 + " " + operaattori + " " + luku2;
}

//tarkistetaan pelaajan antama laskun vastaus//
function tarkistaVastaus() {
    const vastaus = parseFloat(document.getElementById("answer").value);
    const oikeaVastaus = laskeOikeaVastaus(); 

    const palauteElementti = document.getElementById("palaute");

    //Jos vastaus on oikein//
    if (vastaus === oikeaVastaus) {
        pisteet++; // Lisätään yksi piste
        palauteElementti.textContent = "🌸Oikein! Hyvin tehty!💖 Pisteesi: " + pisteet + " 🌸";
    } else { //jos vastaus on väärin niin sitten tulostetaan//
        palauteElementti.textContent = "🌸Väärin. Yritä uudelleen!💔🌸";
    }

    //lopuksi tyhjennetään tarkistuksen jälkeen vastauksen syöttökenttä//
    document.getElementById("answer").value = "";

    laskujaTehty++; // Kasvatetaan tehtyjen laskujen lukumäärää

    // JS koodi tarkistetaa, että onko pelaaja tehnyt jo tehty 10 matikka askua
    if (laskujaTehty === 10) {
        document.getElementById("game").style.display = "hidden"; // Piilotetaan pelielementti
        var pisteIkkuna = window.open("", "_blank", "width=400,height=200");
        pisteIkkuna.document.write("<h2>Pelisi on päättynyt!</h2><p>♡Pistemääräsi:♡ " + pisteet + "</p>");
    
        // Asetetaan pistemääräikkunaan nappi, joka sulkee sen
        pisteIkkuna.document.write("<button onclick='suljeIkkuna()'>Sulje ikkuna</button>");
        
        // Tallennetaan pistemäärä localStorageen kun peli päättyy
        localStorage.setItem('pisteet', JSON.stringify(pisteet));
    } else {
        generoiLasku(); // jos laskujen määrä ei ole vielä 10, generoidaan uusi lasku
    }
    
    // Suljetaan pistemääräikkuna
    function suljeIkkuna() {
        pisteIkkuna.close();
    }
}

//Lasketaan laskun oikea vastaus valmiiksi oottamaan pelaajan syöttämää vastausta//
function laskeOikeaVastaus() {
    const luku1 = parseInt(document.getElementById("question").textContent.split(' ')[0]); //määritetään eka luku//
    const luku2 = parseInt(document.getElementById("question").textContent.split(' ')[2]); //määritetään toka luku//
    const operaattori = document.getElementById("question").textContent.split(' ')[1]; //määritetään operaattori//
    let oikeaVastaus;

    switch (operaattori) { //tarkistetaan operaattori ja myös lasku suoritetaan vastaavasti//
        case "+": //operaattori laskee plus//
            oikeaVastaus = luku1 + luku2;
            break;
        case "-": //operaattori laskee miinus//
            oikeaVastaus = luku1 - luku2;
            break;
        case "*": //operaattori laskee kerto//
            oikeaVastaus = luku1 * luku2;
            break;
        case ":": //operaattori laskee jako //
            oikeaVastaus = luku1 / luku2;
            break;
        default:
            oikeaVastaus = NaN; 
    }
    //palautetaan oikea vastaus funktion kutsumalla//
    return oikeaVastaus;
}

function aloitaUudelleen() {
    // Tarvittavat toimenpiteet pelin uudelleenkäynnistämiseksi
    pisteet = 0; // Nollaa pisteet
    laskujaTehty = 0; // Nollaa laskujen määrä

    document.getElementById("palaute").textContent = "";

    // Lisää muita tarvittavia toimenpiteitä, kuten pelitilan nollaus jne.
    alert("Peli käynnistetään uudelleen!");
    generoiLasku(); // Käynnistetään peli uudelleen
}

//koodi toteutaan//
window.onload = function() {
    generoiLasku();
}
