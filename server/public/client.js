$(document).ready(onReady);

// Initial Render functions
function onReady() {
  renderGuests();
  renderCompanies();
  renderTemplates();
  renderSalutations();
}


  function renderSalutations() {
    $.ajax({
      method: 'GET',
      url: '/salutations'
    }).then((response) => {
      let $salutations = $('#time-select')
      $salutations.empty();
      
      for (let item of response) {
        $salutations.append(`
          <option value=${item.id}>${item.salutation}</option>
        `)
      }
    }).catch((error) => {
      console.error(error);
    })
  }

  function renderGuests() {
    $.ajax({
      method: 'GET',
      url: '/guests'
    }).then((response) => {
      let $guests = $('#guest-select');
      $guests.empty();
      
      for (let item of response) {
        $guests.append(`
          <option value=${item.id}>${item.firstName} ${item.lastName}</option>
        `)
      }
    }).catch((error) => {
      console.error(error);
    })
  }

  function renderCompanies() {
    $.ajax({
      method: 'GET',
      url: '/companies'
    }).then((response) => {
      let $companies = $('#company-select')
      $companies.empty();
      for (let item of response) {
        $companies.append(`
          <option value=${item.id}>${item.company}</option>
        `)
      }
    }).catch((error) => {
      console.error(error);
    })
  }

  function renderTemplates() {
    $.ajax({
      method: 'GET',
      url: '/templates'
    }).then((response) => {
      let $templates = $('#template-select')
      $templates.empty();
      for (let item of response) {
        $templates.append(`
          <option value=${item.id}>${item.template}</option>
        `)
      }
    }).catch((error) => {
      console.error(error);
    })
  }


//Optional jquery approach, prefer the above AJAX
// var url = 'localhost:5001/salutations';
//     $.getJSON(url, function (data) {
//       console.log(data);
//       $.each(data, function(index, value) {
//         console.log(value);
//         $('#time-select').append('<option value="' + value.id + '">' + value.salutation + '</option>');
//       });
//     });