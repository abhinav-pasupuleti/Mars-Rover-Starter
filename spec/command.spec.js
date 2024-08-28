const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function () {
  //3 test cases
  it("throws error if command type is NOT passed into constructor as the first parameter", function () {
    expect(function () { 
      new Command();
     }).toThrow(new Error('Command type required.'));
  });

  it("throws error if the constructor in the Command class DOES NOT correctly set the commandType property", function () {
    const commandType = "MOVE";
    const command = new Command(commandType);
    expect(command.commandType).toBe(commandType);
  });

  it("throws error if the constructor DOES NOT correctly set the value property", function () {
    const value = "val";
    const command = new Command("MOVE", value);
    expect(command.value).toBe(value);
  });
});
