import { IAlgorithm } from '../interfaces';

export class Algorithm {
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

  constructor(algorithmData: IAlgorithm) {
    this.id= algorithmData.id;
    this.name= algorithmData.name;
    this.status= algorithmData.status;
    this.type= algorithmData.type;
    this.action= algorithmData.action;
    this.message= algorithmData.message;
    this.progress= algorithmData.progress;
    this.engineHost= algorithmData.engineHost;
    this.algorithm= algorithmData.algorithm;
    this.selected= false;
  }

  public toDTO(): object {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
      type:this.type,
      action:this.action,
      message:this.message,
      progress:this.progress,
      engineHost:this.engineHost,
      algorithm:this.algorithm,
      selected:this.selected
    };
  }
}
