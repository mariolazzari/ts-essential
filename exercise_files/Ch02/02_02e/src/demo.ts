interface Address {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalCode: string;
}

interface Contact extends Address {
  id: number;
  name: string;
  birthDate?: Date;
}

let primaryContact: Contact = {
  birthDate: new Date("01-01-1980"),
  id: 12345,
  name: "Jamie Johnson",
  // extends
  postalCode: "25030",
  region: "Italy",
  province: "BS",
  line1: "via...",
  line2: "Coccaglio",
};
