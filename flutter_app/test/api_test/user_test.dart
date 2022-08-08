import 'package:flutter_test/flutter_test.dart';
import 'package:plant_app/api/UserAPI.dart';
import 'package:plant_app/api/productAPI.dart';
import 'package:plant_app/models/user.dart';
import 'package:plant_app/repository/Userrepository.dart';
import 'package:plant_app/response/product_response.dart';

void main() {
  late UserRepository? userRepository;
  setUp(() {
    userRepository = UserRepository();
  });
  test('user registration', () async {
    bool expectedResult = true;
    User user = User(
        email: 'Namuna@gmail.com ',
        password: 'Stha1234',
        fullname: 'Namuna Shrestha',
        contactnum: '9866543212',
     );

    bool actualResult = await UserRepository().register(user);
    expect(actualResult, expectedResult);
  });
  tearDown(() {
    userRepository = null;
  });
  
  test("user login test", () async {
    bool expected = true;
    String email = "ashokshrestha102@gmail.com";
    String password = "bbb";
    bool actual = await UserRepository().login(email, password);
    expect(actual, expected);
    
  });
  tearDown(() {
    userRepository = null;
  });

   test("get questions test and expect success as true", () async {
    bool expected = true;
    ProductResponse? productResponse = await ProductAPI().getProduct();
    bool? actual = productResponse!.success;
    expect(actual, expected);
  });

  test("change password test and expect bool", () async {
    String id = "62e9e062dd33f62794bdd1d4";
    String oldPassword = "bbb";
    String newPassword = "bbb";
    bool expected = true;
    bool actual = await UserAPI.changePassword(oldPassword, newPassword);
    expect(actual, expected);
  });
}
