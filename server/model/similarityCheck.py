import spacy
nlp = spacy.load("en_core_web_lg")


def similarityCheck(text):
    text = []      # Retrive the summary of all the 
    similar = []
    # a = nlp.vocab[input()]
    a = nlp(input())  # take input from text field
    print(a)
    for t in text:
        voc = nlp(t)
        similar.append(a.similarity(voc))
        # print(voc)
    print(similar)
    
    # sort the text according to similarity
    return similar