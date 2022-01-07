const menu = document.querySelector('ul.menu')

const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0
    }
]

//To Do

//render menu dynamically using JS not static html
function renderMenu(){
    const menuItemsString = menuItems.map((item)=>{
        //toFixed returns a string but using the urnary operator makes it a Number
        const dollars = +((item.price /100).toFixed(2))
        // const dollars = Math.floor(item.price/100)
        // console.log(typeof dollars)
        // const cents = (item.price % 100)
        // console.log(dollars, cents)
        return ` <li>
        <div class="plate">
          <img src="images/${item.image}" alt="${item.alt}" class="plate" />
        </div>
        <div class="content">
          <p class="menu-item">${item.name}</p>
          <p class="price">$${dollars}</p>
          <button class="add" onClick=(console.log("click"))>Add to Cart</button>
        </div>
      </li>`
    })
    menu.innerHTML= menuItemsString
}
    // same for cart items
renderMenu()