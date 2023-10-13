// $( document ).ready(function() {


// urlpath = window.location.pathname;

// shortcode = urlpath.substring(4);

// console.log(shortcode);

// $('#sfield').val(shortcode);

// $.ajax({
//   type: "GET",
//   url: "https://api.plmhelp.com/data/?shortcode=" + shortcode,
//   success: function(data) {
//     if( data.error == false ){
//       //success, update form fields
//       console.log("data success");
//       console.log(data);

//       $('#firstName').val(data.info.firstName);
//       $('#lastName').val(data.info.lastName);
//       $('#phone').val(data.info.phone);
//       $('#email').val(data.info.email);
//      $('#claimType').val(data.info.claimType);

//     } else {
//       console.log("some issue or error?");
 
//       //we are just redirecting for now
//      window.location.replace("https://plmhelp.com/error/");
//     }
//   },

//   error: function(data) {

//     console.log("error with the data request");
//   }


// });


// $("#plmForm").submit(function (e) {
//   console.log("form submission attempt");
//   e.preventDefault();

//   $.ajax({
//     type: "POST",
//     url: "https://api.plmhelp.com/contact/",
//     data: $("#plmForm").serialize(),
//     success: function (data) {
//       console.log(data);
//       console.log("successful post");
//       console.log(data);

//       if (data.error == false) {
//         // Create and show the custom popup
//         var popup = document.createElement("div");
//         popup.className = "popup";
//         // Set the content of the popup
//         popup.innerHTML = `
//           <div class='popImage'><img src='./assets/images/nav-logo.svg' alt='logo'></div>
//           <div class='popHeader'>
//             <p style='color:white'>A verification link has been emailed to you.</p>
//             <p style='color:white'>Please check your email to proceed to the next step.</p>
//           </div>`;

//         var closeButton = document.createElement("button");
//         closeButton.textContent = "Close";
//         closeButton.className = "ButtonClose";
//         closeButton.onclick = function () {
//           // Remove the popup when the close button is clicked
//           popup.remove();
//           console.log("this is the close");
//         };

//         // Append the close button to the popup
//         popup.appendChild(closeButton);

//         // Append the popup to the body
//         document.body.appendChild(popup);

//         // Reset the form fields
//         $("#plmForm").trigger('reset');
//       }

//       if (data.error == true) {
//         console.log('API Error');
//       }
//     },
//     error: function (data) {
//       console.log('Error submitting your inquiry, please check your connection!');
//     }
//   });

//   return false;
// });



// });

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 20,
//   // autoplay: {
//   //   delay: 3000,
//   // },
//   loop: true, // Set loop to true for infinite loop

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   // Responsive breakpoints
//   breakpoints: {
//     320: {
//       slidesPerView: 1,

//     },
//     550: {
//       slidesPerView: 1,

//     },
//     768: {
//       slidesPerView: 2,

//     },
//     1000: {
//       slidesPerView: 2,

//     },
//     1200: {
//       slidesPerView: 3,

//     },
//     1500: {
//       slidesPerView: 3,

//     },
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });




