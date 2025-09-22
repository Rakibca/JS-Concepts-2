const user = {
  userName: 'Tom',
  role: 'admin',
};

user.role === 'admin' && console.log('Dashboard Displayed'); // Dashboard Displayed

console.log(user.role === 'admin'); // true

// If (user.role === 'admin') is false, then the code on the right of && will not execute.
// There could also be a function call after the &&.
