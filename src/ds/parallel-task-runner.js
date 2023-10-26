class Runner {
    constructor(tasks) {
        this.concurrentThreads = tasks;
        this.tasks = []
        this.counter = 0;
    }

    async executeTask(fn) {
        this.counter++;
        let result = await fn.apply(arguments)
  
            this.counter --
            if(this.counter < this.concurrentThreads)
            task = this.tasks.shift()
            if(task) this.executeTask(task)
    
    }
    add(fn) {
        if(this.counter < this.concurrentThreads) {
            this.executeTask(fn)
        }
        else {
            this.tasks.push(fn)
        }
    }
}

function task(x) {
  return function () {
    return new Promise((resolve, _) => {
      //console.log('task', x)
      setTimeout(() => {
        console.log("task completed", x);
        resolve();
      }, 5000);
    });
  };
}

const runner = new Runner(3);
runner.add(task(2));
runner.add(task(2));
runner.add(task(2));

runner.add(task(4));
runner.add(task(4));
runner.add(task(4));

runner.add(task(6));
runner.add(task(6));
runner.add(task(6));
