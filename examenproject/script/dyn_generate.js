window.addEventListener('load',init);

class Product {
    constructor(categorie, naam, prijs, foto, alternatieveTekst, productpagina, filterklasse) {
        this.categorie = categorie;
        this.naam = naam;
        this.prijs = prijs;
        this.afbeelding = foto;
        this.alternatieveTekst = alternatieveTekst;
        this.productpagina = productpagina;
        this.filterklasse = filterklasse;


    }
}