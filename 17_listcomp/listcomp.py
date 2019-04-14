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
"""
1. 
 ? -> 
['00', '22', '44', '66', '88'] 
"""
def eis(megistos, loop=None):
    if loop:
        l =[]
        i = 0
        while i <= megistos:
            l.append(str(i)*2)
            i+=1
        return l
    return [str(i)*2 for i in range(megistos+1)]
print(eis(8))
print(eis(8,True))
            
"""
2. 
? -> 
[7, 17, 27, 37, 47] 
"""
def twa(megistos, loop=None):
    if loop:
        l=[]
        for i in range(megistos+1):
            l.append(i*10+7)
        return l
    return [i*10+7 for i in range(megistos+1)]
print(twa(4))
print(twa(4,True))
"""
3. 
? -> 
[0, 0, 0, 0, 1, 2, 0, 2, 4]
is it this:
Floor(n/3)*(n mod 3).	
https://oeis.org/search?q=0%2C0%2C0%2C0%2C1%2C2%2C0%2C2%2C4&language=english&go=Search
"""
def tri(megistos,loop=None):
    if loop:
        l=[]
        for n in range(megistos):
            l.append(int(n/3)*(n%3))
        return l
    return [int(n/3)*(n%3) for n in range(megistos)]
        
print(tri(9))
print(tri(9,True))
"""
4. Composites on range [0,100], in ascending order.
"""
def tessares(loop=None):
    if loop:
        l=[]
        for i in range(101):
            for j in range(2,i):
                if i % j ==0:
                    l.append(i)
                    break
        return l
    return [i for i in range(101) if 0 in {i % j for j in range(2,i)}]
print(tessares())
print(tessares(True))

"""
5. Primes on range [0,100], in ascending order.
https://en.m.wikipedia.org/wiki/Sieve_of_Eratosthenes
"""
def pancan(loop=None):
    if loop:
        composite=set()
        l=[]
        for i in range(2,101):
            if i not in composite:
                l.append(i)
            for j in range(2,int(102/i)):##apparently 101/i did not work for 3, it left out j ==33
                
                composite.add(i*j)
        return l
    #is there a way to sieve of erastothenes this?
    return [i for i in range(2,101) if 0 not in {i % j for j in range(2,i)}]
print(pancan())
print(pancan(True))

"""
6. All divisors of a number, listed in ascending order.
"""
def vec(n,loop=None):
    if loop:
        l=[]
        for i in range(1,n):
            if n % i ==0:
                l.append(i)

        return l
    return [i for i in range(1,n) if n % i ==0]
print(vec(100))
print(vec(100,True))
    

"""
7. Transpose a matrix (turn rows into columns and vice-versa...)
"""
def seofon(M,loop=None):
    if loop:
        M2=[]
        for j in range(len(M[0])):
            line=[]
            for i in range(len(M)):
                line.append(M[i][j])
            M2.append(line)
        return M2
    return [[M[i][j] for i in range(len(M))] for j in range(len(M[0]))]
M1=[[1,2,5,7],
    [3,0,2,9],
    ['saptan','asta','navan','dasa']]
print( seofon(M1))
print(seofon(M1,True))

                
