let car = {
  maxSpeed: 280,
  update: speedChange,
};

car.update();

function speedChange() {
  console.log(car.maxSpeed);
}

const age = 10;
const totalPrice = 200.74;
const userName = "Huck";
const messege = "Hello world";
const isOpen = true;
const sholdConfirm = false;

const type = typeof age;

console.log(type);
