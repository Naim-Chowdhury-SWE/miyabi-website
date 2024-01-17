const ChristmasComponent = () => {
  const currentDate = new Date();

  if (currentDate.getMonth() !== 11) {
    return null;
  }

  const startDate = new Date(currentDate.getFullYear(), 11, 16);
  const endDate = new Date(currentDate.getFullYear(), 11, 25);

  const isChristmas = currentDate >= startDate && currentDate <= endDate;

  const formatTime = (hours, minutes) => {
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  const normalOpeningTime = new Date(currentDate);
  normalOpeningTime.setHours(11, 0);
  const normalClosingTime = new Date(currentDate);
  normalClosingTime.setHours(21, 0);
  const christmasOpeningTime = new Date(currentDate);
  christmasOpeningTime.setHours(12, 0);
  const christmasClosingTime = new Date(currentDate);
  christmasClosingTime.setHours(19, 0);

  const centerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "auto",
    padding: "0.5em",
    backgroundColor: "#6a0000",
  };

  return isChristmas ? (
    <div
      style={centerStyle}
      className="p__cormorant"
      role="region"
      aria-label="Öppettider under julen"
    >
      <h2 role="heading" aria-level="2">
        Öppettider under julen
      </h2>
      <table role="table" aria-label="Öppettider tabell">
        <tbody className="padding">
          <tr>
            <td role="cell">Normala Öppettider:</td>
            <td role="cell">
              <time dateTime={normalOpeningTime.toISOString()}>
                {formatTime(
                  normalOpeningTime.getHours(),
                  normalOpeningTime.getMinutes()
                )}
              </time>
              {" till "}
              <time dateTime={normalClosingTime.toISOString()}>
                {formatTime(
                  normalClosingTime.getHours(),
                  normalClosingTime.getMinutes()
                )}
              </time>
            </td>
          </tr>
          <tr>
            <td role="cell">Julafton och Juldagen:</td>
            <td role="cell">
              <time dateTime={christmasOpeningTime.toISOString()}>
                {formatTime(
                  christmasOpeningTime.getHours(),
                  christmasOpeningTime.getMinutes()
                )}
              </time>
              {" till "}
              <time dateTime={christmasClosingTime.toISOString()}>
                {formatTime(
                  christmasClosingTime.getHours(),
                  christmasClosingTime.getMinutes()
                )}
              </time>
            </td>
          </tr>
        </tbody>
      </table>
      <hr style={{ width: "60%" }} role="separator" aria-hidden="true" />
      <p className="padding" role="paragraph">
        Obsevera att sista beställning tas 30 minuter innan stängning
      </p>
      <h2 className="padding" role="heading" aria-level="2">
        God Jul önskar Miyabi
      </h2>
    </div>
  ) : null;
};
export default ChristmasComponent;
