//step 4

import 'package:plant_app/api/UserAPI.dart';
import 'package:plant_app/models/user.dart';

class UserRepository {
  Future<bool> register(User user) async {
    return await UserAPI().register(user);
  }

  Future<bool> login(String email, String password) {
    return UserAPI().login(email, password);
  }
}
