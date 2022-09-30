// SPDX-License-Identifier: UNLICENSED
pragma solidity ^ 0.8.0; 

contract database{
uint public count=0;

struct ObjectStruct{
string Fulname;

string Major; 
string DOB;
uint id_number; 
uint GPA; 




}


ObjectStruct[] all;




mapping (string => ObjectStruct) students;

event NewStudentadded(uint _count, string _Fullname, string _Major, uint _id_number, uint _GPA, string _DOB);
event Deletes(uint counter, ObjectStruct [] allthem );

function addNewStudent(string memory Fullname,string memory Major, uint id_number, uint GPA,   string memory DOB )public{
count++;
all.push(ObjectStruct(Fullname,Major, DOB,  id_number,  GPA));
 students[Fullname]=ObjectStruct(Fullname,Major, DOB,id_number,GPA);
 
 emit NewStudentadded(count,Fullname,Major,id_number,GPA,DOB);
 

}


function getStudent(string memory fullname)public view returns (ObjectStruct memory) {

 ObjectStruct  memory os= students[fullname];
 
 return os;

}


function getAllStudent()public view returns (ObjectStruct [] memory) {

 return all;

}


function deleteStudent (string  memory name )public   {

 delete students[name];

}








function getCount()public view returns (uint){


    return count;
}

constructor()  {
    addNewStudent("Damoy Williams","CIS", 543231332, 3.0, "1997/04/28");
  }





}



