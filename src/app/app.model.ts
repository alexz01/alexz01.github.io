export interface WorkExperience {
    position: string,
    company: string,
    location: string,
    detail: string[],
    from: DateObj,
    to: DateObj
  }
  
  export interface DateObj {
    day?: number,
    month: number,
    year: number
  }