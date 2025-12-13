const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bùi Mai Trâm Anh_DH52200319'));
app.listen(3000, () => console.log('Backend running on port 3000'));