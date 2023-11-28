# Doormonk: Online Haircut Booking Web App

Welcome to Doormonk, an online haircut booking web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Doormonk provides users with a convenient way to schedule appointments with hair salons and barbershops, right from the comfort of their devices.

## Features

- **User Registration and Authentication:** Users can create accounts, log in securely, and manage their profiles.
- **Search and Filter:** Users can easily search for services.
- **Appointment Booking:** Users can select a preferred salon or barber, choose a desired date and time, and book an appointment.
- **Reviews and Ratings:** Users can rate salons or barbershops they have visited.
- **Salon/Barber Dashboard:** Salons or barbershops can access a dedicated dashboard where they can manage their availability, view bookings, and update their profile information.

## Prerequisites

Before running Doormonk, ensure that you have the following installed:

- Node.js (v12 or later)
- MongoDB

## Getting Started

To get started with Doormonk, follow the steps below:

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Install dependencies:

   ```
   cd doormonk
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory of the project.
   - Define the following environment variables in the `.env` file:

     ```
     PORT=<server-port>
     MONGODB_URI=<mongodb-connection-string>
     JWT_SECRET=<jwt-secret-key>
     ```

4. Run the application:

   ```
   npm start
   ```

   The Doormonk server will start running on the specified port, and you can access the application by visiting `http://localhost:<server-port>` in your web browser.

## Directory Structure

The project directory structure is organized as follows:

```
doormonk/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── utils/
│       ├── App.js
│       └── index.js
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── server.js
└── README.md
```

- The `client/` directory contains the front-end React code.
- The `server/` directory contains the back-end Node.js and Express.js code.

## Contributing

Contributions to Doormonk are welcome. If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

Doormonk is licensed under the [MIT License](LICENSE).

## Acknowledgements

This project was developed with the support of various resources and tutorials. We would like to express our gratitude to the tutorial contributors and the open-source community for their invaluable contributions.
# doormonk-frontend-production
# doormonk-frontend-production
# doormonk-frontend-production
# doormonk-frontend-production
