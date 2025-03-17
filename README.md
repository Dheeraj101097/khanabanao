
## VIEW LIVE 🍽️ : [Click here](https://foodzone-woad.vercel.app/)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Example Usage](#example-usage)
- [Contributing](#contributing)

## Introduction
FoodZone 🍽️ is a recipe application that allows users to browse, search, and manage recipes. Users can create an account, log in, and save their favorite recipes, ensuring personalized access.

## Features
### Frontend
- User Authentication (Login/Register)
- Browse Recipes
- Search Recipes
- View Recipe Details
- Save Favorite Recipes
- Responsive Design

### Backend
- User Authentication (JWT)
- Recipe Management (CRUD)
- User Management
- Database Integration

## Technologies Used
### Frontend
- React
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for Authentication

## Installation
### Frontend (Vite+React)
1. Navigate to the `FrontendR/recipeapp` directory:
    ```sh
    cd FrontendR/recipeapp
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm run dev
    ```

### Backend
1. Navigate to the `BackendR` directory:
    ```sh
    cd BackendR
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file and add your environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```
4. Start the server:
    ```sh
    npm start
    ```

## Usage
### Frontend
- Open your browser and navigate to `http://localhost:5173` to use the application.

### Backend
- The backend server will be running on `http://localhost:5000`.

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Recipes
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get a single recipe by ID
- `POST /api/recipes` - Create a new recipe
- `PUT /api/recipes/:id` - Update a recipe by ID
- `DELETE /api/recipes/:id` - Delete a recipe by ID

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a single user by ID
- `PUT /api/users/:id` - Update a user by ID
- `DELETE /api/users/:id` - Delete a user by ID

## Example Usage
### Register a New User
```sh
curl -X POST http://localhost:5000/api/auth/signup \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "email": "john@example.com", "password": "password123"}'
```

### Login a User
```sh
curl -X POST http://localhost:5000/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email": "john@example.com", "password": "password123"}'
```

### Create a New Recipe
```sh
curl -X POST http://localhost:5000/api/recipes \
-H "Content-Type: application/json" \
-d '{"title": "Pasta", "ingredients": "Pasta, Tomato Sauce", "instructions": "Boil pasta, add sauce", "category": "Italian", "image": "image_url", "userId": "user_id"}'
```

### Get All Recipes
```sh
curl -X GET http://localhost:5000/api/recipes
```

### Get a Single Recipe by ID
```sh
curl -X GET http://localhost:5000/api/recipes/recipe_id
```

### Update a Recipe by ID
```sh
curl -X PUT http://localhost:5000/api/recipes/recipe_id \
-H "Content-Type: application/json" \
-d '{"title": "Updated Pasta", "ingredients": "Pasta, Tomato Sauce, Cheese", "instructions": "Boil pasta, add sauce and cheese", "category": "Italian", "image": "image_url", "userId": "user_id"}'
```

### Delete a Recipe by ID
```sh
curl -X DELETE http://localhost:5000/api/recipes/recipe_id
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.


