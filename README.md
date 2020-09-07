# Create React App + React Router + Gh-pages

### See the demo: http://ifeLawal.github.io/reactRouter-ghpagesSampleWebpage

This is a sample repo using react, react-router, and gh-pages to run a react
website with multiple pages through github.

Support for figuring out how to use react-router in 2020 came from [this great article](https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/)
from Free Code Camp by Ibrahima Ndaw. It is definitely recommended to have an
understanding of react before attempting this. You can either [read React documentation](https://reactjs.org/).
on the react website or follow [this react
lesson](https://www.freecodecamp.org/learn/front-end-libraries/react/) on FreeCodeCamp.org.

I used [the blog
post "Deploying a create-react-app with routing to GitHub
pages](https://levelup.gitconnected.com/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2)
which covered setting up npm gh-pages and having a parent class of HashHistory
to keep your subfolders in place when react renders your pages. You can also use
[browserRouter](https://reacttraining.com/react-router/web/api/BrowserRouter)
which removes the # in the url. For BrowserRouter if you set your basename to
"/" it will use the "{github_usernamme}.github.io/" url format, where the
{github_username} implies your actual github username ie in my case "ifelawal.github.io". If you want your
url to retain the "{github_usernamme}.github.io/{repo_name}" format you need to
set your basename="/{repo_name}." It may have other benefits as well, especially
since on the reacttraining page there is a note on HashRouter and it's lack of
support on location.key, however I am not experienced enough to cover the differences.



This project was also bootstrapped with [Create React
App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).