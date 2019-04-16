#Teeming Wldeas

# union of {1, 2, 3} and {2, 3, 4} is the set of {1, 2, 3, 4}
def union(first, second):
    return [ x for x in first if x not in second ] + list(second)

print( union([1, 2, 3], [2, 3, 4]) )
print( union([2, 3, 4], [1, 2, 3]) )
print( union({1, 2, 3}, {2, 3, 4}) )

# intersection of {1, 2, 3} and {2, 3, 4} is the set {2, 3}
def intersection(first, second):
    return [ x for x in first if x in second ]

print( intersection([1, 2, 3], [2, 3, 4]) )
print( intersection([2, 3, 4], [1, 2, 3]) )

#set difference of U and A; set of all of U not of A
def setDiff(U,A):
    return [ x for x in U if x not in A ]
print( setDiff( [1,2,3], [2,3,4] ) )
print( setDiff( [2,3,4], [1,2,3] ) )

#symmetric difference of A and B: set f all objects that are a member of exactly one of A and B
#set differernce of union and intersection
def symmDiff(A,B):
    return setDiff(union(A,B),intersection(A,B))

print( symmDiff( [1,2,3], [2,3,4] ) )
print( symmDiff( [2,3,4], [1,2,3] ) )

C=[1,2,3]
D=["red", "white"]

#cartesian product of A and B: set of all possible ordered pairs (a,b)
def CartP(A,B):
    return [(a,b) for a in A for b in B]
print( CartP(C, D) )
