const nodemailer = require("nodemailer");
require("dotenv").config();
const email = "apeerampalli@gmail.com";
const pass = "@Bp9527503747";

//Mail
const sendMail = async (userEmail, password) => {
    let transporter = await nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
            user: email,
            pass: pass,
        },
    });
    let info = await transporter.sendMail({
        from: email, // sender address
        to: userEmail, // list of receivers
        subject: "Your credentials for Research House", // Subject line
        text: `username : ${userEmail}
        password : ${password}`, // plain text body
        html: "<b>Test email froṁnodemailer</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
};

sendMail(["apeerampalli@gmail.com"]).catch(console.error);


//Twilio AUTH
const accountSid = 'AC68e00c07d41df11cc5428052ae92b242';
const authToken = 'c2952bd86a40645091de0ce50e770ade';
const client = require('twilio')(accountSid, authToken);

//SMS
const sendSMS = (mobileNo) => {

    client.messages
        .create({
            body: 'hello',
            from: '+18562813402',
            to: mobileNo
        })
        .then(message => console.log(message.sid))

}
sendSMS('+919309094205')

//Whatsapp
const sendWhatsapp = (mobileNo) => {

    client.messages
        .create({
            body: 'Your appointment is coming up on July 21 at 3PM',
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:' + mobileNo
        })
        .then(message => console.log(message.sid))

}

sendWhatsapp('+919309094205')

export default sendMail;