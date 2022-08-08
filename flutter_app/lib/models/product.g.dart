// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'product.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Product _$ProductFromJson(Map<String, dynamic> json) => Product(
      name: json['name'] as String?,
      price: json['price'] as String?,
      category: json['category'] as String?,
      description: json['description'] as String?,
      loggedinmail: json['loggedinmail'] as String?,
      image: json['image'] as String?,
    );

Map<String, dynamic> _$ProductToJson(Product instance) => <String, dynamic>{
      'name': instance.name,
      'price': instance.price,
      'category': instance.category,
      'description': instance.description,
      'loggedinmail': instance.loggedinmail,
      'image': instance.image,
    };
