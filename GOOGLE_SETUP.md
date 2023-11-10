# Setting Up Google Cloud for User Authentication in Bill Generator

Follow these steps to configure Google Cloud for user authentication in your Bill Generator application:

1. **Create a Google Cloud Project**
    - Visit the [Google Cloud Console](https://console.cloud.google.com/).
    - Click on the project drop-down and select or create the project for which you want to add an API key.

2. **Enable the Google+ API**
    - From the dashboard, click on "Enable APIs and Services".
    - Search for "Google+ API", select it from the list and click "Enable".

3. **Create Credentials**
    - Go back to the dashboard and click on "Credentials" in the left-hand menu.
    - Click on "Create Credentials" and select "OAuth client ID".

4. **Configure the OAuth Consent Screen**
    - You'll be prompted to configure the OAuth consent screen.
    - Fill in the necessary details and save.

5. **Create OAuth Client ID**
    - Select "Web application" as the application type.
    - Give it a name and add your authorized JavaScript origins and redirect URIs. For local development, these can be `http://localhost:3000` or the port you're running your application on.

6. **Get Your Credentials**
    - After creating, you'll be presented with your Client ID and Client Secret.
    - These are the values you'll use in your Bill Generator application to enable Google Sign-In.

7. **Update Your .env File**
    - Open your `.env` file in the root of your Bill Generator project.
    - Add the following lines, replacing `<Your-Client-ID>` and `<Your-Client-Secret>` with the Client ID and Client Secret you obtained in step 6:

    ```env
    GOOGLE_CLIENT_ID=<Your-Client-ID>
    GOOGLE_CLIENT_SECRET=<Your-Client-Secret>
    ```

Remember to store your Client ID and Client Secret securely and never expose them publicly.