const express = require("express");
const router = express.Router();
const { insertTicket } = require("../model/ticket/Ticket.model");

// Workflow

// - Authorize every request with jwt

// - Retrive all the ticket for the specific user
// - Retrive a ticket from mongodb
// - Update message conversation in the ticket database
// - update ticket stauts // close, operator responsive pending, client response pending
// - delete ticket form mongodb

router.all("/", (req, res, next) => {
  // res.json({ message: "return form ticket router" });

  next();
});

router.post("/", async (req, res) => {
  try {
    const { subject, sender, message } = req.body;

    const ticketObj = {
      clientId: "5f953f1e5e6dc35e206b6d74",
      subject,
      conversations: [
        {
          sender,
          message,
        },
      ],
    };

    const result = await insertTicket(ticketObj);

    if (result._id) {
      return res.json({
        status: "success",
        message: "New ticket has been created!",
      });
    }

    res.json({
      status: "error",
      message: "Unable to create the ticket , please try again later",
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

module.exports = router;
