import Checker from "../src/Plagarism/Checker.js";

const text = "This is a test";
const results = await Checker(text);

console.log(results);
