from flask import Flask, render_template, request, jsonify
from summarizer import summarize_text
from similarityCheck import similarityCheck

app = Flask(__name__)

@app.route('/')
def index():
    return "sadflknaskd"

@app.route('/summarize', methods=['POST'])
def summarize():
    # get the file from the request
    f = request.files['file']
    f.save(f.filename)
    # summarize the text
    a = summarize_text(f.filename)
    return str(a)

@app.route('/similarity', methods=['POST'])
def similarity():
    try:
        # Get the data from the request JSON
        data = request.json
        prompt = data.get('message')
        summary = data.get('summary')

        # Print the values for verification
        print("Prompt:", prompt)
        print("Summary:", summary)

        # Perform similarity check
        result = similarityCheck(prompt, summary)
        print("Result:", result)

        # Return a valid JSON response
        return jsonify(result)

    except Exception as e:
        # Handle exceptions appropriately
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5003)


# text idea
# fetch all the summarized text from the database
# compare the text with the input text
# get the most similar text
# the that text is greater than similarity threshold
# return that text
