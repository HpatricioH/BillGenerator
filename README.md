
<p align="center">
  <a href="https://bill-generator-kappa.vercel.app/" style="text-decoration: none;">
    <img src="public/images/logo.png" alt="Virtual Coffee" height="200">
  </a>
</p>

# What is [Bill Generator](https://bill-generator-kappa.vercel.app/)? 🤔

Bill Generator is a web application designed to automate the process of invoice creation. It provides a user-friendly interface where users can input the necessary details such as address, bill-to name, description, quantity, unit price, and more to generate a professional-looking invoice.

The application is built using modern web technologies, including Next.js API serverless functions, and follows best practices for web development. It's designed to be responsive, so it works well on both desktop and mobile devices.

Whether you're a freelancer needing to bill clients, a small business owner looking for a more efficient way to handle invoicing, or just someone who wants to simplify the process of creating invoices, Bill Generator can help.

To start using Bill Generator, simply navigate to the main page, fill in the required fields, and click the "Generate Invoice" button. Your invoice will be created and ready to be sent in no time.

Please note that the application is still in development, and more features are planned for future releases. If you have any suggestions or feedback, feel free to contribute to the project.

See you there!


## Tech Stack

BillGenerator is built using the following technologies:

- [Next.js](https://nextjs.org/) - a framework for building server-rendered React applications
- [MongoDB](https://www.mongodb.com/) - a NoSQL database
- [Tailwind CSS](https://tailwindcss.com/) - a utility-first CSS framework
- [Vercel](https://vercel.com/) - a cloud platform for static sites and Serverless Functions
- [TypeScript](https://www.typescriptlang.org/) - a typed superset of JavaScript that compiles to plain JavaScript
- [NextAuth Js](https://next-auth.js.org/) - an authentication library for Next.js

## Table of Contents:

- [Tech Stack](#tech-stack)
- [Local Development Setup](#local-development-setup)
  - [Prerequisites](#0-prerequisites)
  - [Fork and Clone the Repository](#1-fork-and-clone-the-repository)
  - [Navigate to the Repo Directory](#2-navigate-to-the-repo-directory)
  - [Install Dependencies](#3-install-dependencies)
    - [Installing `node`](#installing-node)
    - [Installing `pnpm`](#installing-pnpm)
    - [Setting up your .env](#setting-up-your-env)
    - [Installing Package Dependencies](#installing-package-dependencies)


## Local Development Setup

Bill Generator is fully on your computer and requires each dependency (for example MongoDB) to be installed in order to start the local development.

### 0. Prerequisites
* [Mongodb](https://www.mongodb.com/)
* Follow the instructions in the [MongoDB setup guide](MONGODB_GUIDE.md) to set up your MongoDB Atlas database.
* [Google Cloud](https://cloud.google.com/)
* Follow the instructions in the [Google Cloud setup guide](GOOGLE_SETUP.md) to set up your Google Cloud project.


### 1. Fork and clone the repository

Follow [these steps](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) to create a fork of this repository and then clone it to your local machine. 

```shell
git clone https://github.com/<github user>/BillGenerator.git
```

### 2. Navigate to the repo directory

After cloning move into the cloned repo:

```shell
cd bill-generator
```

### 3. Install dependencies

#### Installing `node`:

If you have node already installed in your computer you can avoid this step. To install `node` [download the installer](https://nodejs.org/en/) from their site. Please download the lates and [LTS version](https://nodejs.org/en).

#### Installing `pnpm`:

`pnpm` is a package manager that is used to install all dependencies needed.

If you would like to read more about `pnpm` you can visit [their documentation](https://pnpm.io/motivation).

The best way to install `pnpm` for this project is by using [Corepack](https://nodejs.org/api/corepack.html), a new feature bundled with Node.

Install pnpm with the following commands (there are more ways to install 'pnpm' if you prefer to use a different method please visit [pnpm's installation page](https://pnpm.io/installation)):

```sh
npm install -g pnpm
```

#### Setting up your .env

Use the following command to create a local `.env` file. Then open the new file (`.env`) to make any changes required in the document.

```shell
cp .env.example .env
```

#### Installing package dependencies

Once you have `node`, `pnpm` installed, please run the following command to install all dependencies:

```shell
pnpm install
```

After running the command above, you should see a `node_modules` folder in your project root. This is where all the dependencies are installed. At this point you can run the project locally using the following command:

```shell
pnpm dev
```

Once you run this command, a local server is running at http://localhost:3000 any changes that you make to the code will be reflected on the browser automatically.

