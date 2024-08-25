const exp = require('express');
const cors = require('cors');
const path = require('path')
const app = exp();
const port = 3000;
app.use(cors());

app.use(exp.static(path.join(__dirname, 'src')))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})
app.get('/home', (req, res) => {
	res.sendFile(__dirname + '/pages/home/index.html')
})
app.get('/footer', (req, res) => {
	res.sendFile(__dirname + '/components/reusable/footer/footer.html')
})
app.get('/anime', (req, res) => {
	res.sendFile(__dirname + '/pages/anime/index.html')
})
app.get('/animepagedata', (req,res) => {
	res.sendFile(__dirname + '/componentpage/anime/index.html')
})


app.listen(port, () => console.log(`App running at ${port}`))