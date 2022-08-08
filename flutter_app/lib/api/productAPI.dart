import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:path_provider/path_provider.dart';
import 'package:plant_app/response/product_response.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:plant_app/utils/urls.dart';

class ProductAPI {
  Future<ProductResponse?> getProducts(String search) async {
    Future.delayed(const Duration(seconds: 5), () {});

    Box box;
    var dir = await getApplicationDocumentsDirectory();
    Hive.init(dir.path);
    box = await Hive.openBox('test');

    String name = "Succ";

    ProductResponse? productResponse;
    var url = baseUrl + '${productUrl}/$search'; // test url
    try {
      var dio = Dio();
      Response response = await dio.get(url, queryParameters: {});
      if (response.statusCode == 201) {
        // json status code
        String postflowers = jsonEncode(response.data);
        await box.clear();
        box.put("flower", postflowers);
        productResponse = ProductResponse.fromJson(response.data);
      } else {
        print('Request failed with status: ${response.statusCode}.');
      }
    } catch (e) {
      print("Loding offlne");
      var offline_data = box.get("flower");
      var encoded = jsonDecode(offline_data);
      productResponse = ProductResponse.fromJson(encoded);
    }
    return productResponse;
  }
  Future<ProductResponse?> getProduct() async {
    Future.delayed(const Duration(seconds: 5), () {});

    Box box;
    var dir = await getApplicationDocumentsDirectory();
    Hive.init(dir.path);
    box = await Hive.openBox('test');

    String name = "Succ";

    ProductResponse? productResponse;
    var url = baseUrl + productUrl; // test url
    print(url);
    // '${Config.getUser}/$id'
    try {
      var dio = Dio();
      Response response = await dio.get(url, queryParameters: {});
      print(response);
      if (response.statusCode == 201) {
        // json status code
        String postflowers = jsonEncode(response.data);
        await box.clear();
        box.put("flower", postflowers);
        productResponse = ProductResponse.fromJson(response.data);
      } else {
        print('Request failed with status: ${response.statusCode}.');
      }
    } catch (e) {
      print("Loding offlne");
      var offline_data = box.get("flower");
      var encoded = jsonDecode(offline_data);
      productResponse = ProductResponse.fromJson(encoded);
    }
    return productResponse;
  }
}
