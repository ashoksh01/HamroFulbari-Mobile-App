import 'package:flutter/material.dart';

class CategoryCard extends StatefulWidget {
  final String categoryImagePath;
  final String categoryName;

  CategoryCard({required this.categoryImagePath, required this.categoryName});

  @override
  State<CategoryCard> createState() => _CategoryCardState();
}

class _CategoryCardState extends State<CategoryCard> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          ClipRRect(
            child: Container(
                child: Image.network(
              widget.categoryImagePath,
              height: 50,
              width: 50,
              fit: BoxFit.cover,
            )),
            borderRadius: BorderRadius.circular(30),
          ),
          Text(widget.categoryName)
        ],
      ),
    );
  }
}
