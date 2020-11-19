//Side Filter Column
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
//
//

//Magnific Pop-UP
$(".container .gallery-row .all .test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
});
//
//

//Isotope
//$(document).ready(function(){
  //let $chkbox = $('.filter-column .content .form-check input');

//   $('#searchbtn').click(function(){
//     getCheckedCheckBoxes();
//   });





//   var getCheckedCheckBoxes = function () {
//       var result = $('.filter-column .content .form-check .form-check-input : checked');
//       if (result.length > 0) {
//         var resultString = result.length + " checkboxe(s) Checked <br />";
//         result.each( function (){
//           resultString += $(this).val() + "<br/>";
//         });
//         $('#divResult').html(resultString);
//       }
//       else {
//         $('#divResult').html("No checkbox checked");
//       }
//   };
  
// });