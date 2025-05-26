const {CollectionFn} = require("../service/CollectionService");
const {Utils} = require('../config/db');
const {expect} = require("@jest/globals");
const {DataTypes} = require("sequelize");



describe('Collection manager tests',  () => {
    let CollectionService

    beforeAll(() => {
        CollectionService = CollectionFn();
    });


    test ("createCollection-> true" ,async  () =>{
        const Collection ={
                collection_name: "plage",
                collection_description: "mer" ,
            };
        const result = await CollectionService.createCollection(Collection);
        expect(result.status).toBe(true);
    })
    test('findImage should return false for non-existent Image', async () => {
        const result = await CollectionService.findCollectionId(1)
        expect(result != null).toBe(true);
    });

    test("delete -> false", async  () =>{
        const result = await CollectionService.deleteCollection(2);
        expect(result).toBe(false);
    })
    test("getAllUsers -> retourne un tableau", async () => {
        const result = await CollectionService.getAllCollections();
        expect(result.status).toBe(true);
        expect(Array.isArray(result.data)).toBe(true);
    });


})




