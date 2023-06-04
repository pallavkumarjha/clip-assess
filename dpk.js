const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

function deterministicPartitionKey(event) {
  let candidate = null;

  if (event?.partitionKey) {
    candidate = event.partitionKey;
  } else if (event) {
    // If partition key is not provided, hash the event object using SHA3-512 and use that as candidate key
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  if (candidate != null) {
    // If candidate key is not null, stringify it if it's not a string already
    candidate = typeof candidate === "string" ? candidate : JSON.stringify(candidate);
  } else {
    // If candidate key is null, use the trivial partition key
    candidate = TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    // Truncate candidate key if it's longer than the maximum allowed length
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
}

module.exports = {
  deterministicPartitionKey,
};
