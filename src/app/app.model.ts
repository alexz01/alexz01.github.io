export interface WorkExperience {
    position: string,
    company: string,
    location: string,
    detail: string[],
    from: string,
    to: string
  }

  export interface Education{
    name: string,
    course: string,
    degree: string,
    from: string,
    to: string,
    location: string
  }

  export interface DateObj {
    day?: number,
    month: number,
    year: number
  }