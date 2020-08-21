# Movies app
> Technical assignment - 24i

> API documentation
- Overview: https://www.themoviedb.org/documentation/api
- Getting started: https://developers.themoviedb.org/3/getting-started/introduction

- Build with ReactJS
- Node version v12.16.1
- Yarn && yarn start 🚀🔥

> ❗ **IMPORTANT**❗  Note:
> Make sure you add a `.env` file in the root of the directory, and add there your api key (example: REACT_APP_API_KEY=##mySecretApiKey24i## )

#### ⚙️ Standard setups
  In the /config folder you can find the main `endpoints`, `media queries` for responsiveness, `routes` navigation, and some basic `theme` setting up

#### 📃 Home page
  Description:
  1. In home page there is a navigation menu (home and search)
  2. In this page I made 4 requests for each category, and added a functionality which calculates
  how many items should be rendered in each carousel slider with configuration for mobile/tablet/desktop
  3. Each card has an `id`, `name`, `poster`
  4. Each card when clicked, it is passing to the url, params (`id` and `category`) and leads to details page

#### 📃 Movie details page
  Description:
  1. In the details page I generate a url based on the urls params `id` and `category` to fetch movie's details like:
  `title`, `overview`,  `poster_path`,  `status`,  `tagline`,  `release_date` and `languages` when some information doesn't exist I just don't render it
  2. When a user click's on "Watch video" then a Modal in full screen from the provided streaming video appears and starts to play
   > Note: This `https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8` link was not working so I replaced it with an other similar streaming video url in order to use it with shaka player

#### 📃 Search page
  Description:
  1. In this page, I used the search by keyword api endpoint. https://developers.themoviedb.org/3/search/search-keywords
  2. The response is a list of items (movies etc.) with only two key/value pares each,
  and this is why the poster path is not available, neither the category of the items.
  I choose to add a default image and disabled the link functionality from the Card component for that reason
