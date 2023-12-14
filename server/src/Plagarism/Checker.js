import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const APIKEY = process.env.API_KEY;
const plagiarismCheck = (text) => {
	const options = {
		method: "POST",
		url: "https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism",
		headers: {
			"content-type": "application/json",
			"X-RapidAPI-Key": APIKEY,
			"X-RapidAPI-Host": "plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com",
		},
		data: {
			text: text,
			language: "en",
			includeCitations: false,
			scrapeSources: false,
		},
	};

	try {
		return axios.request(options);
	} catch (error) {
		console.error("error");
	}
};

module.exports = plagiarismCheck;
