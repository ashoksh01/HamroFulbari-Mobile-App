import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:plant_app/core/constants.dart';
import 'package:plant_app/shared/shared-preference.dart';
import 'package:settings_ui/settings_ui.dart';
import 'package:shake/shake.dart';
import 'package:shared_preferences/shared_preferences.dart';

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({Key? key}) : super(key: key);

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  final prefs = shared_preference();

  late ShakeDetector detector;

  @override

//shake sensor
  void initState() {
    detector = ShakeDetector.autoStart(
      onPhoneShake: () {
        setState(() {
          _showAlertDialog(context);
        });
      },
    );
    // TODO: implement initState
    super.initState();
  }

  @override
  void dispose() {
    detector.stopListening();
    super.dispose();
  }

  void _showAlertDialog(BuildContext context) {
    showCupertinoModalPopup<void>(
      context: context,
      builder: (BuildContext context) => CupertinoAlertDialog(
        title: const Text('Alert'),
        content: const Text('Are you sure want to do this ?'),
        actions: <CupertinoDialogAction>[
          CupertinoDialogAction(
            isDefaultAction: true,
            onPressed: () {
              Navigator.pop(context);
            },
            child: const Text('Cancel'),
          ),
          CupertinoDialogAction(
            isDestructiveAction: true,
            onPressed: () {
              Navigator.pushNamed(context, "/splashscreen");
            },
            child: const Text('Yes Logout'),
          )
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      appBar: AppBar(
        title:
            Text('Profile and Setting', style: TextStyle(color: Colors.black)),
        centerTitle: true,
        backgroundColor: Colors.white,

        // backgroundColor: Theme.of(context).scaffoldBackgroundColor,
        elevation: 1,
        leading: IconButton(
          onPressed: () {
            Navigator.pushNamed(context, "/root");
          },
          icon: Icon(
            Icons.arrow_back,
            color: Colors.green,
          ),
        ),
      ),
      body: Column(
        children: [
          Container(
            width: 120,
            child: const CircleAvatar(
              radius: 60,
              backgroundImage: ExactAssetImage('assets/images/profile.png'),
            ),
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(
                color: Constants.primaryColor.withOpacity(.4),
                width: 2.0,
              ),
            ),
          ),
          const SizedBox(
            height: 4,
          ),
          SizedBox(
            width: size.width * .4,
            child: Row(
              children: [
                Text(
                  'Ashok Shrestha',
                  style: TextStyle(
                    color: Constants.blackColor,
                    fontSize: 18,
                  ),
                ),
                SizedBox(
                    height: 18,
                    child: Image.asset("assets/images/verified.png")),
              ],
            ),
          ),
          Text(
            'ashokshrestha102@gmail.com',
            style: TextStyle(
              color: Constants.blackColor.withOpacity(.4),
            ),
          ),
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
                  title: Text(
                    'Account',
                    style: TextStyle(
                      color: Colors.black,
                      fontSize: 20,
                    ),
                  ),
                  tiles: <SettingsTile>[
                    SettingsTile.navigation(
                      leading: Icon(Icons.person),
                      title: Text('My Profile'),
                      value: Text('Your profile details'),
                      onPressed: (BuildContext context) {
                        Navigator.pushNamed(context, '/editprofile');
                      },
                    ),
                    SettingsTile.navigation(
                      leading: Icon(Icons.edit_sharp),
                      title: Text('Edit Pofile'),
                      value: Text('Edit your profile here'),
                      onPressed: (BuildContext context) {
                        Navigator.pushNamed(context, '/editprofile');
                      },
                    ),
                    SettingsTile.navigation(
                      leading: Icon(Icons.password),
                      title: Text('Change Password'),
                      value: Text('Change your password here'),
                      onPressed: (BuildContext context) {
                        Navigator.pushNamed(context, '/changepassword');
                      },
                    ),
                    SettingsTile.navigation(
                      leading: Icon(Icons.shopping_bag_outlined),
                      title: Text('My Orders'),
                      value: Text('View your order history'),
                      onPressed: (BuildContext context) {
                        Navigator.pushNamed(context, "/orderhistory");
                      },
                    ),
                    SettingsTile.navigation(
                      leading: Icon(Icons.logout_outlined),
                      title: Text('Logout'),
                      value: Text('Sign out from hamrofulbari'),
                      onPressed: (BuildContext context) async {
                        final pref = await SharedPreferences.getInstance();
                        prefs.removeAuthToken();
                        pref.remove("total_price");
                        Navigator.pushNamed(context, "/splashscreen");
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
