import * as React from "react";

function createData(type, name, lastEditedBy, lastEdited) {
  return {
    type,
    name,
    lastEditedBy,
    lastEdited
  };
}

const review = [
  createData("NDA", "A Cut Below", "Fred Fox", "2021/10/01"),
  createData("NDA", "Love Birds", "Bernard Nixon", "2021/09/19"),
  createData("NDA", "Mouth-watering", "Dianna Allen", "2021/08/14"),
  createData(
    "NDA",
    "Between a Rock and a Hard Place",
    "Rolf Perez",
    "2021/10/04"
  ),
  createData("NDA", "Foaming At The Mouth", "Fred Fox", "2021/10/06"),
  createData("NDA", "Happy as a Clam", "Rolf Perez", "2021/10/06"),
  createData("NDA", "My Cup of Tea", "Rolf Perez", "2021/10/05"),
  createData("NDA", "Throw In the Towel", "Fred Fox", "2021/10/01"),
  createData("NDA", "A Little Bird Told Me", "Dianna Allen", "2021/10/05"),
  createData("NDA", "A Cold Day in July", "Fred Fox", "2021/09/31"),
  createData("NDA", "Jig Is Up", "Mitchell Wall", "2021/08/14"),
  createData("NDA", "A Lot on One’s Plate", "Bernard Nixon", "2021/10/11"),
  createData("NDA", "Down For The Count", "Mitchell Wall", "2021/10/12")
];

export default review;
