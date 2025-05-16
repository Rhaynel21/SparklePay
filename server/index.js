const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Import the Message model
const Message = require('./models/Message');

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Load the Discord webhook URL from the environment variables
  const discordWebhookURL = process.env.DISCORD_WEBHOOK_URL;

  // Save to MongoDB
  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
  } catch (err) {
    console.error('Error saving message to MongoDB:', err.message);
    return res.status(500).json({ error: 'Failed to save message to database.' });
  }

  if (!discordWebhookURL) {
    console.error('Discord Webhook URL is not configured in the environment variables.');
    return res.status(500).json({ error: 'Discord Webhook URL is not configured.' });
  }

  try {
    await axios.post(discordWebhookURL, {
      content: `📩 New Contact Form Submission:\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
    });

    res.status(200).json({ message: 'Message sent to Discord and saved to database successfully!' });
  } catch (error) {
    console.error('Error sending message to Discord:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to send message to Discord, but saved to database.' });
  }
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});