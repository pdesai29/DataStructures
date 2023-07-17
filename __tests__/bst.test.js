const BST = require("../bst");

describe("BST", () => {
  let tree;

  beforeEach(() => {
    tree = new BST();
  });

  describe("insert", () => {
    test("should insert a node correctly into an empty tree", () => {
      const result = tree.insert(5);
      expect(result).toBe(5);
      expect(tree.root.val).toBe(5);
      expect(tree.root.left).toBeNull();
      expect(tree.root.right).toBeNull();
    });

    test("should insert a node correctly into a non-empty tree", () => {
      tree.insert(5);
      tree.insert(3);
      tree.insert(7);
      tree.insert(4);
      const result = tree.insert(6);
      expect(result).toBe(6);
      expect(tree.root.right.left.val).toBe(6);
    });

    test('should return "Duplicate value" if the value already exists in the tree', () => {
      tree.insert(5);
      const result = tree.insert(5);
      expect(result).toBe("Duplicate value");
    });
  });

  describe("find", () => {
    test("should find the node with the specified value in the tree", () => {
      tree.insert(5);
      tree.insert(3);
      tree.insert(7);
      tree.insert(4);
      const result = tree.find(4);
      expect(result.val).toBe(4);
      expect(result.left).toBeNull();
      expect(result.right).toBeNull();
    });

    test('should return "Not found" if the value is not in the tree', () => {
      tree.insert(5);
      tree.insert(3);
      const result = tree.find(7);
      expect(result).toBe("Not found");
    });

    test("should return undefined if the tree is empty", () => {
      const result = tree.find(5);
      expect(result).toBeUndefined();
    });
  });

  describe("BFS", () => {
    test("should perform breadth-first traversal of the tree", () => {
      tree.insert(5);
      tree.insert(3);
      tree.insert(7);
      tree.insert(2);
      tree.insert(4);
      tree.insert(6);
      tree.insert(8);
      const spy = jest.spyOn(console, "log");
      const result = tree.BFS();
      expect(result).toEqual([5, 3, 7, 2, 4, 6, 8]);
      expect(spy).toHaveBeenCalledTimes(7);
      expect(spy).toHaveBeenNthCalledWith(1, 5);
      expect(spy).toHaveBeenNthCalledWith(2, 3);
      expect(spy).toHaveBeenNthCalledWith(3, 7);
      expect(spy).toHaveBeenNthCalledWith(4, 2);
      expect(spy).toHaveBeenNthCalledWith(5, 4);
      expect(spy).toHaveBeenNthCalledWith(6, 6);
      expect(spy).toHaveBeenNthCalledWith(7, 8);
      spy.mockRestore();
    });

    test("should return an empty array if the tree is empty", () => {
      const result = tree.BFS();
      expect(result).toEqual([]);
    });
  });

  describe("getTreeHeight", () => {
    test("should return the height of the tree", () => {
      tree.insert(5);
      tree.insert(3);
      tree.insert(7);
      tree.insert(2);
      tree.insert(4);
      tree.insert(6);
      tree.insert(8);
      const height = tree.getTreeHeight(tree.root);
      expect(height).toBe(3);
    });

    test("should return 0 if the tree is empty", () => {
      const height = tree.getTreeHeight(tree.root);
      expect(height).toBe(0);
    });
  });

  describe("DFSInOrder", () => {
    test("should perform Depth-First Search In-Order traversal of the tree", () => {
      tree.insert(5);
      tree.insert(3);
      tree.insert(7);
      tree.insert(2);
      tree.insert(4);
      tree.insert(6);
      tree.insert(8);
      const result = tree.DFSInOrder();
      expect(result).toEqual([2, 3, 4, 5, 6, 7, 8]);
    });

    test("should return an undefined if the tree is empty", () => {
      const result = tree.DFSInOrder();
      expect(result).toEqual(undefined);
    });
  });

  describe("DFSPreOrder", () => {
    test("should perform Depth-First Search Pre-Order traversal of the tree", () => {
      tree.insert(5);
      tree.insert(3);
      tree.insert(7);
      tree.insert(2);
      tree.insert(4);
      tree.insert(6);
      tree.insert(8);
      const result = tree.DFSPreOrder();
      expect(result).toEqual([5, 3, 2, 4, 7, 6, 8]);
    });

    test("should return an undefined if the tree is empty", () => {
      const result = tree.DFSPreOrder();
      expect(result).toEqual(undefined);
    });
  });

  describe("DFSPostOrder", () => {
    test("should perform Depth-First Search Post-Order traversal of the tree", () => {
      tree.insert(5);
      tree.insert(3);
      tree.insert(7);
      tree.insert(2);
      tree.insert(4);
      tree.insert(6);
      tree.insert(8);
      const result = tree.DFSPostOrder();
      expect(result).toEqual([2, 4, 3, 6, 8, 7, 5]);
    });

    test("should return an undefined if the tree is empty", () => {
      const result = tree.DFSPostOrder();
      expect(result).toEqual(undefined);
    });
  });
    
    describe("delete", () => {
      test("should delete a leaf node correctly", () => {
        tree.insert(5);
        tree.insert(3);
        tree.insert(7);
        const result = tree.delete(3);
        expect(result).toBe(3);
        expect(tree.root.left).toBeNull();
      });

      test("should delete a node with one child correctly", () => {
        tree.insert(5);
        tree.insert(3);
        tree.insert(7);
        tree.insert(4);
        const result = tree.delete(3);
        expect(result).toBe(3);
        expect(tree.root.left.val).toBe(4);
      });

      test("should delete a node with two children correctly", () => {
        tree.insert(5);
        tree.insert(3);
        tree.insert(7);
        tree.insert(2);
        tree.insert(4);
        tree.insert(6);
        tree.insert(8);
        const result = tree.delete(5);
        expect(result).toBe(5);
        expect(tree.root.val).toBe(6);
        expect(tree.root.left.val).toBe(3);
        expect(tree.root.right.val).toBe(7);
      });

      test("should return undefined if the tree is empty", () => {
        const result = tree.delete(5);
        expect(result).toBeUndefined();
      });

      test("should return false if the node to be deleted is not found", () => {
        tree.insert(5);
        tree.insert(3);
        tree.insert(7);
        const result = tree.delete(10);
        expect(result).toBe(false);
      });
    });
});
