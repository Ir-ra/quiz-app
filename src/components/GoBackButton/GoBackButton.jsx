export const GoBackButton = () => {
  return (
    <button
      type="button"
      className="goBack"
      data-cy="backButton"
      onClick={() => window.history.back()}
    >
      back
    </button>
  )
}