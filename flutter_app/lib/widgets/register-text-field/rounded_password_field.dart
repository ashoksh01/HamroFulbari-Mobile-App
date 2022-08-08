import 'package:flutter/material.dart';
import 'package:plant_app/core/color.dart';
import 'package:plant_app/core/constants.dart';
import 'package:plant_app/widgets/widgets.dart';

class RoundedPasswordField extends StatelessWidget {
static final passwordController = TextEditingController();
  RoundedPasswordField({ Key? key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextFieldContainer(
      child: TextFormField(

        controller: passwordController,

        obscureText: true,
        cursorColor: kPrimaryColor,
         decoration: const InputDecoration(
            icon: Icon(
              Icons.lock,
              color: grey,
            ),
            hintText: "Password",
            hintStyle:  TextStyle(fontFamily: 'OpenSans'),
            suffixIcon: Icon(
              Icons.visibility,
              color: grey,
            ),
            border: InputBorder.none),
      ),
    );
  }
}