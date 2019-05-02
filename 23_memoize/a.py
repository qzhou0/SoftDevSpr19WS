import random

def make_HTML_heading(f):#takes a function (not called yet)
    txt=f()
    def inner():
        return '<h1>' + txt + '</h1>'
    return inner#returns a function that does not take variables

#equiv to greet=make_HTML_heading(greet)
@make_HTML_heading  #decorator, becomes part of this thing,
                    #greet no longer accessible alone
def greet():
    greet = ['Hello', 'AYO', 'Hola', 'Bonjour', 'Word up']
    return random.choice(greet)#returns string

print(greet())
#greet_heading=make_HTML_heading(greet)
# print(greet_heading()

#------------------------------------------------------

#memoization: process of storing prev calc results, to avoid recalc (write memos)

#understanding helped by Anton
#Confusing Part: identity within one function. memoized-fib is inputed into memoize which returns a fibb called fib which is then called in memoized-fib. i.e. when memoized-fib calls fib(n-1)+fib(n-2) it is not calling itself (even as it is written inside itself!) but calling new fib which memoized this fib

def memoize(f):
    memo={}
    def fibb(n):
        
        if n not in memo.keys():
            #print(n)
            memo[n]=f(n)
        return memo[n]
    return fibb
counter=[0]

@memoize #fib = memoize(fib)
def fib(n):
    #print('a')
    print(n)
    if n ==0:
        return 0
    elif n ==1:
        return 1
    counter[0]+=1
    #print(counter)
    return fib(n-1)+fib(n-2)

#want fib(n) to return fibbonaci number at n
#how to make fib access memo?

mem=fib(10)#would expect 10 counters if works
print(mem)
