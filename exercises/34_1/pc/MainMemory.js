class MainMemory {
  constructor () {
    this.loadedMemory = []
  }

  load (value) {
    this.loadedMemory.push(value);
  }

  get (index) {
    return Number(this.loadedMemory[index]);
  }

  clean () {
    this.loadedMemory = []
  }
}

module.exports = MainMemory
