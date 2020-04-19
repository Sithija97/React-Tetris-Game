
import 'package:flutter/material.dart';

void main() => runApp(
  MaterialApp(
      title: "Weather App",
      home: Home()),
);

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:Column(
        children: <Widget>[
          Container(
            height: MediaQuery.of(context).size.height/3,
            width: MediaQuery.of(context).size.width,
            color: Colors.indigo,
          )
        ],
      )
    );
  }
}
