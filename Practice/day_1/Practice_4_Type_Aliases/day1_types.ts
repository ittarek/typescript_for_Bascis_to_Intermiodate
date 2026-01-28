// ======= TYPE ALIASES ========

// Type alias দিয়ে custom type  বানানো যায়

type User = {
  id: number;
  username: string;
  email: string;
  isActive: boolean;
};
let admin: User = {
  id: 1,
  username: 'admin',
  email: 'ittarek551@gmail',
  isActive: true,
};
// Type alias with Union
type ID = number | string;
type Status2 = 'active' | 'inactive' | 'banned';

type UserAccount = {
  id: ID;
  username: string;
  status: Status2;
  createdAt: Date;
};
let account: UserAccount = {
  id: 'USER_001',
  username: 'Tariqul',
  status: 'active',
  createdAt: new Date(),
};
console.log(account);

// Function with type alias
type Point = {
  x: number;
  y: number;
};
function calculateDistance(p1: Point, p2: Point): number {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

console.log(calculateDistance({x:0, y:0}, {x:3, y:4})); //5
