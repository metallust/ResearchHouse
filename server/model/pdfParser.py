# import pandas as pd
# import pdfquery

# #read the PDF
# pdf = pdfquery.PDFQuery("C:/Users/apeer/Downloads/MNThesis-Final.pdf")
# pdf.load()


# #convert the pdf to XML
# pdf.tree.write('customers.xml', pretty_print = True)
# print(pdf)

# # access the data using coordinates
# customer_name = pdf.pq('LTTextLineHorizontal:in_bbox("68.0, 231.57, 101.990, 234.893")').text()

# print(customer_name)

# #output: Brandon James

from PyPDF2 import PdfReader 
  
# creating a pdf reader object 
def parsedText(pdf):    
    reader = PdfReader(pdf)
    pages = len(reader.pages)
    text = ""
    # getting a specific page from the pdf file 
    for i in range(pages):
        page = reader.pages[i] 
        text += page.extract_text() 
    # extracting text from page 

    return text