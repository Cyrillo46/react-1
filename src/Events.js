const EventExamples = () => {
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("Handle Form Submit");
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Events</h2>
        <input
          type="text"
          name="Events"
          onChange={(e) => console.log(e.target)}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button type="submit" onClick={() => alert("Handle Button Click")}>
        Submit
      </button>
    </section>
  );
};
export default EventExamples;
