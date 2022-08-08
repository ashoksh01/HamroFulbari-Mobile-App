import 'dart:convert';
import 'dart:ffi';

import 'package:flutter/material.dart';
import 'package:plant_app/api/UserAPI.dart';
import 'package:plant_app/screens/myorder/orderdelivery.dart';
import 'package:plant_app/widgets/rounded_button.dart';
import 'package:flutter_stripe/flutter_stripe.dart' as stripe;
import 'package:http/http.dart' as http;

class OrderDelivery extends StatefulWidget {
  @override
  _OrderDelivery createState() => _OrderDelivery();
}

class _OrderDelivery extends State<OrderDelivery> {
  // controller

  String dropdownvalue = 'Stripe';

  // List of items in our dropdown menu
  var items = [
    'Stripe',
    'Cash on delivery',
    'E-sewa',
    'Khalti',
  ];
  double amount = 1200;

  Map<String, dynamic>? paymentIntentData;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Order Delivery',
            style: TextStyle(
                color: Colors.black,
                fontSize: 20,
                fontWeight: FontWeight.w500)),
        centerTitle: true,
        backgroundColor: Theme.of(context).scaffoldBackgroundColor,
        elevation: 1,
        leading: IconButton(
          icon: Icon(
            Icons.arrow_back,
            color: Colors.green,
          ),
          onPressed: () {
            Navigator.pushNamed(context, '/cartscreen');
          },
        ),
      ),
      body: Container(
        padding: EdgeInsets.only(left: 16, top: 25, right: 16),
        child: GestureDetector(
          onTap: () {
            FocusScope.of(context).unfocus();
          },
          child: ListView(
            children: [
              SizedBox(
                height: 15,
              ),
              Center(
                child: Stack(
                  children: [
                    Container(
                      width: 130,
                      height: 130,
                    ),
                    Positioned(
                        bottom: 0,
                        right: 0,
                        child: Container(
                          height: 40,
                          width: 40,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            border: Border.all(
                              width: 4,
                              color: Theme.of(context).scaffoldBackgroundColor,
                            ),
                          ),
                        )),
                  ],
                ),
              ),
              SizedBox(
                height: 35,
              ),
              TextFormField(
                decoration: InputDecoration(
                  labelText: 'Name',
                ),
              ),
              TextFormField(
                decoration: InputDecoration(
                  labelText: 'Address',
                ),
              ),
              TextFormField(
                decoration: InputDecoration(
                  labelText: 'Phone Number',
                ),
              ),
              Container(
                child: DropdownButton(
                  // Initial Value
                  value: dropdownvalue,

                  // Down Arrow Icon
                  icon: const Icon(Icons.keyboard_arrow_down),

                  // Array list of items
                  items: items.map((String items) {
                    return DropdownMenuItem(
                      value: items,
                      child: Text(items),
                    );
                  }).toList(),
                  // After selecting the desired option,it will
                  // change button value to selected value
                  onChanged: (String? newValue) {
                    setState(() {
                      dropdownvalue = newValue!;
                    });
                  },
                ),
              ),
              SizedBox(
                height: 20,
              ),
              Center(
                child: Text("NPR ${amount}",
                    style: TextStyle(
                        fontSize: 40,
                        fontWeight: FontWeight.bold,
                        color: Colors.green)),
              ),
              SizedBox(
                height: 10,
              ),
              Container(
                child: RoundedButton(
                  text: 'Pay and Confirm Order',
                  press: () {
                    makePayment(amount.toStringAsFixed(0).toString());
                  },
                ),
              )
            ],
          ),
        ),
      ),
    );
  }

  Widget buildTextField(
      String labelText, String placeholder, bool isPasswordTextField) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 35.0),
      child: TextField(
        decoration: InputDecoration(
            contentPadding: EdgeInsets.only(bottom: 3),
            labelText: labelText,
            floatingLabelBehavior: FloatingLabelBehavior.always,
            hintText: placeholder,
            hintStyle: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.bold,
              color: Colors.black,
            )),
      ),
    );
  }

  Future<void> makePayment(String? total) async {
    // paymnet instant method
    try {
      paymentIntentData = await createPaymentIntent(
          total.toString(), 'INR'); //json.decode(response.body);
      // print('Response body==>${response.body.toString()}');
      await stripe.Stripe.instance
          .initPaymentSheet(
              paymentSheetParameters: stripe.SetupPaymentSheetParameters(
            customerId: paymentIntentData!['customer'] ?? 'Customer',
            paymentIntentClientSecret: paymentIntentData!['client_secret'],
            style: ThemeMode.dark,
            merchantDisplayName: 'ANNIE',
          ))
          .then((value) {});

      ///now finally display payment sheeet
      displayPaymentSheet();
    } catch (e, s) {
      print('exception:$e$s');
    }
  }

  displayPaymentSheet() async {
    try {
      await stripe.Stripe.instance
          .presentPaymentSheet(
              parameters: stripe.PresentPaymentSheetParameters(
        clientSecret: paymentIntentData!['client_secret'],
        confirmPayment: true,
      ))
          .then((newValue) {
        // print(
        //     'payment intent iddddddddd' + paymentIntentData!['id'].toString());
        // print('Statussssssssssssssssssss' +
        //     paymentIntentData!['status'].toString());
        ScaffoldMessenger.of(context)
            .showSnackBar(const SnackBar(content: Text("paid successfully")));
        // Navigator.pushNamed(context, Navbar.routeName);
        paymentIntentData = null;
      }).onError((error, stackTrace) {
        print('Exception/DISPLAYPAYMENTSHEET==> $error $stackTrace');
      });
    } on stripe.StripeException catch (e) {
      print('Exception/DISPLAYPAYMENTSHEET==> $e');
      showDialog(
          context: context,
          builder: (_) => const AlertDialog(
                content: Text("Cancelled "),
              ));
    } catch (e) {
      print('$e');
    }
  }

  //  Future<Map<String, dynamic>>
  createPaymentIntent(String amount, String currency) async {
    try {
      Map<String, dynamic> body = {
        'amount': calculateAmount(amount),
        'currency': currency,
        'payment_method_types[]': 'card',
      };
      print(body);
      var response = await http.post(
          Uri.parse('https://api.stripe.com/v1/payment_intents'),
          body: body,
          headers: {
            'Authorization':
                'Bearer sk_test_51LRJXbSJrSkv0mITElJtBxva7j7o8xj7i1XJU0ptaxbyXBHxYnnGGEO5szJC1OHa3ql3nFSxJhajnBsR8ASBgDPo00bJYTUPDx',
            'Content-Type': 'application/x-www-form-urlencoded'
          });
      print('Create Intent reponse ===> ${response.body.toString()}');
      return jsonDecode(response.body);
    } catch (err) {
      print('err charging user: ${err.toString()}');
    }
  }

  calculateAmount(String amount) {
    final a = (int.parse(amount)) * 100;
    return a.toString();
  }
}
