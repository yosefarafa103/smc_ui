export interface User {
  data: {
    username: string;
    password: string;
    role: string;
    isActive: boolean;
  };
}
export type dataMills = {
  _id: string;
  name: string;
  description: string;
  startDate?: string;
  stopDate?: string;
  carriedOutBy?: string;
  tn?: string;
  duration?: string;
  stopCategory?: string;
};
export interface ChartData {
  labels: string[];
  values: number[];
  colors: string[];
}
export type millsType = {
  millCount: number;
  data: dataMills[];
};
