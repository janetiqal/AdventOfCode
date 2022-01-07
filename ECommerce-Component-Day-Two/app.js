const menu = document.querySelector('ul.menu')
const cart = document.querySelector('.cart-summary')

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
const renderMenu = () => {
    const menuItemsString = menuItems.map((item, index) => {
        //toFixed returns a string but using the urnary operator makes it a Number
        const dollars = +((item.price / 100).toFixed(2))
        // console.log(typeof dollars)
        // const dollars = Math.floor(item.price/100)
        // const cents = (item.price % 100)
        // console.log(dollars, cents)

        //check to see if item is in the cart already, if so change the add to cart button to In Cart Btn
        const inCart = item.count > 0
        return `
         <li>
        <div class="plate">
          <img src="images/${item.image}" alt="${item.alt}" class="plate" />
        </div>
        <div class="content">
          <p class="menu-item">${item.name}</p>
          <p class="price">$${dollars}</p>
          ${!inCart ? `  <button class="add" onClick=addToCart(${index})>Add to Cart</` : `<button class="in-cart" >
          <img src="images/check.svg" alt="Check" />
          In Cart
      </button>` }
        </div>
      </li>`
    }).join('')
    menu.innerHTML = menuItemsString;
}
// same for cart items
const renderCart = () => {
    
    const cartItemsString = menuItems.map((item, index) => {
        if(item.count === 0) return '';
        const dollars = +((item.price / 100).toFixed(2))
        const totalDollars = +(((item.price * item.count) /100).toFixed(2))
        console.log(totalDollars)
        return`
         <li>
        <div class="plate">
          <img src="images/${item.image}" alt="${item.alt}"  />
          <div class="quantity">${item.count}</div>
        </div>
        <div class="content">
          <p class="menu-item">${item.name}</p>
          <p class="price">$${dollars}</p>
        </div>
        <div class="quantity__wrapper">
        <button class="decrease" onClick = decreaseCountOfItem(${index})>
          <img src="images/chevron.svg" />
        </button>
        <div class="quantity">${item.count}</div>
        <button class="increase" onClick =increaseCountOfItem(${index})>
          <img src="images/chevron.svg" />
        </button>
      </div>
        <div class="subtotal">
          $${dollars}
        </div>
      </li> `
    }
    ).join('')
    cart.innerHTML = cartItemsString;
    console.log(cart)
    
}

const decreaseCountOfItem = (i) => {
    menuItems[i].count--;
    //call renderCart function to update the cart otherwise if user hits count 0 it stays in the cart
    renderCart();
    if (menuItems[i].count === 0) {
        renderMenu()
    }
}
const increaseCountOfItem = (i) => {
    menuItems[i].count++
    renderCart();

}
const addToCart = (i) => {
    //when clicked, count goes up by one
    menuItems[i].count++
    console.log(menuItems[i])
    renderCart();
    renderMenu();
}

renderMenu()