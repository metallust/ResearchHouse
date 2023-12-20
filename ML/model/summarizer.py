import spacy
import pytextrank

from pdfParser import parsedText

nlp = spacy.load("en_core_web_lg")
nlp.add_pipe("textrank")


def summarize_text(path):
    text = parsedText(path)
    doc = nlp(text)
    a = []
    for sent in doc._.textrank.summary(limit_phrases=10, limit_sentences=10):
        a.append(sent)
    return a


# print(summarize_text("sample.pdf"))
