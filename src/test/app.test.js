const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../app"); // Adjust the path based on your project structure

chai.use(chaiHttp);
const expect = chai.expect;

let mongoServer;

// Assuming you have a Subscriber model
const Subscriber = require("../model/subscribers");

// Set up an in-memory MongoDB server before running tests
before(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// Tear down the in-memory MongoDB server after running tests
after(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Subscriber API", () => {
  // Assuming you have some test data in your database for these tests
  // You may need to adjust these IDs based on your actual data
  let validSubscriberId;
  let invalidSubscriberId;

  before(async () => {
    // Insert test data into the in-memory database
    const validSubscriber = await Subscriber.create({
      name: "John Doe",
      subscribedChannel: "Channel A",
    });

    validSubscriberId = validSubscriber._id;

    // The invalid subscriber ID is just a random string not present in the database
    invalidSubscriberId = "invalid-subscriber-id";
  });

  it("should get all subscribers", (done) => {
    chai
      .request(app)
      .get("/subscribers")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  it("should get subscribers with names and subscribed channels", (done) => {
    chai
      .request(app)
      .get("/subscribers/name")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  it("should get a specific subscriber by ID", (done) => {
    chai
      .request(app)
      .get(`/subscribers/${validSubscriberId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        done();
      });
  });

  it("should handle a request with an invalid subscriber ID", (done) => {
    chai
      .request(app)
      .get(`/subscribers/${invalidSubscriberId}`)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property("message", "Subscriber not found");
        done();
      });
  });

  // Add more test cases for error scenarios, edge cases, and other routes if needed.
});
