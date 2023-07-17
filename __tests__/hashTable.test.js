const HashTable = require("../hashTables");

describe("HashTable", () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  describe("set", () => {
    test("should add key-value pairs to the hash table", () => {
      hashTable.set("name", "John");
      hashTable.set("age", 30);
      hashTable.set("city", "New York");

      expect(hashTable.get("name")).toBe("John");
      expect(hashTable.get("age")).toBe(30);
      expect(hashTable.get("city")).toBe("New York");
    });

    test("should handle collisions correctly", () => {
      // Set initial hash table size to 3 to create collisions
      hashTable = new HashTable(3);

      hashTable.set("name", "John");
      hashTable.set("age", 30);
      hashTable.set("city", "New York");

      expect(hashTable.get("name")).toBe("John");
      expect(hashTable.get("age")).toBe(30);
      expect(hashTable.get("city")).toBe("New York");
    });
  });

  describe("get", () => {
    test("should return the value associated with the given key", () => {
      hashTable.set("name", "John");
      hashTable.set("age", 30);
      hashTable.set("city", "New York");

      expect(hashTable.get("name")).toBe("John");
      expect(hashTable.get("age")).toBe(30);
      expect(hashTable.get("city")).toBe("New York");
    });

    test("should return undefined if the key is not found", () => {
      hashTable.set("name", "John");

      expect(hashTable.get("age")).toBeUndefined();
      expect(hashTable.get("city")).toBeUndefined();
    });
  });

  describe("keys", () => {
    test("should return an array of all the keys in the hash table", () => {
      hashTable.set("name", "John");
      hashTable.set("age", 30);
      hashTable.set("city", "New York");

      const result = hashTable.keys();
      expect(result).toEqual(["name", "age", "city"]);
    });

    test("should return an empty array if the hash table is empty", () => {
      const result = hashTable.keys();
      expect(result).toEqual([]);
    });
  });

  describe("values", () => {
    test("should return an array of all the values in the hash table", () => {
      hashTable.set("name", "John");
      hashTable.set("age", 30);
      hashTable.set("city", "New York");

      const result = hashTable.values();
      expect(result).toEqual(["John", 30, "New York"]);
    });

    test("should return an empty array if the hash table is empty", () => {
      const result = hashTable.values();
      expect(result).toEqual([]);
    });
  });
});
