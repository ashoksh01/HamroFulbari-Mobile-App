import 'package:flutter/material.dart';
import 'package:plant_app/core/color.dart';
import 'package:plant_app/core/constants.dart';
import 'package:plant_app/widgets/widgets.dart';

class RoundedEmail extends StatelessWidget {
static final emailController = TextEditingController();

RoundedEmail({Key? key, this.hintText, this.icon = Icons.person})
      : super(key: key);
  final String? hintText;
  final IconData icon;

  @override
  Widget build(BuildContext context) {
    return TextFieldContainer(
      child: TextFormField(

       controller: emailController,
        
        cursorColor: kPrimaryColor,
        decoration: InputDecoration(
            icon: Icon(
              icon,
              color: grey,
            ),
            hintText: hintText,
            hintStyle: const TextStyle(fontFamily: 'OpenSans'),
            border: InputBorder.none),
      ),
    );
  }
}
