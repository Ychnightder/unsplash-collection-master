const {ImageFn} = require("../service/ImageService");
const {Utils} = require('../config/db');
// const test = require("node:test");
// const {describe, beforeAll, expect} = require("@jest/globals");

// const userService = UserFn();


describe('Image manager tests',  () => {
    let ImageService

    beforeAll(() => {
        ImageService = ImageFn();
    });

    test ("createImage-> true" ,async  () =>{
        const newImage =
        {
            Id_unsplash: 'xYz123abc',
            url: 'https://unsplash.com/photos/xYz123abc',
            Author: 'Jane Doe',
            published: '2023-08-15',
            download_url: 'https://images.unsplash.com/photo-1747956895655-163ff55bdc6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        };
        const result = await ImageService.createImage(newImage);
         expect(result.status).toBe(true);
    })

    test('findImage should return false for non-existent Image', async () => {
        const result = await ImageService.findImage(99)
        expect(result).toBe(false);
    });


    test("delete -> false", async  () =>{
        const result = await ImageService.deleteImage(1);
        expect(result).toBe(false);
    })

    test("getAllUsers -> retourne un tableau", async () => {
        const result = await ImageService.getAllImages();
        expect(result.status).toBe(true);
        expect(Array.isArray(result.data)).toBe(true);
    });


})




