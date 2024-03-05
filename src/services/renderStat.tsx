export const renderStatistic = (obj: any[]) => {
  return obj.map((obj, index) => (
    <div key={index}>
      {Object.entries(obj).map(([key, value], i) => (
        <div key={i}>{`${key}: ${value}`}</div>
      ))}
    </div>
  ))
}
