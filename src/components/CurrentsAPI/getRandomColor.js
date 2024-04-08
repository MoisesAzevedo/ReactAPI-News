export const getRandomColor = () => {
  const numbers = "12345";

  let rgb = "";
  for (let i = 0; i < 2; i++) {
    rgb += numbers[Math.floor(Math.random() * 5)];
  }

  let rgb2 = "";
  for (let i = 0; i < 2; i++) {
    rgb2 += numbers[Math.floor(Math.random() * 5)];
  }

  let rgb3 = "";
  for (let i = 0; i < 2; i++) {
    rgb3 += numbers[Math.floor(Math.random() * 5)];
  }

  let color = "rgba(2" + rgb3 + ",2" + rgb + ",2" + rgb2 + ",1)";

  return color;
};

export const getRandomColor2 = () => {
  const numbers = "12345";

  let rgb = "";
  for (let i = 0; i < 2; i++) {
    rgb += numbers[Math.floor(Math.random() * 5)];
  }

  let rgb2 = "";
  for (let i = 0; i < 2; i++) {
    rgb2 += numbers[Math.floor(Math.random() * 5)];
  }

  let rgb3 = "";
  for (let i = 0; i < 2; i++) {
    rgb3 += numbers[Math.floor(Math.random() * 5)];
  }

  let color = "rgba(2" + rgb3 + ",2" + rgb + ",2" + rgb2 + ",1)";
  return color;
};
