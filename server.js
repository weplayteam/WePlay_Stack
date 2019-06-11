const express = require("express");
const stripe = require("stripe")("sk_test_LCwlgZu3SBDKwfIHkZo9kw2x00SjMcYvQ2");
const ReactDOMServer = require('react-dom/server');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/*', (req, res) => {
    const context = {};
    const react_app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const indexFile = path.resolve('./weplay_client/public/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${react_app}</div>`)
        );
    });
});

app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
});