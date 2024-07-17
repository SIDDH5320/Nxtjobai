

# Payment Gateway

## Overview

This is a payment gateway service built with Node.js, Express, and MongoDB. It supports creating and managing transactions.

## Project Structure

```
payment-gateway/
├── config/
│   └── db.js
├── controllers/
│   └── paymentController.js
├── models/
│   └── Transaction.js
├── routes/
│   └── paymentRoutes.js
├── docs/
│   └── swagger.js
├── .env
├── app.js
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Setup and Installation

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)
- MongoDB
- Docker (optional)

### Installation

1. **Clone the repository:**

   ```sh
   git clone [https://github.com/SIDDH5320/](https://github.com/SIDDH5320/Nxtjobai.git)
   cd payment-gateway
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   MONGO_URI=mongodb://localhost:27017/payment-gateway
   PORT=5000
   ```

### Running the Application

1. **Start the MongoDB server** (if not running):

   ```sh
   mongod
   ```

2. **Start the application:**

   ```sh
   npm start
   ```

   The server will start on `http://localhost:5000`.

### Running with Docker

1. **Build the Docker image:**

   ```sh
   docker-compose build
   ```

2. **Start the services:**

   ```sh
   docker-compose up
   ```

   The application will be accessible at `http://localhost:5000`.

## API Documentation

API documentation is available at `/api-docs` when the server is running. It uses Swagger for API documentation.

## Project Details

### config/db.js

This file contains the MongoDB connection logic.

### controllers/paymentController.js

This file contains the business logic for handling payments.

### models/Transaction.js

This file defines the Mongoose schema for transactions.

### routes/paymentRoutes.js

This file defines the API routes for payment-related endpoints.

### docs/swagger.js

This file contains the setup for Swagger API documentation.

### app.js

This is the entry point for the application, setting up Express and connecting to the database.

### Dockerfile

This file defines the Docker image for the application.

### docker-compose.yml

This file defines the Docker services for the application and MongoDB.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or additions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```
