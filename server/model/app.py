from flask import Flask, render_template, request, jsonify
from summarizer import summarize_text

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/summarize', methods=['POST'])
def summarize():
    # get the input text
    text = request.form['text']
    # summarize the text
    summary = summarize_text(text)
    # return the summarized text
    return jsonify({'summary': summary})

if __name__ == '__main__':
    app.run(debug=True, port=5003)


# text idea
# fetch all the summarized text from the database
# compare the text with the input text
# get the most similar text
# the that text is greater than similarity threshold
# return that text
