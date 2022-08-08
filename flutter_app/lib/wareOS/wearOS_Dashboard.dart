import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';

class WearOS_Dashboard extends StatefulWidget {
  const WearOS_Dashboard({Key? key}) : super(key: key);

  @override
  State<WearOS_Dashboard> createState() => _WearOS_DashboardState();
}

class _WearOS_DashboardState extends State<WearOS_Dashboard> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text('Welcome, Ashok!'),
      ),
    
    );
  }
}
