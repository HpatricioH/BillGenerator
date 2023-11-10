## MongoDB Atlas for Local Development

If you're planning to work on the Bill Generator application locally, you'll need to set up a MongoDB Atlas database. MongoDB Atlas is a fully managed cloud database service that provides a free tier, which is perfect for local development.

The following steps will guide you through the process of creating a MongoDB Atlas account, deploying a new database, setting up a database user, whitelisting your IP address, and connecting to your database. These steps are designed to be beginner-friendly and should be easy to follow even if you're new to MongoDB Atlas.

### Create Your MongoDB Atlas Account

1. Navigate to [MongoDB Atlas website](https://www.mongodb.com/cloud/atlas) and click on the "Try Free" button.
2. Fill in your first/last name, email address, and password, and click "Create account".
3. Check your inbox and click the verification link inside to complete your registration.

### Deploy a New Database

1. Once you've completed the registration, you will be redirected to a page to deploy your database.
2. Choose M0 for the cluster tier. For local development, free tier is the choice to go. 
3. Choose the provider and region based on your preference. Ideally, choose the region closest to your location.
4. Click the "Create" button to deploy the database. Wait for the cluster to deploy.

### Set Up the Database User and IP Access List

1. Once you've created the database, you will be redirected to the security quickstart pages.
2. Fill in the username and password, and then click the "Create User" button to create your first database user. Remember the password you set up for your database user.
3. Click the "Add My Current IP Address" button to add an entry to your IP access list. This will allow you to connect to your database from your local machine. Only one IP address can be added to the list to connect your database.
4. Then click the "Finish and Close" button.

### Set Up the Database Connection

1. Once your cluster is ready, click the "Connect" button on your Database Deployments dashboard.
2. Click "Drivers" under the "Connect to your application" section.
3. Find the connection string and use this connection string for the environment variable `DATABASE_URL` in your local `.env` file.
4. Remember to replace `<password>` with the password you saved in the previous step. Example: `mongodb+srv://<username>:<password>@<cluster-url>/test?retryWrites=true&w=majority`

That's it! You have successfully set up a MongoDB database.