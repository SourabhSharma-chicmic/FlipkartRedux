const ReduceUse = () => {
  const number1 = [1, 2, 3, 4, 5];

  const number = [
    {
     name: "krishna",
     val: 2 
    },
    {
      name: "Radha",
      val: 5,
    },
    {
      name: "Radhey Shyam",
      val: 7,
    },
  ];

  const arryOfObjectReduceExample = () => {
    const total = number.reduce((accumulator, num) => {
      console.log("Number is " + num.val + "Accumulator is " + accumulator);
      return accumulator + num.val;
    }, 0);
    console.log(total +'is the total of complex example');
  };

  const simpleArrayReduceExample = () => {
    const total = number1.reduce((accumulate, nummm) => {
      console.log(
        "accumulate value is " + accumulate + " nummm value is " + nummm
      );
      return accumulate + nummm;
    }, 0);

    console.log(total + ' is total of simple example');
  };

  return (
    <>
      <button onClick={simpleArrayReduceExample}>
        Simple Array Reduce Example
      </button>
      <button onClick={arryOfObjectReduceExample}>
        Array of Object Reduce example{" "}
      </button>
    </>
  );
};
export default ReduceUse;
