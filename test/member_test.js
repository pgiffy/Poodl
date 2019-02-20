process.env.NODE_ENV = 'test';

let mongoose = require('mongoose');

let Mockgoose = require('mockgoose').Mockgoose;
let mockgoose = new Mockgoose(mongoose);

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

before(function(done) {
    mockgoose.prepareStorage().then(function() {
        mongoose.connect(
            'mongodb://example.com/TestingDB',
            { useNewUrlParser: true },
            function(err) {
                done(err);
            }
        );
    });
});

after(function() {
    process.exit(0);
});

describe('Members suite /ADD,/GET,/GET/:ID,/DELETE', () => {
    it('it should add a new member', done => {
        let testMember = {
            firstName: 'Jake',
            lastName: 'Peralta',
            email: 'NINENINE@gmail.com',
            address: 'Brooklyn 99',
            membershipDate: 'Frever',
            renewalDate: 'Today'
        };

        chai.request(server)
            .post('/api/members/add')
            .send(testMember)
            .end((err, res) => {
                res.should.have.status(200);

                done();
            });
    });
    var tempId = '';
    it('it should get all members', done => {
        chai.request(server)
            .get('/api/members/get')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('success').eql(true);
                tempId = res.body.data[0]._id;
                done();
            });
    });

    it('it should get a specific member', done => {
        chai.request(server)
            .get('/api/members/get/' + tempId)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
    it('it should delete a specific member', done => {
        chai.request(server)
            .delete('/api/members/delete/' + tempId)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});