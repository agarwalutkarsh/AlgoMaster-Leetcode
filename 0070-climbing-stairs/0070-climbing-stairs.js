var climbStairs = function (n) {
    const map = new Map();

    const climbStairsRecursion = (n) => {
        if (n === 1) return 1;
        if (n === 2) return 2;
        if (map.has(n) && map.get(n) !== 0) {
            return map.get(n)
        }
        map.set(n, climbStairsRecursion(n - 1) +  climbStairsRecursion(n - 2))
        return (
            map.get(n)
        );
    };
    return climbStairsRecursion(n)
};
