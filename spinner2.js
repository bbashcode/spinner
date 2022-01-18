let spinner = '\r|/-\\|/-\\| ';

const spinner2 = function() {
  let count = 100;
  for(let bar of spinner){
    setTimeout(() => {
      process.stdout.write(`\r${bar}`);
    }, count += 200);
  }

  let finalTimeOut = spinner.length * 200;

  setTimeout(() => {
    process.stdout.write('\n');  
    }, finalTimeOut);
};

spinner2();