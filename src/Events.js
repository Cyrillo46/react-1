const EventExamples = () => {
    const handleFormInput = () => console.log('Form input')
    const handleButtonClick = () => alert('Handle Button Click')
  return (
    <section>
        <form>
            <h2>Events</h2>
            <input type="text" 
            name="Events"
            onChange={handleFormInput}
            style={{ margin: '1rem 0' }}
            />
        </form>
        <button onClick={handleButtonClick}>Click</button>
    </section>
  )
}
export default EventExamples