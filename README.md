
# Next Notion Portfolio

A minimalist-focused portfolio website built on the capabilities of NextJS and Notion API, providing quick setup and easy configuration.

[Demo Website](https://next-notion-portfolio-brown.vercel.app/)

## ✨ Features

- Notion integration
- Minimalist style
- Accessibility, Performance and SEO [^1]
- Easy Configuration
- Supports all text-types.
- RSS Feed for blog posts


## 🚀 Getting Started

**Clone project and install dependencies**

Use `git` to clone the site:
```bash
git clone https://github.com/eneskutlay/website.git
cd website
```
and run `npm install`.


## 🛠️ Notion Integration 

**Create an integration**

-   Go to [https://www.notion.com/my-integrations](https://www.notion.com/my-integrations).
-   Click the "+ New integration" button.
-   Give your integration a name - I chose "Vacation Planner".
-   Select the workspace where you want to install this integration.
-   Select the capabilities that your integration will have.
-   Click "Submit" to create the integration.
-   Copy the "Internal Integration Token" on the next page and save it somewhere secure, e.g. a password manager.

![gif](https://files.readme.io/2ec137d-093ad49-create-integration.gif)

**Create an Full Page Database**

- Start from a new or existing page in your workspace.
- Insert a new database by typing `/database` and selecting `Database - Full page`
- Give it a title. I called mine "Destinations". Click the `•••` menu at the top right of the page, scroll to `Add connections`, and use the search bar to find the integration that you created. Click on your integration to give it access to your database.
- Before moving on, you need the ID of the database you just created.  
Copy the URL of your Notion database. Make sure you're viewing the database as a full page
	- If you're using the Notion desktop app, click on the `Share` button and select `Copy link`.

`https://www.notion.so/myworkspace/1ffe4fd3f5594744b0b9602d9afc4e70?v=...`

> Your link will look like the example above. The 32-character part before the **?** is your databaseID.

- Create a file named .env.local in the main directory of the project and add your Notion integration token to the first value and your database ID you just copied to the second value..
```env
NOTION_TOKEN=
NOTION_DATABASE_ID=
```

![gif](https://files.readme.io/3e5cb5b-share-database-with-integration.gif)

## Change personal information
Visit `lib/data.js` file to edit your personal information.


## 🏃 Run

Start the site by running `npm run dev`.
Your site is now running at `http://localhost:3000`!


## 🤔 Questions or problems?

Easy, create an issue



[^1]: Based on the Chrome Lighthouse report.






