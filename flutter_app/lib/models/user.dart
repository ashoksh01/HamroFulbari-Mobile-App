

class User {
  String? fullname;
  String? email;
  String? password;
  String? contactnum;

  User({this.fullname, 
  this.email, 
  this.password, 
  this.contactnum});

  factory User.fromJson(Map<String, dynamic> json) => User(
        fullname: json["fullname"],
        email: json["email"],
        password: json["password"],
        contactnum: json["contactnum"],
      );

      Map<String,dynamic> toJson()=>{
        "fullname":fullname,
        "email":email,
        "password":password,
        "contactnum":contactnum,
      };
  }

