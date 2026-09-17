export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  cardNumber: string | null;
  points: number;
}

export const customers: Customer[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    phoneNumber: "3035551234",
    cardNumber: "10438291",
    points: 1250,
  },
  {
    id: 2,
    firstName: "Sarah",
    lastName: "Smith",
    phoneNumber: "7205551234",
    cardNumber: null,
    points: 800,
  },
  {
    id: 3,
    firstName: "Amy",
    lastName: "Lee",
    phoneNumber: "3034441234",
    cardNumber: "10577128",
    points: 2100,
  },
];