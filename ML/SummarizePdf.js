import summary from 'node-summary';

function summarizeText(inputText, summaryLength = 3) {
    return new Promise((resolve, reject) => {
        summary.summarize(inputText, (err, summaryText) => {
            if (err) {
                reject(err);
            } else {
                // Extract the first 'summaryLength' sentences as the summary
                const sentences = summaryText.split('. ');
                const finalSummary = sentences.slice(0, summaryLength).join('. ') + '.';
                resolve(finalSummary);
            }
        });
    });
}

// Example usage
const inputText = `
Kafka was born into a middle-class German-speaking Czech Jewish family in Prague, the capital of the Kingdom of Bohemia, then part of the Austro-Hungarian Empire (today the capital of the Czech Republic).[7] He trained as a lawyer, and after completing his legal education was employed full-time by an insurance company, forcing him to relegate writing to his spare time. Over the course of his life, Kafka wrote hundreds of letters to family and close friends, including his father, with whom he had a strained and formal relationship. He became engaged to several women but never married. He died in obscurity in 1924 at the age of 40 from tuberculosis.
`;

summarizeText(inputText, 2)
    .then((summary) => {
        console.log('Summary:', summary);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
