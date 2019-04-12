"""
Qian Zhou
SoftDev2 pd07
K16 -- Do you Even List?
2018-04-11
"""

def minThresh(p):
    num='1234567890'
    lc=[1 if x.isupper()
        else 0 if x.islower() 
        else -1 if x in num
        else 2
        for x in p]
    #set comprehension would be faster for checking
    return 1 in lc and 0 in lc and -1 in lc and len(p)>=8

def strength(p):
    #1-10, 1 being weak, 10 being strong
    n=0
    def check(v,n,i,ii):
        if v>ii:
            n+=2
        elif v>i:
            n+=1
        return n
    n=check(len(p),n,3,8)
    up=sum([1  for x in p if x.isupper()])
    n=check(up,n,2,4)
    low=sum([1  for x in p if x.islower()])
    n=check(low,n,2,5)
    num=sum([1  for x in p if x.isdigit()])
    n=check(num,n,2,4)
    chars='.?!&#,;:-_*'
    ch=sum([1  for x in p if x in chars ])
    n=check(ch, n,2,4)
    
    return n
    
print(minThresh('abcdefg'))
print(minThresh('abcdefg1'))
print(minThresh('abcdefG2'))

print(strength('abcdefghijklmnopqrstuvwxyz'))
print(strength('abcdefghijklmnopqrstuvwxyzABCD98765./,'))
print(strength('aB2c.'))
print(strength('aaaaaaaaaaAAAAAA111111,,,,,,'))

