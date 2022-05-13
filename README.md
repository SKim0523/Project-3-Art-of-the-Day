# Project-3-Art-of-the-Day
React Frontend Project

## Project Description:
'Art of the Day' app provides users an opportunity to learn about a piece of new art work everyday by retrieving and displaying a random art from the Art Institute of Chicago API. Users can click on the art to see detail information on the art. 

## Wireframes:
![image](https://user-images.githubusercontent.com/79298250/168385781-5ed81180-a1c9-47a4-b854-e3302b420e7e.png)
![image](https://user-images.githubusercontent.com/79298250/168385819-c327e46f-b030-493c-9024-2c97db7d121b.png)

## User Stories:

### MVP User Stories
- As a user, I want to see a random piece of art for the day on the Home page.
- As a user, I want to click on the art to view additional details about it, including title of the art, production region, production year, artist information (name, year lived), medium and style.

### Post MVP Stretch Goals
- As a user, I want to enter a search term in a search box to retrieve relevant art works. 
-  As a user, I want to click on an individual art in the search result to view additional details about it, including title of the art, production region, production year, artist information (name, year lived),  medium and style.
- As a user, I want to have an option to view a slide show of arts that I searched with the key word that I entered in the search box.

## API
https://api.artic.edu/docs/#introduction
 
### Keyword Search
https://api.artic.edu/api/v1/artworks/search?q=flowers
<img width="526" alt="Screen Shot 2022-05-13 at 3 56 32 PM" src="https://user-images.githubusercontent.com/79298250/168386442-b627abad-102f-4ea0-ac8b-3c6fa6eb7291.png">

### Specific Image Search
<img width="919" alt="Screen Shot 2022-05-13 at 3 32 06 PM" src="https://user-images.githubusercontent.com/79298250/168386569-92d6f74d-ce02-4b97-9f8e-d3bf06c9a43f.png">

## Component Hierarchy
![image](https://user-images.githubusercontent.com/79298250/168388023-3a48e2e6-6ba7-4e26-903d-7916ab2650d8.png)

## Component Details
- App (State): Makes the initial data request and include React Router
- Header with logo (Props): Renders header for the Home page
- Header with logo and home button (Props): Renders header for the Show page
- Art of the Day (Props): Renders a random art work for the day on the Home page
- Show page (Props): Renders a specific art 





