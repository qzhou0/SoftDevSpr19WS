# William Lu, Qian Zhou
# SoftDev2 pd7
# K20 -- Reductio ad Absurdum
# 2019-04-18 R

from functools import reduce

f = open('book.txt', 'r')
text = f.read().replace('.', ' ').replace(',', ' ').replace('"', ' ').replace(';', ' ').replace('?', ' ').replace('!', ' ').replace(':', ' ')
wordList = text.lower().split()

def getFrequency(word):
    # print(l)
    word=word.lower()
    l = [0] + wordList#lambda goes through (((0,1),2)...etc); must make initial a zero
    return reduce((lambda x, y: x + 1 if y == word else x), l)

def totalFrequency(words):
    # I don't think this will be able to get frequency of a phrase,e.g. 'how are you'
    words=words.lower().split()
    
    wlSet=[0]+[[wordList[i] for i in range(j,j+len(words))] for j in range(len(wordList)-len(words)+1)]
    return reduce(lambda x,y: x+1 if y==words else x, wlSet)
    #frequencies=[[0,0]]+[ sum([n if w == words[n-1] else 0 for n in range(1,len(words)+1)]) for w in wordList]
    """
    #frequencies = [getFrequency(x.lower()) for x in words]#frequency of everyword in wordlist
    def trimdata(L):
        L=L[:]
        i=1
        while i < len(L)-1:
            if L[i+1]==L[i]==L[i-1]==0:
                L.pop(i+1)
                L.pop(i)
                i-=1
            i+=1
        print( L)
    #trimdata(frequencies)
    def update(x,y):
        #x=[count, lastword_id]
        if x[1]+1==y:
            if y <len(words):
                x[1]=y
            elif y==len(words):
                #print(x,y)
                x[0]+=1
                x[1]=0
        elif y==0:
            x[1]=0
        return x
            
    return reduce(update, frequencies)[0]
    """

def mostFrequency():
    l = [{}] + wordList#first element is a dict
    def modify(d, word):
        word=word.lower()
        if word in d:
            d[word] += 1
        else:
            d[word] =1
        return d
    d = reduce(modify, l)
    print(d.get)
    return max(d, key=d.get)

print(getFrequency('the'))#results are lower than notepad++ search
print(getFrequency('you'))#results are lower than notepad++ search

#print(totalFrequency(['the', 'you']))
print(totalFrequency('we have'))#2 more than count from notepadd++ count
print(totalFrequency('you are'))
print(totalFrequency('you'))
print(totalFrequency('who are'))
print(totalFrequency('they will'))

print(mostFrequency())
