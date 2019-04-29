
```cypher
CREATE
MATCH
  WHERE <boo>
WITH stuff AS varname,...,... // can have a WHERE trailing behind
SET
MERGE
  ON CREATE SET
  ON MATCH SET
DELETE, DETACH DELETE, REMOVE (p.property)

RETURN
  DISTINCT // avoid duplicates
```
### Strange...?

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

### Aggregates
```
count(stuff) // ignore null, unless * or otherwise
collect(stuff) AS varname
size(list)
UNWIND list as separate_rows-varname
ORDER BY r1,r2 (DESC)                 // sort on two values; asc is default
                                      // sort after return, will be based on size...?
   LIMIT num // limits results by num; w/o Order, random 3
```

* stuff seems typically properties

### Complex

```cypher
MATCH (j:----)-|>|[]|<|-()-[]-(o:), //other than j
       |(j)-[]-(o)|                 // no arrow?
```

