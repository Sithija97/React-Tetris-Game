import 'package:flutter/material.dart';

class Second extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        //leading: IconButton(icon: Icon(Icons.menu), onPressed: () {}),//drawerIcon
        title: Text("Fluter Basics",
        style: TextStyle(color: Color(4278190080))),
        centerTitle: true,
        backgroundColor: Colors.indigoAccent,
      ),
      body:Container(
          child: Column(
            children: <Widget>[
              Text('second screen'),
            ]
          )
        ) 
    );
  }
}