import 'package:json_annotation/json_annotation.dart';
part 'product.g.dart'; //exact match as the filename is the same

@JsonSerializable()

// install json_serializable to generate this class pub get 


class Product {
  String? name, price, category, description, loggedinmail, image;

  Product(  
      {this.name,
      this.price,
      this.category,
      this.description,
      this.loggedinmail,
      this.image
  });

  factory Product.fromJson(Map<String, dynamic> json) => _$ProductFromJson(json);
  
  Map<String, dynamic> toJson() => _$ProductToJson(this);
  
}
