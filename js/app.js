// view the images on the page so that I can browse the photo collection.

// the photo gallery should display all of the images in the gallery

// Use AJAX, specifically $.ajax(), to read the provided JSON file.
// Each object should become a new instance of a constructor function. Refer to the data to determine the necessary properties.
// Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM.

// GOAL : Render each item and their info to the index.html page. 

let allHorns = [];

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
  const $newSection = $(`<section> ${theTemplate} </section>`);
  // Name of creature 
  $newSection.find('h2').text(this.title);
  $newSection.find('p').text(this.description);
  $newSection.find('img').attr('src', this.image_url);
  $('main').append($newSection);
}

$.ajax('data/page-1.json', {method: 'GET', dataType: 'JSON'})
  .then( hornedBeast => {
    console.log('this is the data', hornedBeast);
    hornedBeast.forEach(value => {
      new HornBeing(value).render();
    })
      
    });

// I need to render the object instances to the index.html page.
  // prototype
    // make a copy
    // fill it with my object instance
    // append it to the DOM 

// Select all of the HTML in the template

// Create a new section

// fill my section with the HTML template

// fill the <h2> with the name

// fill the <p> with hobbies

// fill the <src> of the image with image_url

// append to the DOM

// I need to get the data.JSON and make new object instances with it

