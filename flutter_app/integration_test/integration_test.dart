import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:plant_app/screens/loginregister/loginpage.dart';
import 'package:plant_app/screens/loginregister/signup_screen.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  testWidgets('Auto login integration test',
      (WidgetTester tester) async {
    await tester.pumpWidget(
      MaterialApp(
        routes:{
          '/register': (context) => const SignUpScreen(),
        },
        home: const LoginPage(),
      ),
    );
    Finder textFirst = find.byKey(const ValueKey('email'));
    await tester.enterText(textFirst, 'ashokshrestha102@gmail.com');
    Finder textSecond = find.byKey(const ValueKey('password'));
    await tester.enterText(textSecond, 'bbb');
    Finder btnAdd = find.byKey(const ValueKey('loginBtn'));
    await tester.tap(btnAdd);
    await tester.pumpAndSettle();
    // expect null
    expect(find.byKey(const ValueKey('loginBtn')), findsNothing);
  });
}