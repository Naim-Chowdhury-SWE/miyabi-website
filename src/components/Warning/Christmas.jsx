const ChristmasComponent = () => {
  // Get the current date
  const currentDate = new Date();

  // Set the start date to the 10th of the current month
  const startDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    16
  );

  // Set the end date to the 25th of the current month
  const endDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    25
  );

  // Format the dates as DD/MM/YY
  /*   const formattedStartDate = startDate.toLocaleDateString("en-GB");
  const formattedEndDate = endDate.toLocaleDateString("en-GB"); */

  // Check if it's between the start and end dates
  const isChristmas = currentDate >= startDate && currentDate <= endDate;

  // Opening times
  const normalOpeningTimes = "11:00 till 21:00";
  const christmasOpeningTimes = "12:00  till  19:00";

  const centerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "auto",
    padding: "0.5em",
    backgroundColor: "#6a0000",
  };

  // Render the component only if it's Christmas
  return isChristmas ? (
    <div style={centerStyle} className="p__cormorant">
      <h2>Avikande öppettider under julen</h2>
      <table>
        {/* <thead>
          <tr>
            <th>Dag</th>
            <th>Öppettider</th>
          </tr>
        </thead> */}
        <tbody className="padding">
          <tr>
            <td>Normala Öppettider</td>
            <td>{normalOpeningTimes}</td>
          </tr>
          <tr>
            <td>Julafton och Juldagen</td>
            <td>{christmasOpeningTimes}</td>
          </tr>
        </tbody>
      </table>
      <p className="padding">
        Obsevera att sista beställning tas 30 minuter innan stängning
      </p>
      <h2 className="padding">God Jul önskar Miyabi</h2>
      {/* Add your paragraphs here */}
    </div>
  ) : null;
};

export default ChristmasComponent;
