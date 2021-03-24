const faker = require('faker');

function createTask(userContext, events, done){
    //Generate data with Faker
    const taskName = `${faker.name.title()}`;

    //Add variables to virtual task context
    userContext.vars.taskName = taskName;

    //continue with the executing scenario
    return done();
}

module.exports = {createTask}
