import 'package:badges/badges.dart';

import 'package:flutter/material.dart';
import 'package:plant_app/models/cart_model.dart';
import 'package:plant_app/screens/cart/cart_helper.dart';
import 'package:plant_app/screens/cart/cart_manager.dart';
import 'package:plant_app/screens/cart/cart_screen.dart';
import 'package:provider/provider.dart';

class ProductListScreen extends StatefulWidget {
  const ProductListScreen({Key? key}) : super(key: key);

  @override
  _ProductListScreenState createState() => _ProductListScreenState();
}

class _ProductListScreenState extends State<ProductListScreen> {
  List<String> productName = [
    'Succulent',
    'Peperomia Obtusifolia',
    'Money Tree',
    'White Rose',
    'Indoor Plant',
    'Rose',
  ];
  List<String> productUnit = [
    'KG',
    'Dozen',
    'KG',
    'Dozen',
    'KG',
    'KG',
    'KG',
  ];
  List<int> productPrice = [
    1200,
    1234,
    1780,
    1700,
    2900,
    1600,
  ];
  List<String> productImage = [
    'https://res.cloudinary.com/kingsly/image/upload/v1659416634/image1_iiwxej.jpg',
    'https://res.cloudinary.com/kingsly/image/upload/v1659416634/image2_nt4jpq.jpg',
    'https://res.cloudinary.com/kingsly/image/upload/v1659416635/image3_bxtvbz.jpg',
    'https://res.cloudinary.com/kingsly/image/upload/v1659416636/f7_hdfkfo.jpg',
    'https://res.cloudinary.com/kingsly/image/upload/v1659416636/image5_dyf4qi.jpg',
    'https://res.cloudinary.com/kingsly/image/upload/v1659416636/f7_hdfkfo.jpg',
  ];

  DBHelper? dbHelper = DBHelper();

  @override
  Widget build(BuildContext context) {
    final cart = Provider.of<CartProvider>(context);
    return Scaffold(
      appBar: AppBar(
        title: Text('Product List'),
        centerTitle: true,
        actions: [
          InkWell(
            onTap: () {
              Navigator.push(context,
                  MaterialPageRoute(builder: (context) => CartScreen()));
            },
            child: Center(
              child: Badge(
                showBadge: true,
                badgeContent: Consumer<CartProvider>(
                  builder: (context, value, child) {
                    return Text(value.getCounter().toString(),
                        style: TextStyle(color: Colors.white));
                  },
                ),
                animationType: BadgeAnimationType.fade,
                animationDuration: Duration(milliseconds: 300),
                child: Icon(Icons.shopping_bag_outlined),
              ),
            ),
          ),
          SizedBox(width: 20.0)
        ],
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
                itemCount: productName.length,
                itemBuilder: (context, index) {
                  return Card(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            mainAxisSize: MainAxisSize.max,
                            children: [
                              Image(
                                height: 100,
                                width: 100,
                                image: NetworkImage(
                                    productImage[index].toString()),
                              ),
                              SizedBox(
                                width: 10,
                              ),
                              Expanded(
                                child: Column(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      productName[index].toString(),
                                      style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.w500),
                                    ),
                                    SizedBox(
                                      height: 5,
                                    ),
                                    Text(
                                      productUnit[index].toString() +
                                          " " +
                                          r"$" +
                                          productPrice[index].toString(),
                                      style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.w500),
                                    ),
                                    SizedBox(
                                      height: 5,
                                    ),
                                    Align(
                                      alignment: Alignment.centerRight,
                                      child: InkWell(
                                        onTap: () {
                                          print(index);
                                          print(index);
                                          print(productName[index].toString());
                                          print(productPrice[index].toString());
                                          print(productPrice[index]);
                                          print('1');
                                          print(productUnit[index].toString());
                                          print(productImage[index].toString());

                                          dbHelper!
                                              .insert(Cart(
                                                  id: index,
                                                  productId: index.toString(),
                                                  productName:
                                                      productName[index]
                                                          .toString(),
                                                  initialPrice:
                                                      productPrice[index],
                                                  productPrice:
                                                      productPrice[index],
                                                  quantity: 1,
                                                  unitTag: productUnit[index]
                                                      .toString(),
                                                  image: productImage[index]
                                                      .toString()))
                                              .then((value) {
                                            cart.addTotalPrice(double.parse(
                                                productPrice[index]
                                                    .toString()));
                                            cart.addCounter();

                                            final snackBar = SnackBar(
                                              backgroundColor: Colors.green,
                                              content: Text(
                                                  'Product is added to cart'),
                                              duration: Duration(seconds: 1),
                                            );

                                            ScaffoldMessenger.of(context)
                                                .showSnackBar(snackBar);
                                          }).onError((error, stackTrace) {
                                            print("error" + error.toString());
                                            final snackBar = SnackBar(
                                                backgroundColor: Colors.red,
                                                content: Text(
                                                    'Product is already added in cart'),
                                                duration: Duration(seconds: 1));

                                            ScaffoldMessenger.of(context)
                                                .showSnackBar(snackBar);
                                          });
                                        },
                                        child: Container(
                                          height: 35,
                                          width: 100,
                                          decoration: BoxDecoration(
                                              color: Colors.green,
                                              borderRadius:
                                                  BorderRadius.circular(5)),
                                          child: const Center(
                                            child: Text(
                                              'Add to cart',
                                              style: TextStyle(
                                                  color: Colors.white),
                                            ),
                                          ),
                                        ),
                                      ),
                                    )
                                  ],
                                ),
                              )
                            ],
                          )
                        ],
                      ),
                    ),
                  );
                }),
          ),
        ],
      ),
    );
  }
}
