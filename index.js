
// Utility Functions

/**
 * Capitalizes the first letter of each word in the input string.
 * @param {string} input - The input string.
 * @returns {string} - The formatted string.
 */
function capitalizeWords(input) {
    return input.replace(/\b\w/g, char => char.toUpperCase());
}

describe("capitaliseWords(input)",() => {
    it(" Reformats a string so that the first letter of each word is capitalized.",() =>{
        const input = "hello world";
        const output = capitalizeWords(input);
        expect(output).toBe("Hello World")
    });

});
describe("capitaliseWords(input)", () => {
    it ("Handles empty strings", () =>{
        const input = ""
        const output = capitalizeWords(input)
            expect(output).toBe("")
    });
    
});
describe("capitaliseWords(input)", () => {
    it ("Handles words with special characters", () =>{
        const input = "hello-world"
        const output = capitalizeWords(input)
        expect(output).toBe("Hello-World")
    });
    
});
describe("capitaliseWords(input)", () => {
    it ("Handles single strings", () =>{
        const input = "hello"
        const output = capitalizeWords(input)
        expect(output).toBe("Hello")

    });
    
});
/**
 * Filters active users from the array.
 * @param {Array} users - An array of user objects.
 * @returns {Array} - An array of active user objects.
 */
function filterActiveUsers(users) {
    return users.filter(user => user.isActive);
}
describe("filterActiveUsers(users)", () => {

  it("filters active users from a mixed array", () => {
    const users = [
      { id: 1, name: "Alice", active: true },
      { id: 2, name: "Bob", active: false },
      { id: 3, name: "Charlie", active: true }
    ];

    const result = filterActiveUsers(users);

    expect(result).toEqual([
      { id: 1, name: "Alice", active: true },
      { id: 3, name: "Charlie", active: true }
    ]);
  });

  it("returns an empty array when all users are inactive", () => {
    const users = [
      { id: 1, name: "Alice", active: false },
      { id: 2, name: "Bob", active: false }
    ];

    const result = filterActiveUsers(users);

    expect(result).toEqual([]);
  });

  it("returns an empty array when given an empty array", () => {
    const users = [];

    const result = filterActiveUsers(users);

    expect(result).toEqual([]);
  });

});

/**
 * Logs an action performed by a user with a timestamp.
 * @param {string} action - The action performed.
 * @param {string} username - The name of the user.
 * @returns {string} - The log message.
 */
function logAction(action, username) {
    const timestamp = new Date().toISOString();
    return `User ${username} performed ${action} at ${timestamp}`;
}
describe("logAction – valid inputs", () => {

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2024-11-27T12:00:00Z"));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("generates the correct log string for valid inputs", () => {
    const result = logAction("login", "Alice");

    expect(result).toBe(
      "User Alice performed login at 2024-11-27T12:00:00.000Z"
    );
  });

});


describe("logAction – missing inputs", () => {

  it("logs undefined action when action is missing", () => {
    const result = logAction(undefined, "Alice");

    expect(result).toContain("User Alice performed undefined at");
  });

  it("logs undefined username when username is missing", () => {
    const result = logAction("login", undefined);

    expect(result).toContain("User undefined performed login at");
  });

});


describe("logAction – empty string inputs", () => {

  it("logs empty values when empty strings are provided", () => {
    const result = logAction("", "");

    expect(result).toContain("User  performed  at");
  });

});


module.exports = { capitalizeWords, filterActiveUsers, logAction };
