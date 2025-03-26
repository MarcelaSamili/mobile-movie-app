# About the APP

This is an application that allows you to search, save and learn more about the movies you are looking for.
It was developed using React Native, expo, TailwindCss and appwarite for the back end, my purpose with this project was to learn React Native.

## Get-Start
1-To test it, you can clone the code here from git-hub, open it in vs code or another development platform, and install expo on your smartphone.

2-Configure the .env file
like this:
 - EXPO_PUBLIC_MOVIE_API_KEY="API key"

 - EXPO_PUBLIC_MOVIE_API_BEARER="API token"

 - EXPO_PUBLIC_APPWRITE_PROJECT_ID="AppWrite project ID"

 - EXPO_PUBLIC_APPWRITE_DATABASE_ID="Database ID"

 - EXPO_PUBLIC_APPWRITE_COLLECTION_ID="Collection ID"

You can fide the API credentials here: https://developer.themoviedb.org/reference/intro/getting-started)
You can fide de appwrite credentials making a lognIn in the aplication of appWrite: https://appwrite.io/

## Appwrite Database configuration
In your database collection, you must create these attributes:
 - searchTerm - string
 - count - integer
 - poster_url - url
 - movie_id - integer
 - title - string

still in your bank collection, go to settings and enable the Create Read Update Delete permissions.

I learned this app from this: teacher:https://www.youtube.com/watchv=f8Z9JyB2EIE&list=PLVhuGNM7c34YcAJMFgOVZjcgCGyfSGNWQ&index=16&ab_channel=JavaScriptMastery

All credits to him.

If you have any questions, I am at your disposal.
