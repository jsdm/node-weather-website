// This javascript runs in client browser (front-end), not in nodejs (backend)
// console.log('Client side javascript file is loaded!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

// messageOne.textContent = '';
// messageTwo.textContent = '';

weatherForm.addEventListener('submit', e => {
  e.preventDefault();
  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';
  const location = search.value;
  let url = '/weather?address=' + location;
  fetch(url).then(res => {
    res.json().then(data => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
