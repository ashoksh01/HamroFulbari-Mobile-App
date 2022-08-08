import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';

// material design
import 'package:flutter/material.dart';
import 'package:plant_app/utils/urls.dart';

class ProductCard extends StatefulWidget {
  final String productName;

  final String productPrice;
  final String productImage;
  final String productDescription;

  const ProductCard({
    Key? key,
    required this.productName,
    required this.productPrice,
    required this.productImage,
    required this.productDescription,
  }) : super(key: key);

  @override
  State<ProductCard> createState() => _ProductCardState();
}

class _ProductCardState extends State<ProductCard> {
  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.pushNamed(context, '/details', arguments: {
          "productName": widget.productName,
          "productPrice": widget.productPrice,
          "productImage": widget.productImage,
          "productDescription": widget.productDescription,
        });
      },
      child: Card(
        // product image and name
        child: Container(
          padding: const EdgeInsets.all(16),
          child: Row(
            children: [
              // ittle
              Container(
                width: 100,
                height: 100,
                child: baseUrl.contains("10.0.2.2")
                    ? CachedNetworkImage(
                        imageUrl: widget.productImage
                            .replaceAll('localhost', '10.0.2.2'),
                        placeholder: (context, url) =>
                            CupertinoActivityIndicator(),
                        errorWidget: (context, url, error) => Icon(Icons.error),
                      )
                    : CachedNetworkImage(
                        imageUrl: widget.productImage,
                        placeholder: (context, url) =>
                            CupertinoActivityIndicator(),
                        errorWidget: (context, url, error) => Icon(Icons.error),
                      ),
              ),
              const SizedBox(
                width: 16,
              ),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "${widget.productName}",
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(
                      height: 8,
                    ),
                    Text(
                      "discription",
                      style: TextStyle(
                        fontSize: 16,
                      ),
                    ),
                    const SizedBox(
                      height: 8,
                    ),
                    Text(
                      '\$${widget.productPrice}',
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
