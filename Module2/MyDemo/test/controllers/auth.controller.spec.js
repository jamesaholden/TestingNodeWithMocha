var assert = require('assert');
var authController = require('../../controllers/auth.controller');

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
            assert.equal(false, authController.isAuthorized('admin'));
        });

        it('Should return true if authorized', () => {
            authController.setRoles(['user', 'admin']);
            assert.equal(true, authController.isAuthorized('admin'));
        });

        // pending (i.e. not yet defined) tests
        it('should not allow a get if not authorized');

        it('should allow get if authorized');
        
    });

    describe('isAuthorizedAsync', () => {

        // containing function can't be arrow function here, because inside,
        // this has different meaning :(
        it('Should return false if not authorized', function(done) {
            this.timeout(2500);
            authController.isAuthorizedAsync('admin', (isAuth) => {
                assert.equal(false, isAuth);
                done();
            });
        }); 
    });    
});