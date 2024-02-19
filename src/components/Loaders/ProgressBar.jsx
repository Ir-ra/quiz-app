export const ProgressBar = ({ progress }) => {

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
