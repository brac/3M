const fixedLoop = () => {
  let i = 0;
  while (i < 6) {
    if ( i === 3) {
      continue
    }
    console.log (i + '\n');
    i++;
  }
};

fixedLoop();
