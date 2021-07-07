// const jsonServer = require('json-server');
// const auth = require('json-server-auth')
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();
// const cors = require('cors');
// const port = process.env.PORT || 3000;

// server.use(auth)
// server.use(middlewares);
// server.use(
//     cors({
//         origin: true,
//         credentials: true,
//         preflightContinue: false,
//         methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     })
// );
// server.options('*', cors());

// server.use(router);
// server.listen(port, () => {
//     console.log('JSON Server is running');
// });


const jsonServer = require('json-server')
const auth = require('json-server-auth')
 const cors = require('cors');
const app = jsonServer.create()
const router = jsonServer.router('db.json')
const port = process.env.PORT || 3000;

// /!\ Bind the router db to the app
app.db = router.db
app.options('*', cors());
// You must apply the auth middleware before the router
app.use(auth)
app.use(router)
app.listen(port)
