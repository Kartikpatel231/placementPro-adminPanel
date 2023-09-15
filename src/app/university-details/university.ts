export interface University{
     id:number
     universityName: String ; // Allow dynamic university names
     tenthMarks: number ;
     twelfthMarks:number;
     cgpa:number;
     sgpa:number;
     currentYear:number; // Change to integer
     currentSemester:number; // Change to integer
      numberOfBacklogs:number; // Change to integer
      course:String;
      section:String;
     batches:String;

      passingYear:number; // Change to integer
   // @Enumerated(EnumType.STRING)
       placementStatus :String;
}