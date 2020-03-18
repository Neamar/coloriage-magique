// Need to be launched on a grid page from https://www.nonograms.org/ to extract the color in a yaml format
// you can hack the "Hint" button to finish the puzzle for you by attaching a debugger to the window.fc15 function and setting the variable `Da` to a big number in the Chrome console

(function() {
  const table = document.querySelector('.nmtc table tbody');

  const colors = [];

  const lines = Array.from(table.children);
  const grid = lines.map((l) => {
    const squares = Array.from(l.children);
    return squares.map((s) => {
      const color = s.style.backgroundColor;
      if (!colors.includes(color)) {
        colors.push(color);
      };
      return colors.indexOf(color);
    });
  })

  let output = `grid:\n`;
  output += grid.map((l) => `  - "${l.join('')}"`).join('\n');


  output += `\ncolors:\n`
  output += colors.map((c, i) => `  ${i}: "${c}"`).join('\n');
  console.log(output);
})();
