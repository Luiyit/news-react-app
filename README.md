# News Aggregator [React + Typescript]

The project was built with React from a foundation created with Vite. You can find the API for this project [here](https://github.com/Luiyit/news-laravel-api)

Vite plugins:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Authentication

Authentication was done using JWT token. 
The package to manage the global authentication state was [React Auth Kit](https://authkit.arkadip.dev/)

## How to run the project

The project is dockerized. To run the project using docker you must have it installed on your computer.

- Copy and paste the .env file for laravel in the rood folder [This file is not included in the repository].
- Build the Dockerfile `docker build -t react-with-vite .`
- Run the Docker Container `docker run -d --rm -p 3001:3001 --name new-aggregator react-with-vite`

The port configured to be exposed is 3001. If you need to change it, make sure to modify the *vide.config.ts* file.

Now you will be able to open the app in your browser. Open the Browser and access `http://localhost:3001`. Remember that the application expects the server to be running.

## Improvements
- Includes tests using Jest and Express
- Error handling and notify the user using the notification system already configured in the app.
- Profile page to allow users to adjust their personal information
- Use [React Helmet](https://www.npmjs.com/package/react-helmet) to improve the metadata.
- Create a main menu