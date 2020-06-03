'use strict'

let allHorns = [];
let keywords = [];


function HornBeing (obj) {
  this.image_url= obj.image_url;
  this.title= obj.title;
  this.description= obj.description;
  this.keyword= obj.keyword;
  this.horns= obj.horns;
  allHorns.push(this);
} 

HornBeing.prototype.render=function(){
  console.log('I am the render function');
  const theTemplate = $('#photo-template').html(); 
  const $newSection = $(`<section class=${this.keyword
  }> ${theTemplate} </section>`);
  // Name of creature 
  $newSection.find('h2').text(this.title);
  $newSection.find('p').text(this.description);
  $newSection.find('img').attr('src', this.image_url);
  $('main').append($newSection);
}

const getKeywords = () =>{
  allHorns.forEach(beast => {
    keywords.push(beast.keyword);
  }) 
}

const dropDown = () =>{
  let unique = [];
  // this forEach loop is filtering out duplicates
  keywords.forEach(beast => {
    let present = unique.includes(beast)
    if (!present) {
      unique.push(beast);
    }
  })
  unique.forEach(keyword => {
    const $newOption = $(`<option value=${keyword}> ${keyword} </option>`); 
    $('#dropdown-template').append($newOption);
  })
}
// on click, display image that correlates with the keyword. 

// event listener
$('select').on('change', function(){
  let $selection = $(this).val();
  console.log($selection)
  $('section').hide()

$(`section[class="${$selection}"]`).show()
})

// var x = document.getElementById("banana");
// x.onclick = function(){
//   document.body.innerHTML = Date();
// }

// ${"#banana"}.click(function(){
//   $("body").html(date());
// });

// HornBeing.prototype.dropdown=function(){
//   console.log('I am the dropdown menu');
//   const myTemplate = $('#dropdown-template').html();
//   const $newOption = $(`<option> ${myTemplate} </option>`);
//   $newOption.find('option').text(this.keyword);
//   $('header').append($newOption);
// }

$.ajax('data/page-1.json', {method: 'GET', dataType: 'JSON'})
  .then( hornedBeast => {
    console.log('this is the data', hornedBeast);
    hornedBeast.forEach(value => {
      new HornBeing(value).render();
    })
    getKeywords();
    dropDown();
});

// As a user, I want to be able to filter the images so that I can view only images that match a keyword.
// What are we going to implement?

// Given that a user clicks on the dropdown menu When the user selects one of the options Then only the images whose keyword matches the option should be displayed

// How are we implementing it?

// Create a <select> element which contains unique <option> elements extracted dynamically from the JSON file, one for each keyword.
// Use an event handler to respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen.

// we need to render dropdown list items through the DOM 
// 