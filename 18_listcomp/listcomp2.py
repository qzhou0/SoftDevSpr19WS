"""
Qian Zhou
SoftDev2 pd07
K 17 -- PPFTLCW
2019-04-13
"""
"""
~ ~ ~ *  D I R E C T I V E  * ~ ~ ~
Write Python3 code to accomplish each task below, 
a) teh loopy way
b) teh listcompy way
"""

"""Pythagorean Triples"""
def py3(n,loop=False):
    
    if loop:
        triples=[]
        for i in range(1,n):
            for j in range(i,int((n**2-i**2)**.5)):
                if int((i**2+j**2)**.5)==(i**2+j**2)**.5:
                    triples.append([i,j,(i**2+j**2)**.5])
        return triples
    return [[i,j,(i**2+j**2)**.5]
            for i in range(1,n) for j in range(i,int((n**2-i**2)**.5))
            if int((i**2+j**2)**.5)==(i**2+j**2)**.5]

#print(py3(100))
#print(py3(100,True))                           


def traditionalquicksort(L,lo=None,hi=None):
    def swap(a,b,L):
        aa=L[a]
        L[a]=L[b]
        L[b]=aa
        return
    def partition(L,lo,hi):
        pivVal=L[hi]
        storPos=lo
        for i in range(lo,hi):
            if L[i]<pivVal:
                swap(i,storPos,L)
                storPos+=1
        swap(hi,storPos,L)
        return storPos
    
    if lo==None:
        lo=0
        hi=len(L)-1
    if lo<hi:
        p=partition(L,lo,hi)
        print(L,lo,hi)
        traditionalquicksort(L,lo,p-1)#p is sorted
        traditionalquicksort(L,p+1,hi)#p is sorted
    return L

def quicksort(L,loop=False):
    return "I have no idea"
print(quicksort([1,5,2,7,9,1,100,53,32],True))
#print(traditionalquicksort([5,2,7,88,32,77,100,1]))
