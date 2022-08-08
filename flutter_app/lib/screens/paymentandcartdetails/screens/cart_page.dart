import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';

class CartScreen extends StatefulWidget {
  const CartScreen({Key? key}) : super(key: key);

  @override
  State<CartScreen> createState() => _CartScreenState();
}

class _CartScreenState extends State<CartScreen> {
  int cartItem = 0;
  int grandTotal = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Cart Screen', style: TextStyle(color: Colors.black)),
        centerTitle: true,
        backgroundColor: Colors.white,
      ),
      body: ListView.builder(
        itemCount: 1,
        itemBuilder: (context, index) {
          return ListTile(
// leading for product image
            leading: Image.network(
              'https://picsum.photos/200/300?image=${index + 1}',
              // image width and height
            ),
            title: Text('Product Name'),
            subtitle: Text('Price 123'),
            // increase and decrease buttons
            trailing: Row(
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                IconButton(
                  icon: Icon(Icons.remove),
                  onPressed: () {
                    setState(() {
                      cartItem--;
                      grandTotal -= 123;
                    });
                  },
                ),
                Text(cartItem.toString()),
                IconButton(
                  icon: Icon(Icons.add),
                  onPressed: () {
                    setState(() {
                      cartItem++;
                      grandTotal += 123;
                    });
                  },
                ),
                // total price
              ],
            ),
          );
        },
      ),

      // total price
      bottomNavigationBar: Container(
        height: 100,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: <Widget>[
            Text('Total: $grandTotal'),
            ElevatedButton(
              child: Text('Checkout'),
              onPressed: () {},
            ),
          ],
        ),
      ),
    );
  }
}

