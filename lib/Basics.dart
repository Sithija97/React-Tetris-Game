import 'package:flutter/material.dart';
import 'package:weather/second.dart';

class Basics extends StatelessWidget {
  @override
  Widget build(BuildContext context) {

    void navigate(){
      Navigator.push(context, MaterialPageRoute(builder: (context)=>Second()));//stack-navigator
    }

    return Scaffold(
      appBar: AppBar(
        title: Text("Fluter Basics",
        style: TextStyle(color: Color(4278190080))),
        centerTitle: true,
        backgroundColor: Colors.indigoAccent,
      ),
      body: Container(
        child:Center(
          child: Column(
            children: <Widget>[
              Text('Home screen'),
              FlatButton(
                onPressed: navigate, 
                child: Text('next')
                )
            ]
          )
        ),
      ),
    );
  }
}
