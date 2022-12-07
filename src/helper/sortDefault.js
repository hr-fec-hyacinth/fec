const sortDefault = (styles) => {
  let sorted = [];
  for (let i = 0; i < styles.length; i++) {
    if (styles[i]['default?']) {
      sorted.push(styles[i]['default?']);
      sorted.splice(i, 1);
    }
  }
  return sorted.concat(styles);
}

export default sortDefault;