// ======= TYPE ALIASES ========
var admin = {
    id: 1,
    username: 'admin',
    email: 'ittarek551@gmail',
    isActive: true,
};
var account = {
    id: 'USER_001',
    username: 'Tariqul',
    status: 'active',
    createdAt: new Date(),
};
console.log(account);
function calculateDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
console.log(calculateDistance({ x: 0, y: 0 }, { x: 3, y: 4 })); //5
