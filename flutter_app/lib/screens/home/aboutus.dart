import 'package:flutter/material.dart';

class AboutUsScreenPage extends StatelessWidget {
  const AboutUsScreenPage({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.green,
        title: const Text("About Us Screen"),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Container(
              height: 150,
              padding: EdgeInsets.all(10),
              margin: EdgeInsets.all(2),
              width: double.infinity,
              decoration: const BoxDecoration(
                image: DecorationImage(
                  fit: BoxFit.fill,
                  image: AssetImage('assets/images/slider1.jpg'),
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.all(10),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "About Hamrofulbari",
                    style: TextStyle(
                      color: Colors.green,
                      fontWeight: FontWeight.w900,
                      fontSize: 32,
                    ),
                  ),
                ],
              ),
            ),
            Divider(
              color: Colors.green,
              thickness: 2,
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 8),
              child: Text(
                "How to use Hamrofulbari ? \n Firstable you need to register your account and login the account, buy the plants and flowers products.",
                style: TextStyle(
                    color: Colors.black,
                    fontSize: 17,
                    fontWeight: FontWeight.bold),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 8),
              child: Text(
                "What are more features?\n User can upload their profile, when you shake the phone you will directly logout your account, the light sensor also used for the personal prevention.",
                style: TextStyle(
                    color: Colors.black,
                    fontSize: 17,
                    fontWeight: FontWeight.bold),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 8),
              child: Text(
                "How can I pay for the services? \n Currently we have payment options of stripe E-walete you can pay through stripe and place your order delivery.",
                style: TextStyle(
                    color: Colors.black,
                    fontSize: 17,
                    fontWeight: FontWeight.bold),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
