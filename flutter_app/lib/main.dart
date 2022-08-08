import 'package:awesome_notifications/awesome_notifications.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:plant_app/screens/cart/cart_screen.dart';
import 'package:plant_app/screens/home/aboutus.dart';
import 'package:plant_app/screens/home/contact.dart';
import 'package:plant_app/screens/home/faqs.dart';
import 'package:plant_app/screens/home/map.dart';
import 'package:plant_app/screens/myorder/orderdelivery.dart';
import 'package:plant_app/screens/cart/cart_manager.dart';
import 'package:plant_app/screens/cart/cart_product_list.dart';
import 'package:plant_app/screens/home/details_page.dart';
import 'package:plant_app/screens/home/homepgview.dart';
import 'package:plant_app/screens/loginregister/forgot-password.dart';
import 'package:plant_app/screens/appbar/appbarscreens/appbarbutton.dart';
import 'package:plant_app/screens/myorder/myorder_history.dart';
import 'package:plant_app/screens/paymentandcartdetails/root_page.dart';
import 'package:plant_app/screens/profile/editprofile/changepassword.dart';
import 'package:plant_app/screens/profile/editprofile/editprofile.dart';
import 'package:plant_app/screens/profile/profile.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:plant_app/screens/splash/splash_page.dart';
import 'package:plant_app/screens/paymentandcartdetails/screens/favorite_page.dart';
import 'package:plant_app/screens/paymentandcartdetails/screens/home_page.dart';
import 'package:plant_app/wareOS/wareOS-loin.dart';
import 'package:plant_app/wareOS/wearOS_Dashboard.dart';
import 'package:provider/provider.dart';
import 'screens/loginregister/screens.dart';
import 'package:flutter_stripe/flutter_stripe.dart';

void main() async {
  //light sensor
  Stripe.publishableKey =
      'pk_test_51LRJXbSJrSkv0mIThYHAMrkN1qULBuWUIHRkjIE6l4R6iV1u3UI1EXVjEcWuNCxpg1abOJ3WA5unIZuejVEDOdP500hu82SchT';

  //Notification Popup
  AwesomeNotifications().initialize('resource://drawable/luncher', [
    NotificationChannel(
      channelGroupKey: "basic_channel_group",
      channelKey: 'basic_channel',
      channelName: "Basic Notification",
      channelDescription: "Notification with no sound",
      defaultColor: const Color.fromARGB(255, 190, 94, 56),
      importance: NotificationImportance.Max,
      ledColor: Colors.white,
      channelShowBadge: true,
    )
  ]);

  //offline data fetch through Hive
  await Hive.initFlutter();
  await Hive.openBox('box');
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => CartProvider(),
      child: Builder(builder: (BuildContext context) {
        return MaterialApp(
          title: 'HamroFulbari',
          debugShowCheckedModeBanner: false,
          theme: ThemeData(
            textTheme:
                GoogleFonts.josefinSansTextTheme(Theme.of(context).textTheme),
            primarySwatch: Colors.blue,
            visualDensity: VisualDensity.adaptivePlatformDensity,
          ),
          initialRoute: '/splashscreen',
          routes: {
            //routes for the app
            '/login': (context) => const LoginPage(),
            // '/homepage': (context) => const HomePage(),
            '/forgotpassword': (context) => ForgotPassword(),
            '/navbar': (context) => const ButtomNav(),
            '/splashscreen': (context) => const SplashPage(),
            '/register': (context) => const SignUpScreen(),
            // '/test': (context) => const TestScreen(),
            '/home': (context) => const HomePage1(),
            '/details': (context) => const DetailsPage(),
            '/editprofile': (context) => SettingsUI(),
            '/profile': (context) => const ProfileScreen(),
            '/changepassword': (context) => ChangePassword(),
            'newcart': (context) => const ProductListScreen(),
            '/order': (context) => OrderDelivery(),
            '/wareos': (context) => WearOSLogin(),
            '/wearos_dash': (context) => WearOS_Dashboard(),
            '/orderhistory': (context) => OrderHistoryScreen(),
            '/fav': (context) => FavoritePage(),
            '/homeview': (context) => HomePageViewScreen(),
            '/con': (context) => HamrofulbariContact(),
            '/faqs': (context) => FAQsScreen(),
            '/root': (context) => RootPage(),
            '/cartscreen': (context) => CartScreen(),
            '/map': (context) => MapScreen(),
            '/about': (context) => AboutUsScreenPage(),
          },
        );
      }),
    );
  }
}
