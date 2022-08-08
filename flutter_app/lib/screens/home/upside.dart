import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:plant_app/core/constants.dart';

class Upside extends StatelessWidget {
  const Upside({Key? key, required this.imgUrl}) : super(key: key);
  final String imgUrl;

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Stack(
      children: [
        Container(
          width: size.width,
          height: size.height / 2,
          child: Padding(
            padding: const EdgeInsets.only(top: 1.0),
            child: Image.asset(
              imgUrl,
              alignment: Alignment.topCenter,
              scale: 8,
            ),
          ),
        ),
        iconBackButton(context),
      ],
    );
  }
}

iconBackButton(BuildContext context) {
  return IconButton(
    color: Color.fromARGB(255, 255, 255, 255),
    iconSize: 28,
    icon: const Icon(CupertinoIcons.arrow_left),
    onPressed: () {
      Navigator.pop(context);
    },
  );
}
