# HotelGreetingFromJSON

## Timestamp & Development
Development time to MVP and Readme, 3 hours.

Features to implement next:
- Customizable Templates through GUI that can be written to JSON file.
- Conditional feature handling for additional parameters in Templates
- Salutation auto-assigning based on timestamp, rather than GUI manual dropdown.
- Modularize event handlers and render functions currently in 'client.js'
- Long-term storage method for Generated Messages, whether to JSON, or a database layer.
- Basic styling.

## Language & Design Choices
For this implementation I decided to use Javascript, Express, JQuery, and AJAX. I wanted a lightweight solution that could be stood up and evaluated quickly, with a barebones HTML GUI. While Express doesn't explicitly require an object relational model (ORM), I used that design pattern to keep all configurable parameters editable in JSON. JSON data is fetched by an AJAX HTTP GET request rather than reading directly from the file, because we can.

I considered writing a command line Windows Service in C#/.NET, but I preferred to show some basic web-enabled functionality. 

I also considered spinning up a React client so that I could bring in Material UI and showcase a more modern interface with data sources and state management, but if you want to see that level of functionality check out PackItApp on my github.

## Running
Clone down this repository into the editor of your choice. Assuming you have NPM already installed.
- 'npm install' to install Express dependency.
- 'npm start' to initialize client. 
- {PORT} Currently set to '5001'. Configurable on line 8 of 'server.js'
- navigate browser to 'localhost:{PORT}'
- use dropdowns to select Salutation, Guest, Company, and Template.
- Click 'Generate' to append the selections to a list at the bottom 
