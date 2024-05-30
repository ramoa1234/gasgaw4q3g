import numpy as np
import torch
import torch.nn as nn

#tokenize text and put into vector(text(strings) need to be stores as text(integers))
test_input = "Hello, world. This is meant to be a test for tokenization algorithm. Hello."



class vocab_item:
    def __init__(self, name):
        self.name = name
        self.count = 0

vocab = []
words= []

def tokenizer(test_input):
    #needs to convert from upper to lower
    test_input = test_input
    word_array = []

    for char in test_input:
        if(char.isalpha()):
            if(char.isupper()):
                temp = char.lower()
                print('upper changed to lower')
            word_array.append(char)
            
        else:
            if word_array:
                words.append(word_array)
                word_array = []
            
    #array with individual words seperated into chars

    
    for char in words:
        if char in vocab:
            char.count += 1
        else:
            char = vocab_item(char)
            char.count += 1
            vocab.append(char)
    print(words)
    print(vocab)


#transformer

class transformer(nn.module):
    

