const express = require('express');

const app = express();

// items API Routes
app.use('/api/items', require('./routes/api/items'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
