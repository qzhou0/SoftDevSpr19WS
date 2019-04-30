"""
Qian Zhou
SoftDev2 pd07
K22 -- Closure
2019-04-30
"""

#-----------------------other classwork--------------------
def inc(x):
    return x+1

f=inc

#print(f)
#print(inc)
#print(f(10))

def adder(a,b):
    return a+b
def caller(c):
    print(c(2,4))
    print(c(3,5))
    return
#caller(adder)

def outer(x):#outer generates a function that return true if x is in an input
    def contains(l):
        return x in l
    return contains #

contains_15 = outer(15)

##print(contains_15([1,2,3,4,5]))
#False
##print(contains_15([13,14,15,16,17]))
#True
##print(contains_15(range(1,20)))
# True

##del outer
##outer(42)
##print(contains_15(range(14,20)))
def outer():
    x="foo"
    def inner():
        #nonlocal x #makes x persistent after execution of inner()
        #print(x) #foo
        x="bar"#local defining; gone after execution of inner()
    inner()
    return x
##print(outer())#foo

# -------------- HW ---------------------------
# 1)-----------------------
def repeat(s):
    def r(n):
        return s*n
    return r

r1=repeat('hello')
##print(r1(2))
r2=repeat('goodbye')
##print(r2(2))
##print(repeat('cool')(3))

# 2)---------------------
def make_counter():
    x=0
    def control(access=False):
        #if input True or anything not empty/None, will return x, not increment it
       nonlocal x
       if access:
           return x
       x+=1
       return x
    
    return control

ctr1=make_counter()
print(ctr1())
print(ctr1())
print(ctr1(True),"expect 2")

ctr2=make_counter()
print(ctr2())
print(ctr1(), 'expect 3')
print(ctr2())







