#pragma strict

var hours : String ;
var minutes : String;
var seconds : String;

function Start () 
{

}

function Update () 
{
	Debug.Log(System.DateTime.Now);
	hours = System.DateTime.Now.ToString("HH");
	minutes = System.DateTime.Now.ToString("mm");
	seconds = System.DateTime.Now.ToString("ss");
}