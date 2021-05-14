
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', () => {
  const n = Number(input.value);
  print('Waiting...');
  const now = Date.now();
  const res = fibonacci1(n);
  const costInMs = Date.now() - now;
  print(`Result: ${res} in ${costInMs}ms`);
});

function fibonacci1(n) {
  if (n <= 2) {
    return 1;
  }
  let i = 2;
  let prev = 1
  let cur = 1;
  while(i <= n) {
    const temp = cur;
    cur = cur + prev;
    prev = temp;
    i++;
  }
  return cur;
}

const log = document.querySelector('.log');
function print(str) {
  log.innerText = str;
}

/*
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', () => {
  const n = Number(input.value);
  print('Waiting...');
  const now = Date.now();
  const res = fibonacci1(n);
  const costInMs = Date.now() - now;
  print(`Result: ${res} in ${costInMs}ms`);
});

function fibonacci1(n) {
  if (n <= 2) {
    return 1;
  }
  let i = 2;
  let prev = 1
  let cur = 1;
  while(i <= n) {
    const temp = cur;
    cur = cur + prev;
    prev = temp;
    i++;
  }
  return cur;
}



const log = document.querySelector('.log');
function print(str) {
  log.innerText = str;
}
 */