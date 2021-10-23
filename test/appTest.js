var chai = require('chai');  
var chaiHttp = require("chai-http")
const { response } = require('express');
var assert = chai.assert;
chai.use(chaiHttp);
const runExpressServer = require("../app")
describe('App', () => {
    //ToDO: Write Tests
    // describe('/', function() {
    //   it('Should return a response with status code 200', done =>  {
    //     chai.request(runExpressServer).get("/").end((err,response) => {
    //        console.log(response)
    //     })
    //   });
    // });
  });