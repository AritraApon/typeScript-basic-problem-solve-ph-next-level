
const multiplyValue = (value:number ,multiplier:number=2):number => {
    return value * multiplier
}





type PrcessInput = number | string | boolean
const processInput =( value: PrcessInput ):number | string=>{

    if(typeof value === 'string'){
        return value.trim().toLowerCase()
    }
    else if ( typeof value === 'number'){
        return value * 10
    }else{
        return value ? "Active" : "Inactive"
    }
}




const formatCoordinate = (
  coordinate: readonly [number, number, string]
): string => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};







type ConcatFunc = <T>(...arrays: T[][]) => T[];

const concatenateArrays: ConcatFunc = (...arrays) => {
  return arrays.flat();
};






interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses =(courses: Course[], minStudents: number): Course[] => {

  return courses.filter(
    (course: Course) =>
      course.isPublished && course.students >= minStudents
  );


}



function pluckValues<T, K extends keyof T>(items: T[],
     key: K): T[K][] {
  return items.map((item: T) => item[key]);
}







class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}






const validateAgeAsync = async (age: number): Promise<string> => {
  if (age >= 18) {
    return await new Promise<string>(
      (resolve: (value: string) => void): void => {
        setTimeout((): void => {
          resolve("Access Granted");
        }, 1000);
      }
    );
  } else {
    throw new Error("Access Denied: Must be 18 or older");
  }
};