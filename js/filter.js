const data = [
    {
        id : 1,
        name : "Invicta Men's Pro Driver",
        img : "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price : 74,
        cat : "Dress"
    },
    {
        id : 2,
        name : "Invicta Men's Pro Driver",
        img : "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price : 74,
        cat : "Dress"
    },
    {
        id : 3,
        name : "Timex Men's Expedition Scout",
        img : "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price : 40,
        cat : "Sport"
    },
    {
        id : 4,
        name : "Breitling Superocen Heritage",
        img : "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price : 200,
        cat : "Luxury"
    },
    {
        id : 5,
        name : "Casio Classic Resin Strap",
        img : "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price : 16,
        cat : "Sport"
    },
    {
        id : 6,
        name : "Garmin Venu Smartwatch",
        img : "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price : 74,
        cat : "Casual"
    },
    {
        id : 7,
        name : "Timex Men's Expedition Scout",
        img : "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price : 40,
        cat : "Sport"
    },
    {
        id : 8,
        name : "Breitling Superocen Heritage",
        img : "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price : 200,
        cat : "Luxury"
    },
    {
        id : 9,
        name : "Invicta Men's Pro Driver",
        img : "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price : 74,
        cat : "Dress"
    },
    {
        id : 10,
        name : "Garmin Venu Smartwatch",
        img : "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price : 74,
        cat : "Casual"
    }
];

const productsContainer = document.querySelector('.products');
const categoriesContainer = document.querySelector('.cats');
const range = document.querySelector('.pricRange');
const priceValue = document.querySelector('.priceValue');
const searchInput = document.querySelector('.search');

const displayProducts = (filteredProducts)=>{
    productsContainer.innerHTML = filteredProducts.map(product=>`
    <div class="product">
      <img src= ${product.img} alt="">
      <span class="name">${product.name}</span>
      <span class="priceText">${product.price}</span>
   </div>
    `).join('');
}

displayProducts(data);

searchInput.addEventListener('keyup', (e)=>{
    const value = e.target.value;
    if(value){
        displayProducts(data.filter(item=>item.name.toLowerCase().indexOf(value) !== -1));
    }else{
        displayProducts(data);
    }
});

const setCategories = ()=>{
    const allCats = data.map(item=>item.cat);
    const categories = ["All", ...(allCats.filter((item, index)=> {return allCats.indexOf(item) === index}))];
    console.log(categories);

    categoriesContainer.innerHTML = categories.map(cat=>`
     <span class="cat">${cat}</span>
    `).join('');

    categoriesContainer.addEventListener('click', (e)=>{
        const selectedCat = e.target.textContent;
        selectedCat === "All" ? displayProducts(data) : displayProducts(data.filter(item=> item.cat === selectedCat));
    })
}


const setPrices = ()=>{
  const priceList = data.map((item)=> item.price);
  console.log(priceList);

  const minPrice = Math.min( ...priceList);
  const maxPrice = Math.max( ...priceList);
  console.log(maxPrice);

  document.querySelector('.priceRange').min = minPrice;
  document.querySelector('.priceRange').max = maxPrice;
  document.querySelector('.priceRange').value = maxPrice;
  document.querySelector('.priceValue').textContent = "$" + maxPrice

  document.querySelector('.priceRange').addEventListener("input", (e)=>{
    document.querySelector('.priceValue').textContent = '$' + e.target.value;
    displayProducts(data.filter(item=>item.price <= e.target.value));
  })

}
setPrices();

setCategories();
