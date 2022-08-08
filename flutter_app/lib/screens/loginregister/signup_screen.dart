import 'package:flutter/material.dart';
import 'package:motion_toast/motion_toast.dart';
import 'package:plant_app/components/components.dart';
import 'package:plant_app/screens/home/under_part.dart';
import 'package:plant_app/models/user.dart';
import 'package:plant_app/repository/Userrepository.dart';
import 'package:plant_app/screens/loginregister/loginpage.dart';
import 'package:plant_app/screens/loginregister/screens.dart';
import 'package:plant_app/widgets/register-text-field/rounded_contact.dart';
import 'package:plant_app/widgets/register-text-field/rounded_email.dart';
import 'package:plant_app/widgets/widgets.dart';

class SignUpScreen extends StatefulWidget {
  const SignUpScreen({Key? key}) : super(key: key);

  @override
  State<SignUpScreen> createState() => _SignUpScreenState();
}

class _SignUpScreenState extends State<SignUpScreen> {
  _registerUser(User user) async {
    bool isRegister = await UserRepository().register(user);

    if (isRegister) {
      Navigator.pushNamed(context, '/login');

      MotionToast.success(description: const Text("User Added Successfully"))
          .show(context);
    } else {
      MotionToast.error(description: const Text("Something went wrong"))
          .show(context);
    }
  }

  @override
  Widget build(BuildContext context) {
    var fullname = RoundedFullname.fullnameController;
    var email = RoundedEmail.emailController;
    var contact = RoundedContact.contactController;
    var password = RoundedPasswordField.passwordController;

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
                  imgUrl: "assets/images/slider2.png",
                ),
                const PageTitleBar(title: 'Create New Account'),
                Padding(
                  padding: const EdgeInsets.only(top: 260.0),
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
                          "Create your new account",
                          style: TextStyle(
                              color: Color.fromARGB(255, 88, 86, 86),
                              fontFamily: 'OpenSans',
                              fontSize: 20,
                              fontWeight: FontWeight.w900),
                        ),
                        Form(
                          child: Column(
                            children: [
                              RoundedEmail(
                                  hintText: "Email", icon: Icons.email),
                              RoundedFullname(
                                  hintText: "Full Name", icon: Icons.person),
                              RoundedContact(
                                  hintText: "Number", icon: Icons.phone),
                              RoundedPasswordField(),
                              RoundedButton(
                                  text: 'REGISTER',
                                  press: () {
                                    User user = User(
                                      fullname: fullname.text,
                                      email: email.text,
                                      password: password.text,
                                      contactnum: contact.text,
                                    );
                                    _registerUser(user);
                                  }),
                              const SizedBox(
                                height: 10,
                              ),
                              UnderPart(
                                title: "Already have an account?",
                                navigatorText: "Login here",
                                onTap: () {
                                  Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) =>
                                              const LoginPage()));
                                },
                              ),
                              const SizedBox(
                                height: 10,
                              ),
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
}
