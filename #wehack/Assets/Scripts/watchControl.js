#pragma strict

var hours : int;
var minutes : int;
var seconds : int;
var secondsHand: Transform;
var minutesHand: Transform;
var hoursHand: Transform;
private var realSeconds : int;
private var realMinutes : int;
private var realHours : int;
private var temp : int;

function Start () 
{
	realHours = int.Parse(System.DateTime.Now.ToString("HH"));
	realMinutes = int.Parse(System.DateTime.Now.ToString("mm"));
	realSeconds = int.Parse(System.DateTime.Now.ToString("ss"));
	secondsHand.Rotate(Vector3(0,realSeconds*6,0));
	minutesHand.Rotate(Vector3(0,realMinutes*6,0));
	hoursHand.Rotate(Vector3(0,realHours*30,0));
	temp = realMinutes * 0.5;
	hoursHand.Rotate(Vector3(0,temp,0));
}

function Update () 
{
	//Debug.Log(System.DateTime.Now);
	hours = int.Parse(System.DateTime.Now.ToString("HH"));
	minutes = int.Parse(System.DateTime.Now.ToString("mm"));
	seconds = int.Parse(System.DateTime.Now.ToString("ss"));
	if(seconds != realSeconds)
	{
		secondsHand.Rotate(Vector3(0,6,0));
		realSeconds = seconds;
	}
	if(minutes != realMinutes) 
	{
		minutesHand.Rotate(Vector3(0,6,0));
		hoursHand.Rotate(Vector3(0,0.5,0));
		realMinutes = minutes;
		realHours = hours;
	}
}