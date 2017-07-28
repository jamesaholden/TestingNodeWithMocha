var assert = require('assert');
var should = require('chai').should();  // any require('chai').should(); applies to entire project

describe('Basic Mocha Test', () => {
    it('should deal with objects', () => {
        var obj = { name: 'James', gender: 'male' };
        var objB = { name: 'James', gender: 'male' };

        //obj.should.equal(objB);       // not equal, compares references
        obj.should.deep.equal(objB);    // equal, compares members

        // obj.should.have.property('name').equal('James');     // can chain shoulds

    });

    it('should allow testing nulls', function() {
            var iAmNull = null;
            should.not.exist(iAmNull);
            //iAmNull.should.not.exist;       // fails, because should() can't be attached to null
    });
});