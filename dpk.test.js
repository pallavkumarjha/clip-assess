const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {

  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  it("Returns the literal '0' when given no input", () => {
    const result = deterministicPartitionKey();
    expect(result).toBe(TRIVIAL_PARTITION_KEY);
  });

  it("returns the partition key if provided in the event object", () => {
    const event = { partitionKey: "my-partition-key" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe(event.partitionKey);
  });

  it("returns a hash of the event object if no partition key is present", () => {
    const event = { foo: "bar", baz: [1, 2, 3] };
    const expectedHash = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expectedHash);
  });

  it("truncates candidate keys longer than MAX_PARTITION_KEY_LENGTH", () => {
    const longKey = "x".repeat(MAX_PARTITION_KEY_LENGTH + 10);
    const expectedHash = crypto.createHash("sha3-512").update(longKey).digest("hex");
    const result = deterministicPartitionKey({ partitionKey: longKey });
    expect(result).toBe(expectedHash);
  });

  it("stringifies candidates that are not strings", () => {
    const numberCandidate = 42;
    const expectedHash = crypto.createHash("sha3-512").update(JSON.stringify(numberCandidate)).digest("hex");
    const result = deterministicPartitionKey(numberCandidate);
    expect(result).toBe(expectedHash);

    const objectCandidate = { foo: "bar" };
    const expectedHash2 = crypto.createHash("sha3-512").update(JSON.stringify(objectCandidate)).digest("hex");
    const result2 = deterministicPartitionKey(objectCandidate);
    expect(result2).toBe(expectedHash2);
  });

});
