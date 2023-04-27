$(document).ready(onReady);

// Initial Render functions
function onReady() {
  // --- Render Functions ---
  renderGuests();
  renderCompanies();
  renderTemplates();
  renderSalutations();

  // --- Event Handlers ---
  $('#generate-message').on('click', generateMessage);

  // --- JSON Cache variables ---
  let cachedGuests;
  let cachedCompanies;
}

// --- Declaring Render Functions ---
  function renderSalutations() {
    $.ajax({
      method: 'GET',
      url: '/salutations'
    }).then((response) => {
      let $salutations = $('#time-select')
      $salutations.empty();
      $salutations.append(`
        <option key=${0}> - Select Salutation - </option>
      `)

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
      $guests.append(`
        <option key=${0}> - Select Guest - </option>
      `)

      // Stash to cache
      cachedGuests = response;
      console.log(cachedGuests);

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
      $companies.append(`
        <option key=${0}> - Select Company - </option>
      `)

      // Stash to Cache
      cachedCompanies = response;
      console.log(cachedCompanies);

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
      $templates.append(`
        <option key=${0}> - Select Template - </option>
      `)
      
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

// --- Event Handler Functions ---

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
function populateTemplate(salutation, company, guest, templt){
  
  let replaceSalutation = templt.replace("SALUTATION", salutation);
  let replaceGuest = replaceSalutation.replace("GUEST", guest);
  let finalString = replaceGuest.replace("COMPANY", company);
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