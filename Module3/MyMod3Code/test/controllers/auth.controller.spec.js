var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect;    // no parens
var should = require('chai').should();  // needs parens

// added for use of promise:
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();

describe('AuthController', () => {

    // either name your beforeEach functions...
    beforeEach(function settingUpRoles() {
        console.log('running before each');
        authController.setRoles('[user]');
    });

    // ... or set a description for them (first argument before function)
    // beforeEach('this function is erroring intentionally', function erroringFunction() {
    //     throw({error: 'error'});
    // });

    // can say describe.only(...) or it.only(...) to run only certain sections

    // can say describe.skip(...), maybe it.skip(...), to treat defined test as pending

    // if conditional logic (often based on environment) in test, use this.skip() to skip 
    // test under those conditions

    describe('isAuthorized', () => {

        it('Should return false if not authorized', () => {
            var isAuth = authController.isAuthorized('admin');
            //assert.equal(false, isAuth);
            expect(isAuth).to.be.false;
        });

        it('Should return true if authorized', () => {
            authController.setRoles(['user', 'admin']);
            var isAuth = authController.isAuthorized('admin');
            //assert.equal(true, isAuth);
            isAuth.should.be.true;
        });

        // pending (i.e. not yet defined) tests
        it('Should not allow a get if not authorized');

        it('Should allow get if authorized');
        
    });

    describe('isAuthorizedAsync', () => {

        // containing function can't be arrow function here, because inside,
        // this has different meaning :(
        it('Should return false if not authorized', function(done) {
            //this.timeout(2500);
            authController.isAuthorizedAsync('admin', (isAuth) => {
                assert.equal(false, isAuth);
                done();
            });
        }); 
    });    

    describe('isAuthorizedPromise', () => {

        it('Should return false if not authorized', function() {
            return authController.isAuthorizedPromise('admin').should.eventually.be.false;
        }); 
    });    
    
});