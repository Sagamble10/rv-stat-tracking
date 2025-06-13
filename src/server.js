const express = require('express');
const path = require('path');
const { createExcelFile } = require('./excelHandler');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to save data to Excel
app.post('/save-stats', async (req, res) => {
  const data = req.body;

  try {
    const filePath = path.join(__dirname, 'public', 'RVStatTracking.xlsx');
    await createExcelFile(data, filePath);
    res.status(200).send('Data saved successfully.');
  } catch (error) {
    console.error('Error saving data to Excel:', error);
    res.status(500).send('Failed to save data.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});