import 'package:flutter/material.dart';
import 'package:animated_bottom_navigation_bar/animated_bottom_navigation_bar.dart';
import 'package:flutter/cupertino.dart';
import 'package:page_transition/page_transition.dart';
import 'package:plant_app/core/constants.dart';

import 'package:plant_app/models/plants.dart';
import 'package:plant_app/screens/cart/cart_product_list.dart';
import 'package:plant_app/screens/home/home_page.dart';
import 'package:plant_app/screens/home/homepgview.dart';
import 'package:plant_app/screens/loginregister/forgot-password.dart';
import 'package:plant_app/screens/profile/profile.dart';
import 'package:plant_app/screens/paymentandcartdetails/scan_page.dart';
import 'package:plant_app/screens/paymentandcartdetails/screens/cart_page.dart';
import 'package:plant_app/screens/paymentandcartdetails/screens/favorite_page.dart';
import 'package:plant_app/screens/paymentandcartdetails/screens/home_page.dart';

class RootPage extends StatefulWidget {
  const RootPage({Key? key}) : super(key: key);

  @override
  State<RootPage> createState() => _RootPageState();
}

class _RootPageState extends State<RootPage> {
  List<Plant> favorites = [];
  List<Plant> myCart = [];

  int _bottomNavIndex = 0;

  //List of the pages
  List<Widget> _widgetOptions() {
    return [
      HomePageViewScreen(),
      // const HomePage1(),
      HomePageScreen(
        
      ),
      FavoritePage(),
      const ProfileScreen(),
    ];
  }

  //List of the pages icons
  List<IconData> iconList = [
    Icons.home,
    Icons.shopping_bag,
    Icons.favorite,
    Icons.person,
  ];

  // List of the pages titles
  // List<String> titleList = [
  //   'Home',
  //   'Favorite',
  //   'Cart',
  //   'Setting & Profile',
  // ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(
      //   title: Row(
      //     mainAxisAlignment: MainAxisAlignment.spaceBetween,
      //     children: [
      //       Text(
      //         titleList[_bottomNavIndex],
      //         style: TextStyle(
      //           color: Constants.blackColor,
      //           fontWeight: FontWeight.w800,
      //           fontSize: 20,
             
      //         ),
              
      //       ),
      //       Icon(
      //         Icons.notifications,
      //         color: Constants.blackColor,
      //         size: 0.0,
      //       )
      //     ],
      //   ),
      //   backgroundColor: Theme.of(context).scaffoldBackgroundColor,
      //   elevation: 0.0,
      // ),
      body: IndexedStack(
        index: _bottomNavIndex,
        children: _widgetOptions(),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
              context,
              PageTransition(
                  child: const ProductListScreen(),
                  type: PageTransitionType.bottomToTop));
        },
        child: Icon(Icons.shopping_cart),
        backgroundColor: Constants.primaryColor,
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
      
      bottomNavigationBar: AnimatedBottomNavigationBar(
          splashColor: Constants.primaryColor,
          activeColor: Constants.primaryColor,
          inactiveColor: Colors.black.withOpacity(.5),
          icons: iconList,
          activeIndex: _bottomNavIndex,
          gapLocation: GapLocation.center,
          notchSmoothness: NotchSmoothness.softEdge,
          onTap: (index) {
            setState(() {
              _bottomNavIndex = index;
              final List<Plant> favoritedPlants = Plant.getFavoritedPlants();
              final List<Plant> addedToCartPlants = Plant.addedToCartPlants();

              favorites = favoritedPlants;
              myCart = addedToCartPlants.toSet().toList();
            });
          }),
    );
  }
}
