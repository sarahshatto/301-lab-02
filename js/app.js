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

HornBeing.prototype.toHTML = function(){
  let template = $('#photo-template').html();
  let html = Mustache.render(template, this);
  $('main').append(html);
}

const getKeywords = () =>{
  allHorns.forEach(beast => {
    keywords.push(beast.keyword);
  })
}

const dropDown = () =>{
  $('#dropdown-template').empty();
  let unique = [];

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

const newPage = $('<a> "Next Page" </a>');
$('#pagination').append(newPage);

$('select').on('change', function(){
  let $selection = $(this).val();
  console.log($selection)
  $('section').hide()

  // $(`section[class="${$selection}"]`).show()
  $(`.${$selection}`).show()
})


function dataSet1() {
  $.ajax('data/page-1.json', {method: 'GET', dataType: 'JSON'})
    .then( hornedBeast => {
      console.log('this is the data', hornedBeast);
      hornedBeast.forEach(value => {
        new HornBeing(value).toHTML();
      })
      getKeywords();
      dropDown();
    });
}

function dataSet2() {
  $.ajax('data/page-2.json', {method: 'GET', dataType: 'JSON'})
    .then( hornedBeast => {
      console.log('this is the data', hornedBeast);
      hornedBeast.forEach(value => {
        new HornBeing(value).toHTML();
      })
      getKeywords();
      dropDown();
      const firstPage = $('<a> "home" </a>');
      $('#pagination2').append(firstPage);
    });
}


$(window).on('load', function() {
  dataSet1();
})

$('#pagination').on('click', function(){
  console.log(event);
  allHorns = [];
  $('section').empty();
  dataSet2();

})

$('#pagination2').on('click', function(){
  console.log(event);
  allHorns = [];
  $('section').empty();
  dataSet1();
})
