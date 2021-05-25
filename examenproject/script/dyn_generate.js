window.addEventListener('load', init);

let categorieen = [];

class Product {
    constructor(data) {
        this.categorie = data[0];
        this.naam = data[1];
        this.prijs = data[2];
        this.afbeelding = data[3];
        this.alternatieveTekst = data[4];
        this.productpagina = data[5];
        this.filterklasse = data[6];
        this.content = document.createElement('li');
    }

    maakProductAan() {
        let newLi = document.createElement('li');
        let liclassName = "filteralles " + this.filterklasse;
        newLi.setAttribute('class', liclassName);
        let newSection = document.createElement('section');
        let newImg = document.createElement('img');
        let imgSrc = "../media/producten/miniatuur/" + this.categorie + "/" + this.afbeelding + ".webp";
        newImg.setAttribute('src', imgSrc);
        newImg.setAttribute('alt', this.alternatieveTekst);
        let newH4 = document.createElement('h4');
        newH4.innerText = this.naam;
        let newp = document.createElement('p');
        newp.innerHTML = "&euro;" + this.prijs;

        if (this.productpagina !== ""){
            let newA = document.createElement('a');
            let aHref = "productinfo" + this.categorie + "sokken/" + this.productpagina + ".html"
            newA.setAttribute('href', aHref);
            newA.appendChild(newImg);
            newA.appendChild(newH4);
            newA.appendChild(newp);
            newSection.appendChild(newA);
        } else {
            newSection.appendChild(newImg);
            newSection.appendChild(newH4);
            newSection.appendChild(newp);
        }

        newLi.appendChild(newSection);
        this.content = newLi;
    }

    getContent(){
        return this.content;
    }
}

class ProductCategorie{
    constructor(naam) {
        this.naam = naam;
        this.producten = [];
        this.content = document.createElement('section');
    }

    voegProductToe(product){
        this.producten.push(product);
    }

    genereerProductPagina(){
        let newSection = document.createElement('section');
        let newH3 = document.createElement('h3');
        newH3.innerText = this.naam.charAt(0).toUpperCase() + this.naam.slice(1) + "sokken";
        let newUl = document.createElement('ul');
        for (let i = 0; i < this.producten.length; i++) {
            newUl.appendChild(this.producten[i].getContent());
        }
        newSection.appendChild(newH3);
        newSection.appendChild(newUl);

        this.content = newSection;

    }

    getContent(){
        return this.content;
    }

    reverseProducten(){
        this.producten.reverse();
    }
}

function init() {
    //Alle producten inladen vanuit array (eenmalig)
    let categorieNamen = [];
    for (let i = 0; i < productData.length; i++) {
        if (!categorieNamen.includes(productData[i][0])){
            categorieNamen.push(productData[i][0]);
        }
    }
    for (let i = 0; i < categorieNamen.length; i++) {
        let cat = new ProductCategorie(categorieNamen[i]);
        for (let j = 0; j < productData.length; j++) {
            if(productData[j][0] === categorieNamen[i]){
                let prod = new Product(productData[j]);
                prod.maakProductAan();
                cat.voegProductToe(prod);
            }
        }
        categorieen.push(cat);
    }
    console.log(categorieen);

    //Knoppen onder de filters
    let plaatsFilters = document.getElementById("filters");
    let newH3 = document.createElement('h3');
    newH3.innerText = "Pagina instellingen";
    let newForm = document.createElement('form');
    newForm.setAttribute('method', "get");
    newForm.setAttribute('action', "product.html");
    let newButtonStaticpage = document.createElement('button');
    newButtonStaticpage.setAttribute('type', "submit");
    newButtonStaticpage.innerText = "Statische pagina";
    newForm.appendChild(newButtonStaticpage);
    let newButtonReverse = document.createElement('button');
    newButtonReverse.innerText = "Reverse";
    newButtonReverse.addEventListener('click', reverse);
    plaatsFilters.appendChild(newH3);
    plaatsFilters.appendChild(newForm);
    plaatsFilters.appendChild(newButtonReverse);

    let newSectionOpties = document.createElement('section');
    newSectionOpties.appendChild(newH3);
    newSectionOpties.appendChild(newForm);
    newSectionOpties.appendChild(newButtonReverse);
    plaatsFilters.appendChild(newSectionOpties);

    //Alles samenvoegen
    let plaatsMain = document.getElementById("producten_main");
    let productSection = document.createElement('section');
    productSection.setAttribute('id', "producten");
    let hiddenH2 = document.createElement('h2');
    hiddenH2.innerText = "Ons aanbod";
    hiddenH2.setAttribute('class', "hiddentitle");
    productSection.appendChild(hiddenH2);

    //Categorieen + producten tonen op pagina
    for (let i = 0; i < categorieen.length; i++) {
        categorieen[i].genereerProductPagina();
        productSection.appendChild(categorieen[i].getContent());
    }

    plaatsMain.appendChild(productSection);
}

function reverse(){
    let plaats = document.getElementById("producten");
    plaats.innerHTML = "";
    for (let i = 0; i < categorieen.length; i++) {
        categorieen[i].reverseProducten();
        categorieen[i].genereerProductPagina();
    }
    categorieen.reverse();
    for (let i = 0; i < categorieen.length; i++) {
        plaats.appendChild(categorieen[i].getContent());
    }
    console.log(categorieen);

}
