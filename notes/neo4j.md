
```cypher
CREATE
MATCH
  WHERE <boo>
SET
MERGE
  ON CREATE SET
  ON MATCH SET
DELETE, DETACH DELETE, REMOVE (p.property)

```
## Strange...?

```cypher
OPTIONAL_MATCH ()-[]-() // return null if does not find it 
                        // not arrow?

```

### Booleans
``` cypher
AND OR NOT XOR

exists(p.property, or relationship)
p.property STARTS_WITH, CONTAINS, ENDS_WITH <stuff>
p.property =~ 'Jo.*' //expects John, Joe, etc.
x in [---]
```


### Complex

```cypher
MATCH (j:----)-|>|[]|<|-()-[]-(o:), //other than j
       |(j)-[]-(o)|                 // no arrow?


```
