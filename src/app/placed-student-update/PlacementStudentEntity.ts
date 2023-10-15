export interface PlacementStudentEntity {
    placedId: number;
    studentId: number;
    studentName: string;
    company: string;
    branch: string;
//    placement: Placement; // You'll need to define the 'Placement' type
    imagePath: string;
    placementDate: string; // Assuming it's in string format
  }
  