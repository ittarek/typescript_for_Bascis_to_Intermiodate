// ===== COMPLEX OBJECTS =====

// 1. Nested Object Interface
interface Address {
  street: string;
  city: string;
  country: string;
  zipCode?: string;
}
interface User {
  id: number;
  name: string;
  email: string;
  address: Address; // nested object
  isActive: boolean;
}
