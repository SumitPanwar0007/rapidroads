import React from 'react'

const Challan = () => {
  return (
    <div>
      <h1 className="bg-red-300 h-full-w-full text-center">
        Challan Page
      </h1>

      <div className="h-10 bg-green-300">
        This is the challan page. It will display all of the information related to a specific challan number.
        <form action="/challan" method="post">
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" required/><br />
        </form>
      </div>
    </div>
  )
}

export default Challan
