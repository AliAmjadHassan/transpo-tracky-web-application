const URL = `http://localHost:4000`;

export function mapFunction(values) {
   let newArray =Object.values(values)
   console.log("values",values,"Array", newArray)
    return {
    type: "MAP_Co_ORDINATE",
    payload: values
  };
}