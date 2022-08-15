export interface ContactsProps {
  first_name: string;
  last_name: string;
  email: string;
  mobile_number: string;
}

export interface UpdateContactsProps {
  id: string;
  email: string;
  mobile_number: string;
}
