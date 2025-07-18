import { collectionService } from "../../service/Collection.service";
import { describe, it, expect } from "vitest";
import { Collection } from "../../interfaces/Collection";

const data = collectionService.getAll();

describe("Collection test", () => {
  it("getAll", async () => {
    const collections = await collectionService.getAll();
    expect(Array.isArray(collections)).toBe(true);
  });

  it("getById", async () => {
    const collection = await collectionService.getById(1);
    expect(collection?.name).toBe("Test Collection");
  });

  it("create", async () => {
    const collection = await collectionService.create("plage");
    expect(collection).toBe(true);
  });

  it("create", async () => {
    const collection = await collectionService.delete(989);
    expect(collection).toBe(false);
  });
});
