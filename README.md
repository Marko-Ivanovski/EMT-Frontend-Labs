# EMT Labs Frontend

This is a React application built as a part of the E-Commerce and Programming labs.

## Features

- **User authentication** with JWT (login required to access protected features)
- **CRUD operations** for the Accommodation entity (create, read, update, delete)
- **Modular and reusable React components**
- **Temporary reservation system** for accommodations:
    - View your temporary reservations
    - Delete single or all reservations
    - Confirm all reservations
- **Routing** with React Router (`/`, `/accommodations`, `/hosts`, `/countries`, `/reservations`)
- Uses **Axios** for API communication with a Spring Boot backend
- Simple and clear UI, easy to extend

## How to Run

1. Install dependencies:
    ```
    npm install
    ```

2. Start the app:
    ```
    npm start
    ```

3. The app will be available at [http://localhost:3000](http://localhost:3000)

## Notes

- You need the Spring Boot backend running for API features.
- Log in with the provided demo users (`user`/`user`, `host`/`host`).
- All protected features require authentication.

