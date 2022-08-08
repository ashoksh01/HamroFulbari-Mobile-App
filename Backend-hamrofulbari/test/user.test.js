const User = require('../models/user');
const mongoose = require('mongoose');

 

// use the new name of the database
const url = 'mongodb://localhost:27017/hamro_fulbari'; 
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:false
    });
});

afterAll(async () => {

    await mongoose.connection.close();
});


describe('User Schema testing', () => {
    // the code below is for insert testing
        it('Add user', () => {
            const user = {
                'fullname': 'Ashok Shrestha',
                'email': 'ashok1@gmail.com',
                'password': 'aaa',
                'contactnum': '9823232443',
                'address': 'Ramkot KMT',
                };



            return User.create(user)
                .then((pro_ret) => {
                    expect(pro_ret.email).toEqual("ashok1@gmail.com");
                });
        });

    //to delete single user
    it('to test the delete user by id', async () => {
            const status = await User.deleteOne({_id :Object('62de3f3c58f5610a24cb44d9')});
            expect(status.ok).toBe(1);
        })


    //to delete all user
        it('to test the delete all user', async () => {
            const status = await User.deleteMany();
            expect(status.ok).toBe(1);
        })

    // to update user
  it('to test the user update', async () => {

        return User.findOneAndUpdate({_id :Object('62de3f3c58f5610a24cb44d9')}, {$set : {fullname:"Ashok Shrestha"}})
        .then((pp)=>{
            expect(pp.fullname).toEqual("Ashok Shrestha")
        })

    });


// select all user
     it('to test the select all user ', async () => {
        const status = await User.find({});
        expect(status.length).toBeGreaterThan(0);
    })



})