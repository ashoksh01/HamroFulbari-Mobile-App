import 'package:shared_preferences/shared_preferences.dart';
class shared_preference{
  //set> local storage
  setAuthToken(String accessToken) async {
    final pref = await SharedPreferences.getInstance();
    return pref.setString("token", accessToken);
  }
  //remove > local storage
  Future<bool> removeAuthToken() async {
    final pref = await  SharedPreferences.getInstance();
    return pref.remove("token");
    
  }
}