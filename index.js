const express = require('express');
const items = require('./items')
const app = express();


const cart = items.shoppingCart;


const port = 3000;

//Get the request data as an object
app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

//Get /cart-items
app.get('/cart-items', (req, res) => {
    res.statusCode;
    console.log(res.statusCode);
    res.json(cart);
});

//GET /cart-items/:id
app.get('/cart-items/:id', (req, res) => {
    const id = req.params.id;

    cart.forEach((cartItem) => {
        if (id == cartItem.id) {
            res.status(200);
            res.json(cartItem);
        }
    })

    res.status(404);
    res.json('ID not found')
});


//POST /cart-items

app.post('/cart-items', (req, res) => {
    const body = req.body;
    cart.push(body);
    res.status(201);
    res.json(body);
})

//PUT /cart-items/:id
app.put('/cart-items/:id', (req, res) => {
    const id = req.params.id;
    const newDetail = req.body;
    cart.forEach((cartItem, index) => {
        if (id == cartItem.id) {
            res.status(200);
            cart.splice(index, 1, newDetail);
            res.json(cart);
        }
    });
})

//DELETE /cart-items/:id
app.delete('/cart-items/:id', (req, res) => {
    const id = req.params.id;
    cart.forEach((cartItem, index)=> {
        if (id ==cartItem.id) {
            res.status (204);
            cart.splice(index, 1);
            res.json();
        }
    })
})



