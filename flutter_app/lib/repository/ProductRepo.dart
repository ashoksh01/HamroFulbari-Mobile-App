import 'package:plant_app/api/productAPI.dart';
import 'package:plant_app/response/product_response.dart';



class ProductRepo {
  Future<ProductResponse?> getProducts(String search) async {
    return ProductAPI().getProducts(search);
  }
}
 

// step 3 , need s step 4