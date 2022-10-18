export default function getGender(gender) {
  switch (gender) {
    case "Male":
      return "blue";
    case "Female":
      return "red";
    case "Genderless":
      return "grey";
    default:
      return "black";
  }
}
