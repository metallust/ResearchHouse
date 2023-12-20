import spacy
import pytextrank

from pdfParser import parsedText

nlp = spacy.load("en_core_web_lg")
nlp.add_pipe("textrank")


text = parsedText("C:/Users/apeer/Downloads/MNThesis-Final.pdf")

doc = nlp(text)
a = []
for sent in doc._.textrank.summary(limit_phrases=5, limit_sentences=10):
    a.append(sent)
print(a)