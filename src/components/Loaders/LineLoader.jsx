export const LineLoader = ({ progress }) => {

  return (
    <div className="lineLoader-container">
      <div
        className="lineLoader"
        style={{ width: `${progress}%` }}
      >
      </div>
    </div>
  );
}
