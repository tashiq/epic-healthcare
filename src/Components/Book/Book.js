import React from 'react';

const Book = () => {
    return (
        <div id='' className="my-5 container p-5">
            <h3>Schedule For A Meet</h3>
            <p><label htmlFor="name"></label><input className="form-control" placeholder="Name" name="name" type="text" /></p>
            <p><label htmlFor="Email"></label><input className="form-control" placeholder="Email" name="Email" type="email" /></p>
            <p><label htmlFor="Phone"></label><input className="form-control" placeholder="Phone" name="Phone" type="text" /></p>
            <p><label htmlFor="address"></label><input className="form-control" placeholder="Address" name="address" type="text" /></p>
            <p><label htmlFor="Time"></label><input className="form-control" placeholder="Time" name="Time" type="text" /></p>
            <button className="btn btn-success">Book A Serial</button>
        </div>
    );
};

export default Book;