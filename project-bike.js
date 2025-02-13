function showSidebar(){
    const sideBar = document.querySelector('.sideBar');
    sideBar.style.display = 'block'
}
function hideSidebar(){
    const sideBar = document.querySelector('.sideBar');
    sideBar.style.display = 'none'
}

//                                                                              banner img
const imges = document.querySelectorAll('.img');
let currentImage = 0;

setInterval(()=>{
    imges[currentImage].classList.add('hidden');
    currentImage = (currentImage + 1) % imges.length;
    imges[currentImage].classList.remove('hidden');
}, 2000);

//                                                                                  contact page
function validateForm() {
        // Get the form elements
        const name = document.querySelector('input[name="name"]').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('mail').value;
        const errorDiv = document.querySelector('.error');
        const error1Div = document.querySelector('.error1');
        const error2Div = document.querySelector('.error2');

    // Clear previous error messages
    errorDiv.textContent = '';
    error1Div.textContent = '';
    error2Div.textContent = '';

    // Validate name
    if (name.trim() === '') {
        errorDiv.textContent += 'Name is required ! ';
        return false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
        error1Div.textContent += 'Email cannot be blank !';
        return false;
    } else if (!emailPattern.test(email)) {
        error1Div.textContent += 'Please enter a valid email ! ';
        return false;
    }

    // // Validate message
    if (message.trim() === '') {
        error2Div.textContent += 'Message is required. ';
        return false;
    }

    // If all validations pass
    return true;
}

// Modify the button to validate before redirecting
document.querySelector('.but button:first-child').onclick = function() {
    if (validateForm()) {
        // location.href = 'contact.html';
    }
};



//                                                                  access navbar
// document.addEventListener('scroll',()=>{
//     const navbar = document.querySelectorAll('#navbar');

//     if (window.scrollY>50) {
//         navbar.classList.add('scrolled');
//         // navbar.style.backgroundColor='red'
//     }
//     else{
//         navbar.classList.remove('scrolled')
//     }
// })

// document.getElementById('form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Clear previous error messages
//     document.querySelector('.error').textContent = '';
//     document.querySelector('.error1').textContent = '';
//     document.querySelector('.error3').textContent = '';

//     // Get form values
//     const name = document.querySelector('input[name="name"]').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const phone = document.getElementById('number').value.trim();

//     let valid = true;

//     // Validate name
//     if (name === '') {
//         document.querySelector('.error').textContent = 'Name is required.';
//         valid = false;
//     }

//     // Validate email
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email === '') {
//         document.querySelector('.error1').textContent = 'Email is required.';
//         valid = false;
//     } else if (!emailPattern.test(email)) {
//         document.querySelector('.error1').textContent = 'Please enter a valid email address.';
//         valid = false;
//     }

//     // Validate phone number
//     if (phone === '') {
//         document.querySelector('.error3').textContent = 'Phone number is required.';
//         valid = false;
//     } else if (phone.length < 10) {
//         document.querySelector('.error3').textContent = 'Phone number must be at least 10 digits.';
//         valid = false;
//     }

//     // If all fields are valid, you can submit the form or perform further actions
//     if (valid) {
//         // Form is valid, you can submit it or do something else
//         alert('Form submitted successfully!');
//         // Uncomment the line below to actually submit the form
//         // this.submit();
//     }
// });

// const btnCart = document.querySelector('#cart-icon');
// const cart = document.querySelector('.cart');
// const btnClose = document.querySelector('#cart-close');

// btnCart.addEventListener('click', () => {
//     cart.classList.add('cart-active');
// });

// btnClose.addEventListener('click', () => {
//     cart.classList.remove('cart-active');
// });

// document.addEventListener('DOMContentLoaded', loadFood);

// function loadFood() {
//     loadContent();
// }

// function loadContent() {
//     // Remove Food items from Cart
//     let btnRemove = document.querySelectorAll('.cart-remove');

//     btnRemove.forEach((btn) => {
//         btn.addEventListener('click', removeItem);
//     });

//     //Porduct Item Change Event :
//     let qtyElemnets= document.querySelectorAll('.cart-quantity');

//     qtyElemnets.forEach((input) => {
//         input.addEventListener('change', changeQty);
//     });

// }
