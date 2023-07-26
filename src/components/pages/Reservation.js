import React, { useState } from 'react'

const Reservation = () => {

  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guest, setGuest] = useState();
  const [occasion, setOccasion] = useState();
  
  const handleChange = (e) => {
    if (e.target.name === 'date') {
      setDate(e.target.value)
    }
    else if (e.target.name === 'time') {
      setTime(e.target.value)
    }
    else if (e.target.name === "guest") {
      setGuest(e.target.value)
    }
    else if (e.target.name === "occasion") {
      setOccasion(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(date, time, guest, occasion)
  }

  return (
    <main>
      <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" name='date' onChange={handleChange} value={date} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " name='time' onChange={handleChange} value={time}>
          <option value={"17:00"}>17:00</option>
          <option value={"18:00"}>18:00</option>
          <option value={"19:00"}>19:00</option>
          <option value={"20:00"}>20:00</option>
          <option value={"21:00"}>21:00</option>
          <option value={"22:00"}>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" name='guest' onChange={handleChange} value={guest} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name='occasion' onChange={handleChange} value={occasion}>
          <option value={"birthday"}>Birthday</option>
          <option value={"anniversary"}>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </main>
  )
}

export default Reservation
