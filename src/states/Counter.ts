export default class Counter {
  count = 0

  get countText() { return `Count is ${ this.count }` }

  ADD_COUNT = ( number ) => { this.count = this.count + number }
  SUBTRACT_COUNT = ( number ) => { this.count = this.count - number }
}