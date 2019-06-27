var _ = require('lodash');
var x = [4,2,6,1,8,5,3,0];

//shuffle function
console.log(_.shuffle(x));

//REVERSE function

console.log(_.reverse(x));

// CHUNK function

console.log(_.chunk(x));

// WITHOUT function
console.log(_.without(x,6,5));

// MAX function

console.log(_.max(x));

//UNIT TESTS////

const assert = require('assert');

//   it('right max', ()=>{
//       assert.equal(_.max(x), 8);
//   });
if (typeof describe === 'function' ) {
    describe('max',()=>{
    it('reverse', ()=>{
              assert.deepEqual(_.reverse([1,2,3]), [3,2,1]);
          });
          it('max', ()=>{
            assert.deepEqual(_.max([1,2,3]), 3);
        });    
    })
}

