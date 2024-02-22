
console.log("test 17");

function displayHome(){
    const divContent = document.querySelector("#content");
    let contentHome = document.createElement('div');
    contentHome.classList.add("contentHome")
    
    let imageChoucroute = document.createElement("div");
    imageChoucroute.classList.add('photo');
    contentHome.appendChild(imageChoucroute);
    let textIntro = document.createElement('div');
    textIntro.textContent = "Bienvenue chez les Croutons ! Plongez dans une expérience gustative inoubliable au cœur de l'Alsace. Notre restaurant dédié à la choucroute authentique propose des délices du terroir, préparés avec soin et amour. Découvrez la fusion parfaite entre le chou fermenté et des ingrédients locaux sélectionnés, créant des plats uniques qui sauront ravir toutes les papilles. Chez nous, la tradition rencontre l'authenticité pour offrir une cuisine alsacienne exceptionnelle. Venez savourer chaque bouchée, car chez chez les Croutons, chaque repas est une célébration de la richesse gastronomique de la région. Bon appétit !"
    textIntro.classList.add("intro");
    contentHome.appendChild(textIntro);

    divContent.replaceChildren(contentHome);
};


function displayMenu(){
    const divContent = document.querySelector("#content");
    let divMenu = document.createElement('div');
    let title = document.createElement('h2');
    title.textContent = "Nos plats";
    divMenu.appendChild(title);
    let menuText = document.createElement('ul');
    menuText.classList.add('intro');
    let itemsList = ['Tarte flambée traditionnelle - 9,50 €', 'Choucroute garnie - 16,90 €', "Baeckeoffe de la maison - 18,50 €", "Foie gras d'oie au Gewurztraminer - 12,90 €", 'Poulet Riesling - 15,90 €' ];
    for (let i = 0; i < itemsList.length; i++){
        var text = document.createTextNode(itemsList[i]);
        let items = document.createElement("li");
        items.appendChild(text);
        menuText.appendChild(items);
    }
    divMenu.appendChild(menuText);
    divContent.replaceChildren(divMenu);
}




function displayAbout(){
    const divContent = document.querySelector("#content");
    let aboutText = document.createElement("div");
    aboutText.textContent = "Chez les Croutons, la cuisine alsacienne est une affaire de famille. Chaque plat est une histoire transmise de génération en génération. Venez partager l'authenticité et la chaleur de notre héritage culinaire. Bienvenue dans notre chez-nous gastronomique !"
    aboutText.classList.add("intro");
    let horaire = ["horaire d'ouverture : ", "Du mardi au dimanche", "Déjeuner : 12h00 - 14h00", "Dîner : 18h30 - 22h00", " ", "Fermé le lundi"];
    for (let i = 0; i < horaire.length; i++){
        var text = document.createTextNode(horaire[i]);
        let items = document.createElement("li");
        items.appendChild(text);
        aboutText.appendChild(items);
    }

    divContent.replaceChildren(aboutText);
}
  