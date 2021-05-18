window.addEventListener('load',init);

let aantalParen, schoenmaat, typeSok, typeBedrukking, tekst, lettertype, tekstKleur, afbeelding, voornaam, achternaam, email, adres, plaats, rating, termsconditions;

function init () {

    let queryString = decodeURIComponent(window.location.search.slice(1));
    queryString = queryString.split("&");

    for (let i = 0; i < queryString.length; i++) {
        let key = queryString[i].split("=")[0];
        let value = queryString[i].split("=")[1].replaceAll("+"," ");

        switch (key) {
            case "aantalparen":
                aantalParen = value;
                break;
            case "schoenmaten":
                schoenmaat = value;
                break;
            case "typesok":
                typeSok = value;
                break;
            case "typebedrukking":
                typeBedrukking = value;
                break;
            case "tekst":
                tekst = value;
                break;
            case "lettertype":
                lettertype = value;
                break;
            case "tekstkleur":
                tekstKleur = value;
                break;
            case "afbeelding":
                afbeelding = value;
                break;
            case "voornaam":
                voornaam = value;
                break;
            case "achternaam":
                achternaam = value;
                break;
            case "email":
                email = value;
                break;
            case "str+nr":
                adres = value;
                break;
            case "plts+post":
                plaats = value;
                break;
            case "rating":
                rating = value;
                break;
            case "termsconditions":
                if (value === "on") value = "Aanvaard";
                termsconditions = value;
                break;
        }
    }

    //invullen alle personaliseringsopties
    document.getElementById("aantalparen").innerHTML = aantalParen;
    document.getElementById("schoenmaat").innerHTML = schoenmaat;
    document.getElementById("typesok").innerHTML = typeSok;
    if (typeBedrukking === undefined) typeBedrukking = "Geen bedrukking";
    document.getElementById("typebedrukking").innerHTML = typeBedrukking;
    if (tekst === "") tekst = "Geen tekst";
    document.getElementById("tekst").innerHTML = tekst;
    document.getElementById("lettertype").innerHTML = lettertype;
    document.getElementById("tekstkleur").innerHTML = tekstKleur;
    if (afbeelding === "") afbeelding = "Geen afbeelding";
    document.getElementById("afbeelding").innerHTML = afbeelding;

    //invullen alle persoonlijke info
    if (voornaam === "") voornaam = "Geen voornaam";
    document.getElementById("voornaam").innerHTML = voornaam;
    document.getElementById("achternaam").innerHTML = achternaam;
    document.getElementById("emailadres").innerHTML = email;
    if (adres === "") adres = "Geen adres";
    document.getElementById("adres").innerHTML = adres;
    if (plaats === "") plaats = "Geen plaats";
    document.getElementById("plaats").innerHTML = plaats;
    document.getElementById("score").innerHTML = rating + "/10";
    if (termsconditions === undefined) termsconditions = "Niet aanvaard"
    document.getElementById("termsconditions").innerHTML = termsconditions;

}