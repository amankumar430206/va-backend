const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const server = require("http").createServer(app);
const ejs = require('ejs')
const config = require('config')
// Config Cluster
const cluster = require("cluster");
// Check the number of available CPU.
const numCPUs = require("os").cpus().length;

// CONFIGURING CONFIG JWTPRIVATEKEY
if (!config.get("jwtPrivateKey")) {
    console.log("FATAL ERROR : jwtPrivateKey is not defined");
    process.exit(1);
}

// CONFIGURING MONODB WITH MONGOOSE
require("./modules/mongoose.config");

app.use(morgan("tiny"));
app.use(cors());

// CONFIGURING BODY PARSER
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: false
}));
app.use(bodyParser.json({ limit: "50mb" }));

// const path = require('path')
// app.use('/', express.static(path.join(__dirname, 'dist')))

// IMPORTING ROUTES
const vehicleRoutes = require("./routes/vehicles");
const serviceRoutes = require("./routes/services");
const billRoutes = require("./routes/bills");

app.get('/', (req, res) => {    
    res.json({
        msg : "welcome to va-services",
        suceess: true
    }).status(200);
});

// SETTING UP ROUTES
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/bills", billRoutes);


app.get('*', (req, res) => {
    res.status(404).send("Something went wrong!")
})

// config cluster for parallel processing
if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // This event is firs when worker died
    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
}

// For Worker
else {
    // Workers can share any TCP connection
    // establishing the server on the port 3000
    const port = process.env.PORT || 3000;
    const IP = process.env.IP;
    server.listen(port, IP, () => {
        console.log(
            `Client Server Started Processs ${process.pid} :: PORT :${port} `
        );
    });
}
