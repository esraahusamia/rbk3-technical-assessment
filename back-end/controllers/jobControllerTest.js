var expect = require('chai').expect;
var mongoose = require('mongoose');


var dbURI = 'mongodb://localhost/jobquery';

// The `clearDB` helper function, when invoked, will clear the database
var clearDB = function (done) {
  mongoose.connection.collections['jobs'].remove(done);
};

describe('Job Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  beforeEach(function (done) {
    clearDB(function () {
          // TODO: Seed database with some jobs to run tests against. 
          var jobs = [
          { 
            company : 'google' ,
            title: 'prgrammer' ,
            description: 'javaScript programmer' ,
            postedDate: '1/12/2017' ,
            salary: '1500$'

          },
          { 
            company : 'microsft' ,
            title: 'prgrammer' ,
            description: 'desktop programmer' ,
            postedDate: '5/12/2017' ,
            salary: '2000$'

          },
          {
            company : 'manseer' ,
            title: 'manger' ,
            description: 'manegar' ,
            postedDate: '5/12/2017' ,
            salary: '60000$'

          }
          ]
        });
  });

  // TODO: Write your tests for jobController here

  it('should have a method that given the job values of a job table, insert the record to the database', function (done) {
  // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
  // HINT: The `done` passed in is quite important...
  // add a new recourd to the database 
  //the input should have the value to all column 
  createJob({company : 'RBK' ,
            title: 'prgrammer' ,
            description: 'FrontEnd programmer' ,
            postedDate: '5/12/2017' ,
            salary: '2000$'}).should.addTo(jobs)
});
  it('should have a method that return  all the records  the database that have the salary > 50000 $', function (done) {
  // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
  // HINT: The `done` passed in is quite important...
  // return all recourds with all data when the salary > 50000

  getHighPayingJobs().should.equle(  {
            company : 'manseer' ,
            title: 'manger' ,
            description: 'manegar' ,
            postedDate: '5/12/2017' ,
            salary: '60000$'

          })


});

