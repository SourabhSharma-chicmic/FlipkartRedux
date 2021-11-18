const ReduceOnceAgain = () => {
  const arryObj = [
    {
      name: "krishna",
      //val: 5,
      val: {
        rate: 5,
      },
    },
    {
      name: "RadheyShyam",
      //val: 15,
      val: {
        rate: 15,
      },
    },
    {
      name: "Keshav",
      //val: 7,
      val: {
        rate: 7,
      },
    },
    {
      name: "Keshav",
      //val: 7,
      val: {
        rate: 7,
      },
    },
  ];

  const showReduce = () => {
    const totalVal = arryObj.reduce((accum, arryItem) => {
      //return accum + arryItem.val;
      return accum + arryItem.val.rate;
    }, 0);

    console.log(totalVal);
  };
  let count = 0;
  const showReduce1 = () => {
    const showReduceForParticularName = arryObj.reduce((accum, arryItem) => {
      if (arryItem.name == "Keshav") {
        count++;
        console.log(`[${arryItem.name}]:[${count}]`);
        return accum + arryItem.val.rate;
      } else {
        return null;
      }
    }, 0);

    console.log(showReduceForParticularName + " value of showReduce1");
  };

  return (
    <>
      <h4>Redcue Once Again</h4>
      <button onClick={showReduce} type="button">
        Show ReduceFn in console
      </button>

      <button onClick={showReduce1} type="button">
        Show ReduceFn in console
      </button>

      {}
    </>
  );
};

export default ReduceOnceAgain;
