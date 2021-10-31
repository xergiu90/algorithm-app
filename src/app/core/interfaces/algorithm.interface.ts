
export interface IAlgorithm {
  id: number;
  name: string;
  status: string;
  type: string;
  action: string;
  message: string;
  progress:string;
  engineHost:string;
  algorithm:string;
  selected?: boolean;
}


export interface IAlgorithmDetails {
  id: string;
  hyperParameters: hyperParameters[];
  requirements:requirements[]
}

export interface hyperParameters {
  paramName: string;
  paramValue: number;
}

export interface requirements {
  paramName: string;
  paramValue: number;
}
