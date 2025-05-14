const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Load the Discord webhook URL from the environment variables
  const discordWebhookURL = process.env.DISCORD_WEBHOOK_URL;

  if (!discordWebhookURL) {
    console.error('Discord Webhook URL is not configured in the environment variables.');
    return res.status(500).json({ error: 'Discord Webhook URL is not configured.' });
  }

  try {
    await axios.post(discordWebhookURL, {
      content: `📩 New Contact Form Submission:\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
    });

    res.status(200).json({ message: 'Message sent to Discord successfully!' });
  } catch (error) {
    console.error('Error sending message to Discord:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to send message to Discord.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});