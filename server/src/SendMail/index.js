import nodemailer from "nodemailer";
import dotenv from "dotenv";
import logger from "../utils/logger.js";
dotenv.config();

const email = "teamprojecthouse2023@gmail.com";
const pass = "fgrg vsjm wuei krvq";

//Mail
export const sendMail = async (userEmail, password) => {
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
		text: `username : ${userEmail} password : ${password}`, // plain text body
		html: `<b>Your credentials for Research House is username : ${userEmail} password : ${password}</b>`, // html body
	});
	logger.info("Message sent: %s", info.messageId);
};

//Twilio AUTH
// const accountSid = "AC68e00c07d41df11cc5428052ae92b242";
// const authToken = "c2952bd86a40645091de0ce50e770ade";
// const client = require("twilio")(accountSid, authToken);

// //SMS
// export const sendSMS = (mobileNo) => {
// 	client.messages
// 		.create({
// 			body: "hello",
// 			from: "+18562813402",
// 			to: mobileNo,
// 		})
// 		.then((message) => console.log(message.sid));
// };
// sendSMS("+919309094205");

// //Whatsapp
// export const sendWhatsapp = (mobileNo) => {
// 	client.messages
// 		.create({
// 			body: "Your appointment is coming up on July 21 at 3PM",
// 			from: "whatsapp:+14155238886",
// 			to: "whatsapp:" + mobileNo,
// 		})
// 		.then((message) => console.log(message.sid));
// };

// sendWhatsapp("+919309094205");
