/* eslint-disable no-unused-vars */

export enum DataStoreType {
  crm = "CRM",
  database = "DATABASE",
}

export interface ContactsProps {
  id?: string;
  first_name: string;
  last_name: string;
  display_name: string;
  avatar: string;
  job_title: string;
  city: string;
  state: string;
  country: string;
  email: string;
  mobile_number: string;
  address: string;
  data_store: DataStoreType;
}
