# React - Podcaster

## Available Scripts

In the project directory, you can run:

### `npm start` for dev mode

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build` for production build

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Notes

- The Loader is shown briefly since the API is pretty fast. To force it to be shown you can use something like this `await new Promise(resolve => setTimeout(resolve, 1000))` on line 42 on OneTwo component, or line 30 in Home component.

- Allorigins.win wasn't working properly for the single podcast fetch. For some reason the array only contained one object, so I decided not to use it for this specific fetch.

- Didn't dockerized the app since it was not requested, same for testing (If you want me to, just ask for it). I used node 20, in case something doesn't work as expected in other versions. 

- Everything else from the specifications document is working. Hope you like it!