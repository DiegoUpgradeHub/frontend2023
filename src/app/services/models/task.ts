export interface Client {
  _id: string;
  startDate: string;
  name: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  company: string;
  brand: string;
  role: string;
}

export interface Task {
  _id: string;
  client: Client;
  dateStart: string;
  dateEnd: string;
  description: string;
}
