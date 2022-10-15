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

ObjectStruct[] public all;

string [] public keys;

mapping (string => ObjectStruct) students;




event NewStudentadded(uint _count, string _Fullname, string _Major, uint _id_number, uint _GPA, string _DOB);
event Deletes(uint _count, string _Fullname, string _Major, uint _id_number, uint _GPA, string _DOB,string s);
event update(string _Major,uint _GPA);





function addNewStudent(string memory Fullname,string memory Major, uint id_number, uint GPA,   string memory DOB )public{
count++;
all.push(ObjectStruct(Fullname,Major, DOB,  id_number,  GPA));

students[Fullname]=ObjectStruct(Fullname,Major, DOB,id_number,GPA);


//string memory name= concatenate(Fullname,"  ,");
keys.push(Fullname);
 
 emit NewStudentadded(count,Fullname,Major,id_number,GPA,DOB);
 

}


function updateStudent(string memory Fullname,string memory Major, uint GPA )public{
if (students[Fullname].GPA !=0){


if(GPA!=0){

students[Fullname].GPA=GPA;

}

if(bytes(Major).length!=0){
students[Fullname].Major=Major;
}
 emit update(students[Fullname].Major,students[Fullname].GPA);
} 

}

function  concatenate(string memory a,string memory b) public pure
returns(string memory) {
return string(abi. encodePacked(a, b));}


function getStudent(string memory fullname)public view returns (ObjectStruct memory) {

 ObjectStruct  memory os= students[fullname];
 
 
 return os;

}


function getAllStudent()public view returns (string [] memory) {

 return keys;

}


function deleteStudent (string  memory name )public   {

  if (students[name].GPA !=0){
 delete students[name];
 count--;
 //keys.pop();
 string memory s;
  uint256 ss=0;

for(uint256 i=0; i<=keys.length-1; i++){

  s = keys[i];

  //s=concatenate(s,"  ,");

if (keccak256(abi.encodePacked(s)) == keccak256(abi.encodePacked(name))) {
  // do something

keys[i]= keys[keys.length -1];
keys.pop();
return;
}


}
 emit Deletes(count,students[name].Fulname,students[name].DOB,students[name].GPA,students[name].id_number,students[name].Major,keys[ss]);

  }


}

function getCount()public view returns (uint){


    return count;
}

constructor()  {
    addNewStudent("Damoy Williams","CIS", 543231332, 3.0, "1997/04/28");
  }





}



