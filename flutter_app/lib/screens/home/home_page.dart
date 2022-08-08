import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:plant_app/core/color.dart';
import 'package:plant_app/data/category_model.dart';
import 'package:plant_app/screens/home/plant_data.dart';
import 'package:plant_app/models/product.dart';
import 'package:plant_app/repository/ProductRepo.dart';
import 'package:plant_app/response/product_response.dart';
import 'package:plant_app/screens/home/productCard.dart';
import 'details_page.dart';

class HomePageScreen extends StatefulWidget {
  const HomePageScreen({Key? key}) : super(key: key);

  @override
  State<HomePageScreen> createState() => _HomePageScreenState();
}

class _HomePageScreenState extends State<HomePageScreen> {
  PageController controller = PageController();
  @override
  void initState() {
    controller = PageController(viewportFraction: 0.6, initialPage: 0);
    super.initState();
  }

  var searchText = "";

  // search controller
  final _searchController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Product List"),
        centerTitle: true,
        elevation: 0,
        backgroundColor: green,
        automaticallyImplyLeading: false,
        leadingWidth: 40,
      ),
      body: Container(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Row(
                children: [
                  SizedBox(
                    height: 35,
                    width: 320,
                    child: TextField(
                      controller: _searchController
                        ..addListener(() {
                          setState(() {
                            searchText = _searchController.text;
                          });
                        }),
                      decoration: InputDecoration(
                        border: InputBorder.none,
                        hintText: 'Search Plants and Flowers',
                        hintStyle: TextStyle(
                            color: Colors.black,
                            fontSize: 20,
                            fontWeight: FontWeight.w900),
                        prefixIcon: Icon(
                          Icons.search,
                          color: Colors.black,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Expanded(
              child: FutureBuilder<ProductResponse?>(
                future: ProductRepo().getProducts(searchText),
                builder: (context, snapshot) {
                  if (snapshot.connectionState == ConnectionState.done) {
                    if (snapshot.hasData) {
                      List<Product> productList = snapshot.data!.data!;

                      return ListView.builder(
                        itemCount: productList.length,
                        itemBuilder: (context, index) {
                          return ProductCard(
                            productName: productList[index].name!,
                            productPrice: productList[index].price!,
                            productImage:
                                'http://localhost:4000/productuploads/${productList[index].image!}',
                            productDescription: productList[index].description!,
                          );
                        },
                      );
                    } else {
                      return const Center(
                        child: Text('No data'),
                      );
                    }
                  } else if (snapshot.connectionState ==
                      ConnectionState.waiting) {
                    return const Text("Loading...");
                  } else {
                    return const Text("Error");
                  }
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

//  child: FutureBuilder<ProductResponse?>(
//                 future: ProductRepo().getProducts(),
//                 builder: (context, snapshot) {
//                   if (snapshot.connectionState == ConnectionState.done) {
//                     if (snapshot.hasData) {
//                       List<Product> productList = snapshot.data!.data!;

//                       return ListView.builder(
//                         itemCount: productList.length,
//                         itemBuilder: (context, index) {
//                           return Container(
//                             child: Stack(
//                               children: [
//                                 // horizontal slider
//                                 Container(
//                                   height: 200.0,
//                                   width: double.infinity,
//                                   margin: const EdgeInsets.only(
//                                     bottom: 10.0,
//                                     top: 10.0,
//                                   ),
//                                   child: PageView.builder(
//                                     controller: controller,
//                                     itemCount: productList.length,
//                                     itemBuilder: (context, index) {
//                                       return Container(
//                                           // children
//                                           child: Stack(
//                                         children: [
//                                           // Image
//                                           GestureDetector(
//                                             onTap: () {
//                                               Navigator.push(
//                                                 context,
//                                                 MaterialPageRoute(
//                                                   builder: (builder) =>
//                                                       DetailsPage(
//                                                           plant: plants[index]),
//                                                 ),
//                                               );
//                                             },
//                                             child: Container(
//                                               margin: const EdgeInsets.only(
//                                                 top: 10.0,
//                                                 left: 10.0,
//                                                 right: 10.0,
//                                               ),
//                                               decoration: BoxDecoration(
//                                                 color: lightGreen,
//                                                 boxShadow: [
//                                                   BoxShadow(
//                                                     color:
//                                                         black.withOpacity(0.05),
//                                                     blurRadius: 15,
//                                                     offset: const Offset(5, 5),
//                                                   ),
//                                                 ],
//                                                 borderRadius:
//                                                     BorderRadius.circular(25.0),
//                                                 image: DecorationImage(
//                                                   image: NetworkImage(
//                                                       'https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg'),
//                                                   fit: BoxFit.cover,
//                                                 ),
//                                               ),
//                                             ),
//                                           ),
//                                           Center(
//                                             child: Text(
//                                               productList[index].name!,
//                                               style: TextStyle(
//                                                 color: white,
//                                                 fontSize: 20.0,
//                                               ),
//                                             ),
//                                           ),
//                                         ],
//                                       ));
//                                     },
//                                   ),
//                                 ),
//                                 Positioned(
//                                   right: 20,
//                                   bottom: 20,
//                                   child: CircleAvatar(
//                                     backgroundColor: green,
//                                     radius: 15,
//                                     child: Image.asset(
//                                       'assets/icons/add.png',
//                                       color: white,
//                                       height: 15,
//                                     ),
//                                   ),
//                                 ),
//                               ],
//                             ),
//                           );
//                         },
//                       );
//                     } else {
//                       return const Center(
//                         child: Text('No data'),
//                       );
//                     }
//                   } else if (snapshot.connectionState ==
//                       ConnectionState.waiting) {
//                     return const Text("Loading...");
//                   } else {
//                     return const Text("Error");
//                   }
//                 },
//               ),
//               // child: PageView.builder(
//               //   itemCount: plants.length,
//               //   controller: controller,
//               //   physics: const BouncingScrollPhysics(),
//               //   padEnds: false,
//               //   pageSnapping: true,
//               //   onPageChanged: (value) => setState(() => activePage = value),
//               //   itemBuilder: (itemBuilder, index) {
//               //     bool active = index == activePage;
//               //     return slider(active, index);
//               //   },
//               // ),
//             ),