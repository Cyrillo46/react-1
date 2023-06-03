const EventExamples = () => {
    const handleFormInput = (e) => console.log(e.target)
    const handleButtonClick = () => alert('Handle Button Click')
    const handleFormSubmission = (e) => {
        e.preventDefault()
        console.log('Handle Form Submit') 
        
        }
  return (
    <section>
        <form onSubmit={handleFormSubmission}>
            <h2>Events</h2>
            <input type="text" 
            name="Events"
            onChange={handleFormInput}
            style={{ margin: '1rem 0' }}
            />
        </form>
        <button type="submit" onClick={handleFormSubmission}>Submit</button>
    </section>
  )
}
export default EventExamples