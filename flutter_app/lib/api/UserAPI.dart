//step 3

import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:plant_app/api/Httpservices.dart';
import 'package:plant_app/response/Userresponse.dart';
import 'package:plant_app/utils/urls.dart';
import 'package:plant_app/models/user.dart';

import 'package:plant_app/shared/shared-preference.dart';
import 'package:shared_preferences/shared_preferences.dart';

class UserAPI {
  Future<bool> register(User user) async {
    bool isRegister = false;

    Response response;

    var url = baseUrl + registerUrl;

    var dio = HttpServices().getDioInstance();

    try {
      response = await dio.post(
        url,
        data: user.toJson(),
      );

      if (response.statusCode == 200) {
        return true;
      }
    } catch (e) {
      debugPrint(e.toString());
    }

    return isRegister;
  }

  Future<bool> login(String email, String password) async {
    print("dwewew");
    bool isLogin = false;

    // shared preferences
    SharedPreferences prefs = await SharedPreferences.getInstance();

    try {
      var url = baseUrl + loginUrl;

      var dio = HttpServices().getDioInstance();

      var response =
          await dio.post(url, data: {"email": email, "password": password});
      print('This is resp data   ${response.data['logininfo']['id']}');
      prefs.setString("userId", response.data['logininfo']['id']);

      if (response.statusCode == 200) {
        LoginResponse loginResponse = LoginResponse.fromJson(response.data);

        // prefs.setString("id", loginResponse.id);

        token = loginResponse.token;

        isLogin = true;
      }
    } catch (e) {
      debugPrint(e.toString());
    }

    return isLogin;
  }

  // change password
  static Future<bool> changePassword(
      String oldPassword, String newPassword) async {
    bool isChange = true;
    SharedPreferences prefs = await SharedPreferences.getInstance();
    var id = prefs.getString("userId");

    try {
      var url = baseUrl + changePasswordUrl;

      var response = await Dio().post(url, data: {
        'id': id,
        "oldPassword": oldPassword,
        "newPassword": newPassword,
      });
      print(response);

      if (response.statusCode == 200) {
        isChange = true;
        print("Jere");
      }
    } catch (e) {
      print(e);
    }

    return isChange;
  }
}
