function renderProducts(productList) {
    const productListElement = document.getElementById('product-list');
    productListElement.innerHTML = "";
    
    productList.forEach(({ title, author, genre, image }) => {
        

        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
        <div class="book-card">
        <img src="${image}" alt="">
        <div class="book-info">
            <h3>${title}</h3>
            <p>${author}</p>
            <span class="genre">${genre}</span>
        </div>
    </div>
        `;

        productListElement.appendChild(productCard);
    });
}


const books = [
{   "id": 1,
    "title": "Swan Song",
    "author": "AElin Hilderbrand", 
    "genre": "Fiction",
    "Publish Date": "June 11, 2024",
    "image": "https://images-us.bookshop.org/ingram/9780316258876.jpg?height=500&v=v2-e1ea94acb65343ec0b7290c963c018f7",
},
{   "id": 2,
    "title": "The Perfect Couple",
    "author": "Elin Hilderbrand ", 
    "genre": "Mystery",
    "Publish Date": "February 12, 2019",
    "image": "https://images-us.bookshop.org/ingram/9780316375252.jpg?height=500&v=v2-9aaf45179d839600e654c2cec7915226",
},
{   "id": 3,
    "title": "This Bird Has Flown",
    "author": "Susanna Hoffs", 
    "genre": "Fiction",
    "Publish Date": "March 05, 2024",
    "image": "https://images-us.bookshop.org/ingram/9780316409414.jpg?height=500&v=v2-4f5a91085dae55ff6ab794880d64bd83",
},
{   "id": 4,
    "title": "Circe",
    "author": "Madeline Miller", 
    "genre": "Fantasy",
    "Publish Date": "April 14, 2020",
    "image": "https://images-us.bookshop.org/ingram/9780316556323.jpg?height=500&v=v2-078e1a91a397d76a6b47fce04e3cd3fe",
},
{   "id": 5,
    "title": "The Rumor",
    "author": "Elin Hilderbrand", 
    "genre": "Romance",
    "Publish Date": "April 16, 2024",
    "image": "https://images-us.bookshop.org/ingram/9780316578554.jpg?height=500&v=v2-5c1712793d0100921d9259aeddb31324",
},
{   "id": 6,
    "title": "Throne of the Fallen",
    "author": "Kerri Maniscalco", 
    "genre": "Fantasy Romance",
    "Publish Date": "October 03, 2023",
    "image": "https://images-us.bookshop.org/ingram/9780316557290.jpg?height=500&v=v2-6e2d027ece725e20459c0db680d9e321",
},
{   "id": 7,
    "title": "Where'd You Go, Bernadette",
    "author": "Maria Semple", 
    "genre": "Humor",
    "Publish Date": "April 02, 2013",
    "image": "https://images-us.bookshop.org/ingram/9780316204262.jpg?height=500&v=v2",
},
{   "id": 8,
    "title": "The Invitation",
    "author": "Lucy Foley", 
    "genre": "Historical Fiction",
    "Publish Date": "August 01, 2017",
    "image": "https://images-us.bookshop.org/ingram/9780316272902.jpg?height=500&v=v2",
},
{   "id": 9,
    "title": "How to Be Eaten",
    "author": "Maria Adelmann", 
    "genre": "Horror",
    "Publish Date": "July 25, 2023",
    "image": "https://images-us.bookshop.org/ingram/9780316450850.jpg?height=500&v=v2-a8a3eae9f201c33b88a3b930097a2ea4",
},
{   "id": 10,
    "title": "Good Night, Irene",
    "author": "Luis Alberto Urrea", 
    "genre": "Historical",
    "Publish Date": "June 04, 2024",
    "image": "https://images-us.bookshop.org/ingram/9780316265959.jpg?height=500&v=v2-16deedf26b7674190cf78534407b0e76",
},
];

renderProducts(books);