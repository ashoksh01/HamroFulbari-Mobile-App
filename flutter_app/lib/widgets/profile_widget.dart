import 'package:flutter/material.dart';
import 'package:plant_app/core/constants.dart';
import 'package:settings_ui/settings_ui.dart';

class ProfileWidget extends StatelessWidget {
  final IconData icon;
  final String title;
  final Function() onPressed;
  const ProfileWidget({
    Key? key,
    required this.icon,
    required this.title,
    required this.onPressed,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SettingsList(
      sections: [
        SettingsSection(
          title: Text('Common'),
          tiles: <SettingsTile>[
            SettingsTile.navigation(
              leading: Icon(Icons.language),
              title: Text('Language'),
              value: Text('English'),
            ),
            SettingsTile.switchTile(
              onToggle: (value) {},
              initialValue: true,
              leading: Icon(Icons.format_paint),
              title: Text('Enable custom theme'),
            ),
          ],
        ),
      ],
    );
    // InkWell(
    //   onTap: () {
    //     onPressed;
    //   },
    //   child: Container(
    //     padding: const EdgeInsets.symmetric(vertical: 18),
    //     child: Row(
    //       mainAxisAlignment: MainAxisAlignment.spaceBetween,
    //       children: [
    //         Row(
    //           children: [
    //             Icon(
    //               icon,
    //               color: Constants.blackColor.withOpacity(.5),
    //               size: 24,
    //             ),
    //             const SizedBox(
    //               width: 16,
    //             ),
    //             Text(
    //               title,
    //               style: TextStyle(
    //                 color: Constants.blackColor,
    //                 fontSize: 18,
    //                 fontWeight: FontWeight.w600,
    //               ),
    //             ),
    //           ],
    //         ),
    //         Icon(
    //           Icons.arrow_forward_ios,
    //           color: Constants.blackColor.withOpacity(.4),
    //           size: 16,
    //         )
    //       ],
    //     ),
    //   ),
    // );
  }
}
