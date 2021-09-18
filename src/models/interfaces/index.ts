export interface IAddress {
  country: string;
  state: string;
  street: string;
  zipcode: string;
  user_id: string;
}

export interface ICertification {
  pro_id: string;
  title: string;
  year: string;
  institute: string;
}

export interface IDeal {
  project_id: string;
  days: number;
  rate: number;
  value: number;
  tasks: string;
  status: string;
}

export interface IMedia {
  account_id: string;
  type: string;
  path: string;
}

export interface IProAccount {
  user_id: string;
  fantasy_name: string;
  quote: string;
  category: string;
  description: string;
  income: number;
  extra_taxes: number;
}

export interface IProject{
  owner_id: string;
  pro_id: string;
  title: string;
  description: string;
  status: string;
  category: string;
  team: boolean;
  url: string;
}

export interface IUser {

    uid: string;
    name: string;
    email: string;
    type: string;
    profile_img: string;    
    birth_date: string;  
    provider: string;
    register_done: boolean;

}