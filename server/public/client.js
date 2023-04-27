$(document).ready(onReady);

// Initial Render functions
function onReady() {
  // --- Render Functions ---
  renderGuests();
  renderCompanies();
  renderTemplates();
  renderSalutations();

  // --- Click Handlers ---
  $('#generate-message').on('click', generateMessage);
}

// --- Declaring Render Functions ---
  function renderSalutations() {
    $.ajax({
      method: 'GET',
      url: '/salutations'
    }).then((response) => {
      let $salutations = $('#time-select')
      $salutations.empty();
      
      for (let item of response) {
        $salutations.append(`
          <option key=${item.id} value="${item.salutation}">${item.salutation}</option>
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
          <option key=${item.id} value="${item.firstName} ${item.lastName}">${item.firstName} ${item.lastName}</option>
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
          <option key=${item.id} value="${item.company}">${item.company}</option>
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
          <option key=${item.id} value="${item.template}">${item.template}</option>
        `)
      }
    }).catch((error) => {
      console.error(error);
    })
  }
// --- End Render Functions ---

// --- Click Handler Functions ---

  function generateMessage() {
    let selectedSalutation = $('#time-select').val();
    let selectedCompany = $('#company-select').val();
    let selectedGuest = $('#guest-select').val();
    let selectedTemplate = $('#template-select').val();

    $('#messages').append(`
      <li> ${populateTemplate(selectedSalutation, selectedCompany, selectedGuest, selectedTemplate)} </li>
    `)


  }

// --- End Click Handler Functions ---

// --- Template Logic ---
function populateTemplate(salut, comp, gst, templt){
  // let salutation = salut;
  // let company = comp;
  // let guest = gst;
  // let finalString = templt;
  
  let replaceSalutation = templt.replace("SALUTATION", salut);
  console.log(replaceSalutation);
  let replaceGuest = replaceSalutation.replace("GUEST", gst);
  let finalString = replaceGuest.replace("COMPANY", comp);
  console.log(finalString);
  return finalString;
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