import 'package:flutter/material.dart';

class HamrofulbariContact extends StatelessWidget {
  const HamrofulbariContact({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.green,
        title: const Text("HamroFulbari Contact Session"),
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
                    "You can contact us through below contacts.",
                    style: TextStyle(
                      color: Colors.green,
                      fontWeight: FontWeight.w900,
                      fontSize: 38,
                    ),
                  ),
                ],
              ),
            ),
            Divider(
              color: Colors.black,
              thickness: 2,
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text(
                "Plants and Flowers Collection",
                style: TextStyle(
                  color: Colors.black,
                  fontSize: 22,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text("Address: Kathmandu, Nepal",
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: 18,
                  )),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text("Contact Number: +977-9823232440",
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: 18,
                  )),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text("Mail: hamrofulbari2022@gmail.com",
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: 18,
                  )),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text("Facebook: HamroFulbari2022",
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: 18,
                  )),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text("Instagram: hamro_fulbari77",
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: 18,
                  )),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text("Linkend: hamrofulbari77",
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: 18,
                  )),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text("Webpage: hamrofulbari.com.np",
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: 18,
                  )),
            ),
          ],
        ),
      ),
    );
  }
}
