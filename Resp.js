/*burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
nav = document.querySelector('.nav')



burger.addEventListener('click', ()=>{
    
    nav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

    burger.classList.toggle("active");
    nav.classList.toggle("active");
})   */



(function($) { 
  $(function() { 

    //  open and close nav 
    $('#navbar-toggle').click(function() {
      $('nav ul').slideToggle();
    });


    // Hamburger toggle
    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });


    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      // Close dropdown when select another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });


    // Click outside the dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navbar-dropdown').hide();
    });
  }); 
})(jQuery); 


const form = document.getElementById("form");
const username = document.getElementById("username");

const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();

});

const setError = (element, message) => {
  const formfield = element.parentElement;
  const errorDisplay = formfield.querySelector('.error');

  errorDisplay.innerText = message;
  formfield.classList.add('error');
}  

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();


if (usernameValue === '') {
 setError(username, 'Username is required');
}
else
{
  console.log('User Name: ' + usernameValue);
}



if (emailValue === "") {
  setError(email, 'Email is required');
}
else
{
  console.log('Email: ' + emailValue);
}



};  


// aos animation

AOS.init();


AOS.init({
duration: 800,  // Animation duration in milliseconds
offset: 200     // Offset (in pixels) from the original trigger point
});

AOS.init({
useClassNames: true,  // Enables the use of classes for animation targets
initClassName: 'aos-animate', // Class name to be animated

});    
