const expect = require('expect')
const main = require('../hello.js')

const hoge = (sys, res)=> {
  result = res.body
}

let result = ""

describe('HelloTest', function(){
  it ('promise', () => {
    main.handler({}, "", hoge)
    expect(result).toBe('hello,world!')
  })
})
