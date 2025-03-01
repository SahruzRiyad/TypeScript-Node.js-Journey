{
    // Static properties
    var Counter_1 = /** @class */ (function () {
        function Counter() {
        }
        Counter.increment = function () {
            return Counter.count = Counter.count + 1;
        };
        Counter.decrement = function () {
            return Counter.count = Counter.count - 1;
        };
        Counter.count = 0;
        return Counter;
    }());
    // const instance1 = new Counter()
    // console.log(instance1.increment()) // 1 -> different memory allocaton for non-static
    // const instance2 = new Counter()
    // console.log(instance2.increment()) // 1 -> different memory allocation
    // const instance1 = new Counter()
    console.log(Counter_1.increment()); // 1
    // const instance2 = new Counter()
    console.log(Counter_1.increment()); // 2
    // const instance3 = new Counter()
    console.log(Counter_1.decrement()); // 2
}
