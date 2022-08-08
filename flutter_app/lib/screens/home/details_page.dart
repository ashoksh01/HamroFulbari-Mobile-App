import 'dart:math';

import 'package:flutter/material.dart';
import 'package:motion_toast/motion_toast.dart';
import 'package:plant_app/models/cart_model.dart';
import 'package:plant_app/screens/cart/cart_helper.dart';
import 'package:provider/provider.dart';
import '../../core/color.dart';
import '../cart/cart_manager.dart';

class DetailsPage extends StatefulWidget {
  const DetailsPage({Key? key}) : super(key: key);

  @override
  State<DetailsPage> createState() => _DetailsPageState();
}

class _DetailsPageState extends State<DetailsPage> {
  DBHelper? dbHelper = DBHelper();

  @override
  Widget build(BuildContext context) {
    final random = Random();
    int uniq = random.nextInt(1000);
    final cart = Provider.of<CartProvider>(context);
    var height = MediaQuery.of(context).size.height;
    Map args = ModalRoute.of(context)?.settings.arguments as Map;
    return Scaffold(
      appBar: AppBar(
        title: const Text("Details page"),
        backgroundColor: green,
        actions: [
          IconButton(
            icon: const Icon(Icons.shopping_cart),
            onPressed: () {
              dbHelper!
                  .insert(Cart(
                      id: uniq,
                      productId: args['productId'],
                      productName: args['productName'],
                      initialPrice: 1200,
                      productPrice: 1200,
                      quantity: 1,
                      unitTag: args['productName'],
                      image: args['productImage']))
                  .then((value) {
                MotionToast.success(
                  description: const Text("Product added to cart"),
                ).show(context); //
                cart.addTotalPrice(double.parse(22000.toString()));
                cart.addCounter();
              });
            },
          )
        ],
      ),
      body: SafeArea(
        child: Stack(
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  height: height / 2,
                  decoration: BoxDecoration(
                    color: lightGreen,
                    boxShadow: [
                      BoxShadow(
                        color: green.withOpacity(0.2),
                        blurRadius: 15,
                        offset: const Offset(0, 5),
                      ),
                    ],
                    borderRadius: const BorderRadius.only(
                      bottomLeft: Radius.circular(60),
                      bottomRight: Radius.circular(60),
                    ),
                    image: DecorationImage(
                      image: Image.network(
                        '${args['productImage'].replaceAll('localhost', '10.0.2.2')}',
                      ).image,
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(
                      horizontal: 20.0, vertical: 20.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          RichText(
                            text: TextSpan(
                              children: [
                                TextSpan(
                                  text: "${args['productName']}",
                                  style: TextStyle(
                                    color: black.withOpacity(0.8),
                                    fontWeight: FontWeight.bold,
                                    fontSize: 18.0,
                                  ),
                                ),
                                TextSpan(
                                  text: '  (${"Flowers"} Plant)',
                                  style: TextStyle(
                                    color: black.withOpacity(0.5),
                                    fontSize: 18.0,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          Container(
                            height: 30.0,
                            width: 30.0,
                            padding: const EdgeInsets.all(8.0),
                            decoration: BoxDecoration(
                              color: green,
                              boxShadow: [
                                BoxShadow(
                                  color: green.withOpacity(0.2),
                                  blurRadius: 15,
                                  offset: const Offset(0, 5),
                                ),
                              ],
                              borderRadius: BorderRadius.circular(8.0),
                            ),
                            child: Image.asset(
                              'assets/icons/heart.png',
                              color: white,
                            ),
                          )
                        ],
                      ),
                      const SizedBox(height: 20.0),
                      RichText(
                        text: TextSpan(
                          text: "${args['productDescription']}",
                          style: TextStyle(
                            color: black.withOpacity(0.5),
                            fontSize: 15.0,
                            height: 1.4,
                            letterSpacing: 0.5,
                          ),
                        ),
                      ),
                      const SizedBox(height: 20.0),
                      Text(
                        'Treatment',
                        style: TextStyle(
                          color: black.withOpacity(0.9),
                          fontSize: 18.0,
                          height: 1.4,
                          fontWeight: FontWeight.bold,
                          letterSpacing: 0.5,
                        ),
                      ),
                      const SizedBox(height: 20.0),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          Image.asset('assets/icons/sun.png',
                              color: black, height: 24.0),
                          Image.asset('assets/icons/drop.png',
                              color: black, height: 24.0),
                          Image.asset('assets/icons/temperature.png',
                              color: black, height: 24.0),
                          Image.asset('assets/icons/up_arrow.png',
                              color: black, height: 24.0),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
            Align(
              alignment: Alignment.bottomRight,
              child: Container(
                padding: const EdgeInsets.symmetric(
                    horizontal: 50.0, vertical: 15.0),
                decoration: BoxDecoration(
                  color: green,
                  boxShadow: [
                    BoxShadow(
                      color: green.withOpacity(0.3),
                      blurRadius: 15,
                      offset: const Offset(0, -5),
                    ),
                  ],
                  borderRadius: const BorderRadius.only(
                    topLeft: Radius.circular(60),
                  ),
                ),
                child: Text(
                  'NPR ${args['productPrice']}',
                  // 'Buy \$${plant.price.toStringAsFixed(0)}',
                  style: TextStyle(
                    color: white.withOpacity(0.9),
                    fontSize: 18.0,
                    height: 1.4,
                    fontWeight: FontWeight.bold,
                    letterSpacing: 0.5,
                  ),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
