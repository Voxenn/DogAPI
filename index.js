'use strict';
const url = 'https://dog.ceo/api/breeds/image/random';

function getDogImages(dogCount) {
  fetch(`${url}/${dogCount}`)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson))
  .catch(error => alert('There was an issue retrieving your doggo. :-('));
}

function displayResults(responseJson){
  console.log(responseJson);
  $('section').removeClass('hidden');
  $('section').empty();
  //replace the existing image(s) with the new image(s)
  for (let message in responseJson.message) {
        $('section').append(`<img src="${responseJson.message[message]}" class="results-img">`)
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const dogCount = $("#dog-count").val();
    getDogImages(dogCount);
  })
}

$(document).ready(watchForm);
