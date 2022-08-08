const UserCart = require('../models/usercart');
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


describe('User Cart Schema testing', () => {
    // the code below is for insert testing
        it('Add item to cart', () => {
            const usercart = {
                'productid': '62de308435b7af19885fd5f1',
                'productname': 'Money Tree',
                'productprice': '1780',
                'productcategory': 'Plants',
                'productimage': 'image-1658728579987.png',
                'productnumber': 2,
                'addedbyName': 'Bimal Shrestha',
                'addedbyID': '62ded97eda065f1f54f2ffb3',
            };



            return UserCart.create(usercart)
                .then((pro_ret) => {
                    expect(pro_ret.productnumber).toEqual(2);
                });
        });


    // delete individual cart by id
        it('to test the delete cart is working or not', async () => {
            const status = await UserCart.deleteOne({_id :Object('62deea13da065f1f54f302f7')});
            expect(status.ok).toBe(1);
        })


       // delete all user cart list
        it('to test the delete cart is working or not', async () => {
            const status = await UserCart.deleteMany();
            expect(status.ok).toBe(1);
        })


        // update user cart detail
    it('to test the cart update', async () => {

        return UserCart.findOneAndUpdate({_id :Object('62deea13da065f1f54f302f7')}, {$set : {productnumber:2}})
        .then((pp)=>{
            expect(pp.productnumber).toEqual(8)
        })

    });


 // select all list
     it('to test the select all user cart is working or not', async () => {
        const status = await UserCart.find({});
        expect(status.length).toBeGreaterThan(0);
    })




})