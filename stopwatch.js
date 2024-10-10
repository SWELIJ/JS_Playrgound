class Stopwatch {
  constructor() {
    this.duration = 0
    this.running = false
  }
  
   #startTime = {}
   #endTime = {}

  start() {
    this.running = true;
    this.#startTime = new Date();
  }

  stop() {
    if (!this.running) throw new Error("Must start stopwatch before stopping.");
    this.running = false;
    this.#endTime = new Date();

    const seconds = (this.#endTime.getTime() - this.#startTime.getTime()) / 1000;
    this.duration += seconds;
  }

  reset() {
    this.duration = 0;
    this.running = false;
    this.#startTime = null;
    this.#endTime = null;
  }

}

const sw = new Stopwatch();
console.log(sw)