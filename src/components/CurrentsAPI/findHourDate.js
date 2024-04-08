export const dateFormat = [];

export const findHourDate = (dates, indice) => {
  /*  console.log("test Dates");
  console.log(dates[indice].dateObject);
  console.log(indice); */

  let dateHourNoFormat = dates[indice].dateObject;
  //select numbers of date index in "dates"
  const indexDate = [8, 9, 5, 6, 0, 1, 2, 3];
  let dateFormatting = "";

  //itera sobre o array indexDate utilizando charAt para encontrar o numero atravéz do indice.
  for (let i = 0; i < indexDate.length; i++) {
    let indexDateNumber = indexDate[i];

    if (i == 2 || i == 4) {
      dateFormatting += "/";
    }

    dateFormatting += dateHourNoFormat.charAt(indexDateNumber);
    /* console.log("dateFormatting");
    console.log(dateFormatting); */
  }

  //envia a data pronta para a variável exportada.
  dateFormat.splice(0, 1, dateFormatting);
};
