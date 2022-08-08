import 'package:awesome_notifications/awesome_notifications.dart';
import 'package:flutter/material.dart';
import 'package:motion_toast/motion_toast.dart';
import 'package:plant_app/screens/home/bottom_nav.dart';
import 'package:plant_app/components/components.dart';
import 'package:plant_app/screens/home/under_part.dart';
import 'package:plant_app/core/constants.dart';
import 'package:plant_app/repository/Userrepository.dart';
import 'package:plant_app/screens/home/home_page.dart';
import 'package:plant_app/screens/loginregister/screens.dart';
import 'package:plant_app/screens/paymentandcartdetails/root_page.dart';
import 'package:plant_app/screens/paymentandcartdetails/screens/home_page.dart';
import 'package:plant_app/widgets/register-text-field/rounded_email.dart';
import 'package:plant_app/widgets/widgets.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  // controller for email and password
  // static final emailController = TextEditingController();
  // static final passwordController = TextEditingController();

  var email = RoundedEmail.emailController;
  var password = RoundedPasswordField.passwordController;

  _login() async {
    try {
      UserRepository userRepository = UserRepository();
      bool isLogin = await userRepository.login(
        email.text,
        password.text,
        // emailController.text,
        // passwordController.text,
      );
      if (isLogin) {
        _navigateToScreen(true);
      } else {
        _navigateToScreen(false);
      }
    } catch (e) {
      MotionToast.error(
        description: Text("Error:${e.toString()}"),
      ).show(context); // MotionToast.error
    }
  }

  _navigateToScreen(bool isLogin) {
    if (isLogin) {
      Navigator.push(
          context, MaterialPageRoute(builder: (builder) => const RootPage()));
      AwesomeNotifications().createNotification(
          content: NotificationContent(
              id: 1,
              channelKey: 'basic_channel',
              title: "Successfully login",
              body: 'You are successfully login welcome to plant app!!'));
      MotionToast.success(
        description: const Text("Login Successfully"),
      ).show(context); // MotionToast.error

      // Navigator.push(context,MaterialPageRoute(builder: (context){return const HomePage();}));
    } else {
      AwesomeNotifications().createNotification(
          content: NotificationContent(
              id: 1,
              channelKey: 'basic_channel',
              title: "Login failed",
              body: 'Please re-check your login details'));
      MotionToast.error(
        description: const Text("Either username or password is not correct"),
      ).show(context); // MotionToast.error
    }
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return SafeArea(
      child: Scaffold(
        body: SizedBox(
          width: size.width,
          height: size.height,
          child: SingleChildScrollView(
            child: Stack(
              children: [
                const Upside(
                  imgUrl: "assets/images/slider1.png",
                ),
                const PageTitleBar(title: 'Login to your account'),
                Padding(
                  padding: const EdgeInsets.only(top: 200.0),
                  child: Container(
                    width: double.infinity,
                    decoration: const BoxDecoration(
                      color: Color.fromARGB(255, 255, 255, 255),
                      borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(40),
                        topRight: Radius.circular(40),
                      ),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        const SizedBox(
                          height: 10,
                        ),
                        const SizedBox(
                          height: 10,
                        ),
                        const Text(
                          "Welcome Back To Hamrofulbari!!",
                          style: TextStyle(
                              color: Color.fromARGB(255, 92, 85, 85),
                              fontFamily: 'OpenSans',
                              fontSize: 20,
                              fontWeight: FontWeight.w900),
                        ),
                        Form(
                          child: Column(
                            children: [
                              RoundedEmail(
                                  hintText: "Email", icon: Icons.email),
                              RoundedPasswordField(),
                              // TextFormField(
                              //   key: ValueKey('email'),
                              //   controller: emailController,
                              //   cursorColor: kPrimaryColor,
                              //   decoration: InputDecoration(
                              //       hintText: "Email",
                              //       hintStyle:
                              //           const TextStyle(fontFamily: 'OpenSans'),
                              //       border: InputBorder.none),
                              // ),
                              // TextFormField(
                              //   key: ValueKey('password'),
                              //   controller: emailController,
                              //   cursorColor: kPrimaryColor,
                              //   decoration: InputDecoration(
                              //       hintText: "Password",
                              //       hintStyle:
                              //           const TextStyle(fontFamily: 'OpenSans'),
                              //       border: InputBorder.none),
                              // ),
                              switchListTile(),
                              RoundedButton(
                                  key: ValueKey('loginBtn'),
                                  text: 'LOGIN',
                                  press: () {
                                    _login();
                                    // Navigator.pushNamed(context, '/homepage');
                                  }),
                              const SizedBox(
                                height: 10,
                              ),
                              UnderPart(
                                title: "Don't have an account?",
                                navigatorText: "Create your account...",
                                onTap: () {
                                  Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) =>
                                              const SignUpScreen()));
                                },
                              ),
                              const SizedBox(
                                height: 10,
                              ),
                              TextButton(
                                onPressed: () {
                                  (Navigator.pushNamed(
                                      context, '/forgotpassword'));
                                },
                                child: Text(
                                  'Forgot Password?',
                                  style: TextStyle(
                                      color: Color.fromARGB(255, 26, 25, 27),
                                      fontFamily: 'OpenSans',
                                      fontSize: 16,
                                      fontWeight: FontWeight.w700),
                                ),
                              ),
                              const SizedBox(
                                height: 20,
                              )
                            ],
                          ),
                        )
                      ],
                    ),
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }

  switchListTile() {
    return Padding(
      padding: const EdgeInsets.only(left: 50, right: 40),
      child: SwitchListTile(
        dense: true,
        title: const Text(
          'Remember Me',
          style: TextStyle(fontSize: 16, fontFamily: 'OpenSans'),
        ),
        value: false,
        activeColor: kPrimaryColor,
        onChanged: (val) {},
      ),
    );
  }
}
