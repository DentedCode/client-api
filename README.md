# CRM Client side API

This api is a part of create CRM Ticket system with MERN stack from scratch tutorial series.
Link for the series is https://youtu.be/XWbEzWSKBfs

## How to use

- run `git clone https://github.com/DentedCode/client-api.git`
- run `npm install`
- run `npm start`

Note: Make sure you have nodemon is installed in your system otherwise you can install as a dev dependencies in the project.

## API Resources

### User API Resources

All the user API router follows `/v1/user/`

| #   | Routers                           | Verbs | Progress | Is Private | Description                                      |
| --- | --------------------------------- | ----- | -------- | ---------- | ------------------------------------------------ |
| 1   | `/v1/user/login`                  | POST  | Done     | No         | Verify user Authentication and return JWT        |
| 2   | `/v1/user/request-reset-password` | POST  | TODO     | No         | Verify email and email pin to reset the password |
| 3   | `/v1/user/reset-password`         | PUT   | TODO     | No         | Replace with new password                        |
| 4   | `/v1/user`                        | GET   | Done     | Yes        | Get users Info                                   |

### Ticket API Resources

All the user API router follows `/v1/ticket/`

| #   | Routers                        | Verbs | Progress | Is Private | Description                             |
| --- | ------------------------------ | ----- | -------- | ---------- | --------------------------------------- |
| 1   | `/v1/ticket`                   | GET   | TODO     | Yes        | Get all ticket for the logined in user  |
| 2   | `/v1/ticket/{id}`              | GET   | TODO     | Yes        | Get a ticket detsils                    |
| 3   | `/v1/ticket`                   | POST  | TODO     | Yes        | Create a new ticket                     |
| 4   | `/v1/ticket/{id}`              | PUT   | TODO     | Yes        | Update ticket detsils ie. reply message |
| 5   | `/v1/ticket/close-ticket/{id}` | PUT   | TODO     | Yes        | Update ticket detsils ie. reply message |

### Tokens API Resources

All the user API router follows `/v1/tokens`

| #   | Routers      | Verbs | Progress | Is Private | Description            |
| --- | ------------ | ----- | -------- | ---------- | ---------------------- |
| 1   | `/v1/tokens` | GET   | Done     | No         | Get a fresh access JWT |
