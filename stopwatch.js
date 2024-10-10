function Stopwatch(){
let startTime, endTime, running, duration = 0
 
this.start = function(){ 
  running = true
  startTime = new Date()
 
}

this.stop = function(){
  if(!running)
    throw new Error('Must start stopwatch before stopping.')
  running = false
  endTime = new Date()

  const seconds = (endTime.getTime()-startTime.getTime()) / 1000
  duration += seconds
}

this.reset = function(){
  duration = 0
  running = false
  startTime = null
  endTime = null
}

Object.defineProperty(this, 'duration', {
  get: function(){
    return duration
  }
  })

}

const sw = new Stopwatch()


