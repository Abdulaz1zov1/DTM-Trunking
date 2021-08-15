const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose')
const methodOverride = require("method-override");
const app = express()

const cookieParser = require("cookie-parser");
const session = require('express-session')
const MongoDBSession = require('connect-mongodb-session')(session)

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors())
app.use(bodyParser.json())



// front backend post get zaprost uchun
app.use(methodOverride("_method", {
    methods: ["POST", "GET"]
}))



//---------------------------------------------- MongoDB ------------------------------------------------
const MongoURI = "mongodb://localhost:27017/DTMBackend"
mongoose
    .connect(MongoURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then((res) => {
        console.log(`MongoDB Connected`);
    })


//-------------------------------- SESSIYA --------------------------
    const session_time = 1000 * 60
    const store = new MongoDBSession({
       uri: MongoURI,
       collection: "MYSession"
})
app.use(session({
    secret: "session_key_secret",
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {

        httpOnly: true,
        maxAge: session_time
        // secure: true
    }
}))
app.use(cookieParser());






//----------------------------- API -------------------------------
app.use('/api', require('./routes/adminRoutes'))
app.use('/news', require('./routes/newRoutes'))











const corsOptions ={
    origin:'http://localhost:3005',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(fileUpload());



app.post('/quote', (req, res) => {
    console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'khursand0090@gmail.com',
            pass: '1145257x'
        }
    });

    var mailOptions = {
        from: 'khursand0090@gmail.com',
        // to: 'developer.bob.uz@gmail.com',
        to: 'khursandbek9800@gmail.com',
        subject: 'This email is sent from DTM Truckers',
        text: `      Fullname - ${req.body.name}
        Phone - ${req.body.phone}
        Email - ${req.body.email}
        Company - ${req.body.company}
        Mc - ${req.body.mc}
        
        Message - ${req.body.message1}
        From - ${req.body.from}
        To - ${req.body.to}
        Date - ${req.body.date}
        Delivery - ${req.body.delivery}
        `,

    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
} )

// Upload endpoint
app.post('/upload', (req, res) => {
    console.log(req.body.phone)
    if(req.files === null ) {
        return res.status(400).json({msg: 'No file was uploaded'});
    }

    const file = req.files.file;
    const file1 = req.files.file;

    file.mv(`${__dirname}/public/uploads/${file.name}`, err => {
        if(err) {
            console.error(err);

            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
    file.mv(`${__dirname}/public/uploads/${file.name}`, err => {
        if(err) {
            console.error(err);

            return res.status(500).send(err);
        }

        res.json({ fileName1: file1.name, filePath: `/uploads/${file1.name}` });
    });

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'khursand0090@gmail.com',
            pass: '1145257x'
        }
    });

    var mailOptions = {
        from: 'khursand0090@gmail.com',
        // to: 'developer.bob.uz@gmail.com',
        to: 'khursandbek9800@gmail.com',
        subject: 'This email is sent from DTM Truckers',
        text: `      Fullname - ${req.body.name}
        Email - ${req.body.email}
        Phone - ${req.body.phone}
        Company - ${req.body.company}
        Mesage - ${req.body.message}
        `,
        attachments: [{
            filename: file.name,
            path: `${__dirname}/public/uploads/${file.name}`
        }]
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

app.listen(3000, () => console.log('Server started...'));
