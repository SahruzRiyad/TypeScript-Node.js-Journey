{
    // Static properties

    class Counter{
        static count: number = 0;
        static increment(){
            return Counter.count = Counter.count + 1;
        }

        static decrement(){
            return Counter.count = Counter.count - 1;
        }
    }

    // const instance1 = new Counter()
    // console.log(instance1.increment()) // 1 -> different memory allocaton for non-static

    // const instance2 = new Counter()
    // console.log(instance2.increment()) // 1 -> different memory allocation

    // const instance1 = new Counter()
    console.log(Counter.increment()) // 1

    // const instance2 = new Counter()
    console.log(Counter.increment()) // 2

    // const instance3 = new Counter()
    console.log(Counter.decrement()) // 2

}