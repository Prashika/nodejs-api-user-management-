# nodejs-api-user-management
A proof-of-concept Node.js application demonstrating a simple REST API for user management. Built with Node.js's built-in `http` module, it provides CRUD operations (Create, Read, Update, Delete) for managing user data. The API runs on port 3000 and uses in-memory storage with JSON data structure.

## Features

- **GET** `/users` - Retrieve all users
- **POST** `/users` - Create a new user  
- **PUT** `/users/:id` - Update an existing user
- **DELETE** `/users/:id` - Delete a user
- Built with Node.js core modules (no framework dependencies)
- JSON-based request/response format

## Getting Started

1. `npm install`
2. `npm start` or `node index.js`
3.  Server runs on port 3000

## API Endpoints Testing with Postman

### Step 1: Start the Server
```bash
node index.js
```
Server will run on `http://localhost:3000`

### Step 2: Open Postman
- Launch Postman application
- Create a new request or collection

### Step 3: Test Each Endpoint

#### Test GET /users
1. Create a new request
2. Select **GET** method
3. Enter URL: `http://localhost:3000/users`
4. Click **Send**
5. Verify response shows the users array

#### Test POST /users
1. Create a new request
2. Select **POST** method
3. Enter URL: `http://localhost:3000/users`
4. Go to **Headers** tab, add: `Content-Type: application/json`
5. Go to **Body** tab, select **raw** and paste:
```json
{
  "id": 3,
  "name": "Jane",
  "age": 25
}
```
6. Click **Send**
7. Verify response shows status 201 with "User added" message

#### Test PUT /users/:id
1. Create a new request
2. Select **PUT** method
3. Enter URL: `http://localhost:3000/users/1`
4. Go to **Headers** tab, add: `Content-Type: application/json`
5. Go to **Body** tab, select **raw** and paste:
```json
{
  "name": "John Updated",
  "age": 30
}
```
6. Click **Send**
7. Verify response shows status 200 with updated user data

#### Test DELETE /users/:id
1. Create a new request
2. Select **DELETE** method
3. Enter URL: `http://localhost:3000/users/2`
4. Click **Send**
5. Verify response shows status 200 with "User deleted" message

#### Test Error Case (404)
1. Create a new request
2. Select **PUT** or **DELETE** method
3. Enter URL: `http://localhost:3000/users/999` (non-existent ID)
4. Click **Send**
5. Verify response shows status 404 with "User not found" message

## Project Structure

```
nodejs-rest-api-poc/
├── index.js              # Main server file
├── package.json          # Project dependencies
├── README.md             # Documentation
├── routes/
│   └── users.js          # User route handlers
├── data/
│   └── users.json        # User data storage
├── utils/
│   └── logger.js         # Logging utilities
└── BEST_PRACTICES.md     # Best practices guide
```

## License

MIT

## Author

Created as a Node.js REST API Proof of Concept
