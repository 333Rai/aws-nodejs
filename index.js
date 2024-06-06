const express = require('express');
const app = express();
app.get('/api/v1', (req, res) => {
	res.send({ message: 'Hello, world!' });
});
app.listen(1500, () => {
	console.log('server started on port 1500');
});
