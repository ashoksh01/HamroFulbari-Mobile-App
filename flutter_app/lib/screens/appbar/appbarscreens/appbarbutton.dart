import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:plant_app/core/constants.dart';
import 'package:plant_app/shared/shared-preference.dart';
import 'package:settings_ui/settings_ui.dart';

class ButtomNav extends StatefulWidget {
  const ButtomNav({Key? key}) : super(key: key);

  @override
  State<ButtomNav> createState() => _ButtomNavState();
}

class _ButtomNavState extends State<ButtomNav> {
  final prefs = shared_preference();

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      appBar: AppBar(
        title: Text('Navbar', style: TextStyle(color: Colors.black)),
        centerTitle: true,
        backgroundColor: Colors.white,

        // backgroundColor: Theme.of(context).scaffoldBackgroundColor,
        elevation: 1,
        leading: IconButton(
          onPressed: () {
            Navigator.pushNamed(context, '/root');
          },
          icon: Icon(
            Icons.arrow_back,
            color: Colors.green,
          ),
        ),
      ),
      body: Column(
        children: [
          const SizedBox(
            height: 10,
          ),
          Divider(
            height: 10,
            thickness: 9,
          ),
          Expanded(
            child: SettingsList(
              sections: [
                SettingsSection(
                  tiles: <SettingsTile>[
                    SettingsTile.navigation(
                      leading: Icon(Icons.menu_book_sharp),
                      title: Text('About US'),
                      onPressed: (BuildContext context) {
                        Navigator.pushNamed(context, '/about');
                      },
                    ),
                    SettingsTile.navigation(
                      leading: Icon(Icons.phone_android),
                      title: Text('Contact Us'),
                      onPressed: (BuildContext context) {
                        Navigator.pushNamed(context, '/con');
                      },
                    ),
                    SettingsTile.navigation(
                      leading: Icon(Icons.format_quote_sharp),
                      title: Text('FAQs'),
                      onPressed: (BuildContext context) {
                        Navigator.pushNamed(context, "/faqs");
                      },
                    ),
                    SettingsTile.navigation(
                      leading: Icon(Icons.map_outlined),
                      title: Text('Map'),
                      onPressed: (BuildContext context) {
                        Navigator.pushNamed(context, "/map");
                      },
                    ),
                    SettingsTile.navigation(
                      leading: Icon(Icons.app_blocking_sharp),
                      title: Text('Blogs'),
                      onPressed: (BuildContext context) {
                        Navigator.pushNamed(context, "/blogs");
                      },
                    ),
                    SettingsTile.navigation(
                      leading: Icon(Icons.local_offer_outlined),
                      title: Text('Offers'),
                      onPressed: (BuildContext context) {
                        Navigator.pushNamed(context, "/offers");
                      },
                    ),
                    SettingsTile.navigation(
                      leading: Icon(Icons.local_shipping_outlined),
                      title: Text('Shipping'),
                      onPressed: (BuildContext context) {
                        Navigator.pushNamed(context, "/shipping");
                      },
                    ),
                  ],
                ),
              ],
            ),
          ),
          Divider(
            height: 10,
            thickness: 9,
          ),
        ],
      ),
    );
  }
}
