import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:motion_toast/motion_toast.dart';
import 'package:plant_app/repository/Userrepository.dart';
import 'package:wear/wear.dart';

class WearOSLogin extends StatefulWidget {
  const WearOSLogin({Key? key}) : super(key: key);
  @override
  State<WearOSLogin> createState() => _WearOSLoginState();
}

class _WearOSLoginState extends State<WearOSLogin> {
  // email and password controller
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  _login() async {
    print("Hello");
    UserRepository userRepository = UserRepository();
    bool isLogin = await userRepository.login(
      _emailController.text,
      _passwordController.text,
    );
    if (isLogin) {
      Navigator.pushNamed(context, "/wearos_dash");
      Fluttertoast.showToast(
          msg: "Login Success",
          toastLength: Toast.LENGTH_SHORT,
          gravity: ToastGravity.BOTTOM,
          timeInSecForIosWeb: 1,
          backgroundColor: Colors.green,
          textColor: Colors.white,
          fontSize: 12.0);
    } else {
      Fluttertoast.showToast(
          msg: "Login Failed",
          toastLength: Toast.LENGTH_SHORT,
          gravity: ToastGravity.BOTTOM,
          timeInSecForIosWeb: 1,
          backgroundColor: Colors.red,
          textColor: Colors.white,
          fontSize: 12.0);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
      child: Column(
        children: [
          Text("Wear os Login"),
          TextFormField(
            controller: _emailController,
            decoration: InputDecoration(
              labelText: "Email",
            ),
          ),
          TextFormField(
            controller: _passwordController,
            decoration: InputDecoration(
              labelText: "Password",
            ),
          ),
          RaisedButton(
            child: Text("Login"),
            onPressed: () {
              _login();
            },
          ),
        ],
      ),
    ));
  }
}
