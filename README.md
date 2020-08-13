This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

still work in progress. lots of "left-over" code, but basic functionality is ok.

## setup

u ll need an aws cognito user Pool
during user pool creation, also create a cognito client (without app secret)

enter the relevant data from the userpool into the .env.local file

make sure that the cognito attributes match your code in asyncSignUp and asyncSignIn


## react router

edit your routes for react-router inside the /auth/router file
and make often used routes available within /auth/routeNames (to avoid typos and allow for app-wide changes)

be careful with react-router's "exact" routes. and the ones without. especially if your component has its own router, such as "privateHome"

components/privateHome has its own router for its sub-pages

this enables temporary routes for dialogs within this component, where u can programmatically push the user to routes, and render the routes. but manually entered URLs would not "catch"..

this also allows for more simpler routing, as not all sub routes are relevant to all parts of the app.

## higher order component (hoc)

an "withAuth" hoc is in charge of checking authentication and allowing access, export your component withHoc and it will require the user to be logged in.

access/id tokens can be re-newed before they expire. currently set at 10secs before expiration.
they can also manually be re-newed.

## .env. files

restart app after editing .env or .env.local file, to see changes having an effect!

its recommended that u save cognito access data into .env.local, rather than the .env file (so they don t get accidentally pushed to github)
when creating a cognito client, make sure u set the settings to NOT use an app secret (they don t work for web apps)



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
