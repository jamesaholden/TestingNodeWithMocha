var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect;
var should = require('chai').should();
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var sinon = require('sinon');

chai.use(chaiAsPromised);
chai.should();

describe('AuthController', function () {

    // either name your beforeEach functions...
    beforeEach(function settingUpRoles() {
        console.log('running before each');
        authController.setRoles(['user']);
    });

    // ... or set a description for them (first argument before function)
    // beforeEach('this function is erroring intentionally', function erroringFunction() {
    //     throw({error: 'error'});
    // });

    // can say describe.only(...) or it.only(...) to run only certain sections

    // can say describe.skip(...), maybe it.skip(...), to treat defined test as pending

    // if conditional logic (often based on environment) in test, use this.skip() to skip 
    // test under those conditions

    //  describe('isAuthorized', function () {
    //      beforeEach(function settingUpRoles() {
    //         console.log('running before each');
    //         authController.setRoles(['user']);
    //     });

    describe('isAuthorized', function () {

        it('Should return false if not authorized', function () {
            var isAuth = authController.isAuthorized('admin');
            expect(isAuth).to.be.false;
        });
        it('Should return true if authorized', function () {
            authController.setRoles(['user', 'admin']);
            var isAuth = authController.isAuthorized('admin');
            isAuth.should.be.true;
        });
        it('should not allow a get if not authorized');
        it('should allow get if authorized');
    });

    describe('isAuthorizedAsync', function () {

        it('Should return false if not authorized', function (done) {
            authController.isAuthorizedAsync('admin',
                function (isAuth) {
                    assert.equal(false, isAuth);
                    done();
                });

        });

    });

    describe('isAuthorizedPromise', function () {

        it('Should return false if not authorized', function () {
            return authController.isAuthorizedPromise('admin').should.eventually.be.false;

        });

    });

    describe('getIndex', function () {
        it('should render index', function () {
            var req = {};
            var res = {
                render: sinon.spy()
            };

            authController.getIndex(req, res);
            //console.log(res.render);
            res.render.calledOnce.should.be.true;
            res.render.firstCall.args[0].should.equal('index');  // inspect sinon results
        });
    });
    // var user = {};
    // beforeEach(function () {
    //      user = {
    //         roles: ['user'],
    //         isAuthorized: function (neededRole) {
    //            return this.roles.indexOf(neededRole) >= 0;
    //         }
    //     };
    // });
    // it('should render index if authorized', function () {
    //     var isAuth = sinon.stub(user, 'isAuthorized').returns(true);
    //     var req = {user: user};
    //     var res = {
    //         render: function(){}
    //     };
    //     var mock = sinon.mock(res);
    //     mock.expects('render').once().withExactArgs('index');

    //     authController.getIndex(req, res);
    //     isAuth.calledOnce.should.be.true;

    //     mock.verify();
    // });
});