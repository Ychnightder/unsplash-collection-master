const {UserFn} = require("../service/UserService");
const {Utils} = require('../config/db');



// const userService = UserFn();


describe('User manager tests',  () => {
    let userService = UserFn();
    let fakeEmail;

    beforeAll(() => {
        fakeEmail = `john${Math.floor(Math.random()*100000)}@doe.com`
        userService = UserFn();
    });



    test('findUserByEmail should return false for non-existent email', async () => {
        const result = await userService.findUserByEmail('inexistant@example.com');
        expect(result).toBe(false);
    });

    test ("createUser -> true" ,async  () =>{
        const newUser = { email:  fakeEmail, password: 'password' };
        const result = await userService.createUser(newUser);
        expect(result.status).toBe(true);
        expect(result.data.user.dataValues.email).toBe(newUser.email);
    })

    test("deleteUser -> false", async  () =>{
        const find = await userService.findUserByEmail(fakeEmail);
        console.log("find", find);
        if (find && find.data && find.data.user && find.data.user.dataValues && find.data.user.dataValues.id) {
            const result = await userService.deleteUser(find.result.dataValues.id);
           expect(result).toBe(true);
        } else {
            console.error("User not found or invalid structure:", find);
        }
    })

    test("getAllUsers -> retourne un tableau", async () => {
        const result = await userService.getAllUsers();
        expect(result.status).toBe(true);
        expect(Array.isArray(result.data)).toBe(true);
    });

})




