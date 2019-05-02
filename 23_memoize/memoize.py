def memoize(f):
    cache={}
    def memoized_fxn(*args):
        if args in cache:
            return cache[args]
        result = fxn(*args)
        cache[args]=result
        return result
    return memoized_fxn
