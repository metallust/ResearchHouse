# write basic flask app
# run with: python app.py

from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np
import pandas as pd


app = Flask(__name__)

# load model


@app.route('/')
def home():
    return "ML API!"


def summarize_text():
    # TODO: get text from request
    return "💀 nahi hua be wo code paste yaha... /summarize me"

# summarize end point on get request and return text
@app.route('/summarize', methods=['POST'])
def summarize():
    if request.method == 'POST':
        # get text from request
        text = request.form['text']
        # summarize text
        result = summarize_text(text)
        # return result
        return result
    retur"


# app listen
if __name__ == "__main__":
    app.run(debug=True, port=5000)

