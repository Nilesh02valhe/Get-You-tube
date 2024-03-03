# YouTube Subscribers Tracker API Project

## Table of Contents
- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [Technologies Employed](#technologies-employed)
- [Installation Instructions](#installation-instructions)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Database Management](#database-management)
- [Data Synchronization](#data-synchronization)
- [Contributors](#contributors)

---

## Introduction
Welcome to the YouTube Subscribers Tracker API Project! This project is a powerful tool designed for managing and keeping track of your YouTube subscribers. It offers an intuitive API that enables you to perform actions like retrieving subscriber lists, adding new subscribers, and fetching subscriber details.

## Project Overview
Our solution comprises a Node.js application serving as the backend for the API and a MongoDB database for storing subscriber data. The frontend is a clean HTML page that provides essential information about the available API endpoints.

## Technologies Employed
We harnessed several cutting-edge technologies to bring this project to life:

- Node.js
- Express.js
- MongoDB
- Bootstrap (for frontend aesthetics)
- Mongoose (for seamless database interactions)

## Installation Instructions
To run this project on your local environment, follow these straightforward steps:

1. Clone the project repository from our GitHub:

2. Install the project dependencies with this simple command:

3. Ensure you have MongoDB installed and operational on your local system.

4. Initiate the application with this straightforward command:

The application will spring to life and listen on port 3000, granting you access to the API through the provided endpoints.

## Getting Started
The API offers the following endpoints for your YouTube subscribers management needs:

## API Endpoints
- `GET /subscribers`: Retrieve a list of all your subscribers.
- `GET /subscribers/name`: Get a list of subscribers with only their `name` and `subscribedChannel` details.
- `GET /subscribers/:id`: Access detailed information about a subscriber by providing their ID.

If you attempt to retrieve a subscriber with the given `:id` and it is not found, the API will gracefully return an error message with a status code of 400.

## Database Management
Our project is backed by a MongoDB database to store your precious subscriber data. You can conveniently configure the database connection within the `app.js` file. The database connection URL is thoughtfully set in the `DATABASE_URL` variable.

## Data Synchronization
We've thought ahead and included a data synchronization feature. The `refreshAll` function in `app.js` is at your service. It wipes the database clean and injects a sample dataset of subscribers from the `data.js` file. You can employ this function to effortlessly reset the database with sample data.

## Contributors
Our project has been developed with love and dedication by:

- [Swapnil Kshirsagar]
- [Manisha Dhole]

We cordially invite you to contribute to this project or utilize it as a robust foundation for your own YouTube subscribers management application. Explore and experience the power of this API!