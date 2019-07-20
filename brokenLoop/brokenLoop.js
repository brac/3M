const fixedLoop = () => {
  let i = 0;
  while (i < 6) {
    i++;
    if ( i === 3) {
      continue
    }
    console.log (i + '\n');
  }
};

fixedLoop();
