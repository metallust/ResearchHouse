import spacy
nlp = spacy.load("en_core_web_lg")


def similarityCheck(text, summary):
    voc = nlp(text)
    a = nlp(summary)
    # sort the text according to similarity
    return {'similarity_score': a.similarity(voc)}
