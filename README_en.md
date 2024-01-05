# The project 

Presto.it is a web app designed to display and create classified ads for buying and selling second-hand goods.

# Installation 

The project primarily uses Next.js 14.0.3. To ensure proper display, it is recommended to create a .env file containing the following variables:

- NEXTAUTH_SECRET = Consult the documentation [here](https://next-auth.js.org/configuration/options)
- GITHUB_ID = [Data provided for GitHub login implementation]
- GITHUB_SECRET = [Data provided for GitHub login implementation]
- MONGODB_URI = [Data provided by MongoDB Atlas platform for database access]

# Projects Structure

The project folders are organized as follows:

- app: Contains the entire Next.js project structure.
- assets: Contains all SVG files responsible for the icons used in the project.
- components: Contains all individual components used within the app folder.
- utils: Contains some reusable functions within the project.

# Development Logic

The project aims to utilize the latest technologies implemented in Next.js 14. Most components are server-side rendered to optimize performance during loading and improve SEO indexing.

Only a few components are client-side rendered, clearly separating the graphical interface update from data handling.

All images and fonts are preloaded on the server side, improving loading performance.

A significant development goal was to minimize database requests. This was achieved by using the latest caching features implemented by Next.js, particularly evident in the navigation of the Ads section of the application.

An interesting challenge was implementing server-side ad filtering functionality. Instead of using hooks like useState and useEffect, the URL is updated with query parameters upon sending filter data. These parameters then trigger a new request to the server, allowing the server to update the UI. The reason for using this strategy is that, in the case of a large number of ads, client-side UI management can lead to slowdowns and a poor user experience.

Requests that create or modify data use new experimental React features, such as server components, handling each request through a server action.

# Next features 

- Display of posts created by each user.
- Site animations and interactivity.