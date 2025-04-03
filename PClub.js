const products = [
    { id: 1, name: "NITK", imgSrc: "./images/1.jpeg", category: "collage" , caption: "Hello"},
    { id: 2, name: "NITK",  imgSrc: "./images/2.jpeg", category: "collage", caption: "Hello"},
    { id: 3, name: "NITK",  imgSrc: "./images/3.jpeg", category: "collage", caption: "Hello"},
    { id: 4, name: "NITK", imgSrc: "./images/4.jpeg", category: "collage" , caption: "Hello"},
    { id: 5, name: "NITK",  imgSrc: "./images/5.jpeg", category: "collage", caption: "Hello"},
    { id: 6, name: "NITK",  imgSrc: "./images/6.jpeg", category: "collage", caption: "Hello"},
    { id: 7, name: "NITK", imgSrc: "./images/7.jpeg", category: "collage" , caption: "Hello"},
    { id: 8, name: "NITK",  imgSrc: "./images/8.jpeg", category: "Beach", caption: "Hello"},
    { id: 9, name: "NITK",  imgSrc: "./images/9.jpeg", category: "collage", caption: "Hello"},
    { id: 10, name: "NITK", imgSrc: "./images/10.jpeg", category: "collage" , caption: "Hello"},
    { id: 11, name: "NITK",  imgSrc: "./images/11.jpeg", category: "collage", caption: "Hello"},
    { id: 12, name: "NITK",  imgSrc: "./images/12.jpeg", category: "Engi", caption: "Hello"},
    { id: 13, name: "NITK", imgSrc: "./images/13.jpeg", category: "Inci" , caption: "Hello"},
    { id: 14, name: "NITK",  imgSrc: "./images/14.jpeg", category: "Engi", caption: "Hello"},
    { id: 16, name: "NITK",  imgSrc: "./images/16.jpeg", category: "Beach", caption: "Hello"},
    { id: 17, name: "NITK", imgSrc: "./images/17.jpeg", category: "Beach" , caption: "Hello"},
    { id: 18, name: "NITK",  imgSrc: "./images/18.jpeg", category: "Beach", caption: "Hello"},
    { id: 19, name: "NITK",  imgSrc: "./images/19.jpeg", category: "Beach", caption: "Hello"},
    { id: 20, name: "NITK", imgSrc: "./images/20.jpeg", category: "Beach" , caption: "Hello"},
    { id: 21, name: "NITK",  imgSrc: "./images/21.jpeg", category: "collage", caption: "Hello"},
    { id: 15, name: "NITK",  imgSrc: "./images/15.jpeg", category: "Beach", caption: "Hello"},
    { id: 22, name: "NITK", imgSrc: "./images/22.jpeg", category: "Engi" , caption: "Hello"},
    { id: 23, name: "NITK",  imgSrc: "./images/23.jpeg", category: "Engi", caption: "Hello"},
    { id: 24, name: "NITK",  imgSrc: "./images/24.jpeg", category: "Engi", caption: "Hello"}
];

function removeProducts() {
    document.querySelectorAll(".product").forEach(el => el.remove());
}

function loadProducts_collage() {
    const container = document.querySelector(".grid"); // Selects the first element with class "grid"
    
    products.forEach(product => 
        {
            if(product.category==="collage")
            {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const img = document.createElement("img");
        img.src = product.imgSrc;
        img.alt = product.name;
        img.title= product.caption;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const url = document.createElement("p");
        url.innerHTML="URL:" + product.imgSrc;

        const capt=document.createElement("div");
        capt.textContent="This is caption";
        capt.classList.add("capt");


        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(url);
        productDiv.appendChild(capt);

        container.appendChild(productDiv);
            }
    });
}



function loadProducts_Beach() {
    const container = document.querySelector(".grid"); // Selects the first element with class "grid"
    
    products.forEach(product => 
        {
            if(product.category==="Beach")
            {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const img = document.createElement("img");
        img.src = product.imgSrc;
        img.alt = product.name;
        //img.title= product.caption;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
       // price.textContent = `$${product.price}`;

       const url = document.createElement("p");
        url.innerHTML="URL:" + product.imgSrc;


        const capt=document.createElement("div");
        capt.textContent="This is caption";
        capt.classList.add("capt");


        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(url);
        productDiv.appendChild(capt);

        container.appendChild(productDiv);
            }
    });
}

function loadProducts() {
    const container = document.querySelector(".grid"); // Selects the first element with class "grid"
    
    products.forEach(product => 
        {     
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const img = document.createElement("img");
        img.src = product.imgSrc;
        img.alt = product.name;
        //img.title= product.caption;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const url = document.createElement("p");
        url.innerHTML="URL:" + product.imgSrc;



        const capt=document.createElement("div");
        capt.textContent="This is caption";
        capt.classList.add("capt");


        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(url);
        productDiv.appendChild(capt);

        container.appendChild(productDiv);
            }
    );
}

// Call the function to load products
loadProducts();

function loadProducts_Engi() {
    const container = document.querySelector(".grid"); // Selects the first element with class "grid"
    
    products.forEach(product => 
        {
            if(product.category==="Engi")
            {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const img = document.createElement("img");
        img.src = product.imgSrc;
        img.alt = product.name;
        img.title= product.caption;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const url = document.createElement("p");
        url.innerHTML="URL:" + product.imgSrc;

        const capt=document.createElement("div");
        capt.textContent="This is caption";
        capt.classList.add("capt");


        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(url);
        productDiv.appendChild(capt);

        container.appendChild(productDiv);
            }
    });
}

function loadProducts_Inci() {
    const container = document.querySelector(".grid"); // Selects the first element with class "grid"
    
    products.forEach(product => 
        {
            if(product.category==="Inci")
            {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const img = document.createElement("img");
        img.src = product.imgSrc;
        img.alt = product.name;
        img.title= product.caption;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const url = document.createElement("p");
        url.innerHTML="URL:" + product.imgSrc;

        const capt=document.createElement("div");
        capt.textContent="This is caption";
        capt.classList.add("capt");


        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(url);
        productDiv.appendChild(capt);

        container.appendChild(productDiv);
            }
    });
}