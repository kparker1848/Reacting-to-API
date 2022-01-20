import React, { useState, useEffect } from "react";

const App = () => {
    const [contentLoaded, setLoaded] = useState("main");
    const [filmList, setFilmList] = useState([]);
    const [peopleList, setPeopleList] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(allFilms => setFilmList(allFilms))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(allPeople => setPeopleList(allPeople))
            .catch(err => console.log(err))
    }, []);

    const handleFilmButtonClick = (e) => {
        setLoaded("films");
    };

    const handlePeopleButtonClick = (e) => {
        setLoaded("people");
    };


    if (contentLoaded === "main") {
        return (
            <>
                <div className="col-12 d-flex flex-wrap justify-content-center">
                    <img className="col-12" src="https://www.fanboy.com/wp-content/uploads/2013/07/Studio-noscale.jpg" alt="Ghibli Films Years" />
                </div>
                <h1 className="text-center m-5">Studio Ghibli API Lab</h1>
                <div className="container d-flex flex-wrap justify-content-center">
                    <div className="col-6-md d-flex justify-content-evenly">
                        <button type="button" className="btn btn-info text-light m-2" onClick={handleFilmButtonClick}>Films</button>
                        <button type="button" className="btn btn-info text-light m-2" onClick={handlePeopleButtonClick}>Characters</button>
                    </div>
                    <div className="col-12 d-flex m-5 justify-content-center">

                        <div className="card shadow p-3 mb-5 bg-body rounded col-lg-4">
                            <div className="card-body">
                                <h4 className="m-5 text-center">Welcome to the API Lab!</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );

    } else if (contentLoaded === "films") {
        return (
            <>
                <div className="col-12 d-flex flex-wrap justify-content-center">
                    <img className="col-4-md" src="https://data.whicdn.com/images/350711764/original.gif" alt="Birds flying" />
                </div>
                <h1 className="text-center m-5">Studio Ghibli API Lab</h1>
                <div className="container d-flex flex-wrap justify-content-center">
                    <div className="col-6-md d-flex justify-content-evenly">
                        <button type="button" className="btn btn-info text-light m-2" onClick={handleFilmButtonClick}>Films</button>
                        <button type="button" className="btn btn-info text-light m-2" onClick={handlePeopleButtonClick}>Characters</button>
                    </div>
                    <div >
                        <ul className="col-12 d-flex flex-wrap justify-content-evenly">
                            {filmList.map((films) => (
                                <div key={`film-id-${films.id}`} className="card shadow p-3 mb-5 bg-body rounded col-md-4 m-4">
                                    <img src={films.movie_banner} alt="..." className="card-img-top" />
                                    <div className="card-body">
                                        <h4 className="card-title text-center text-decoration-underline">{films.title}</h4>
                                        <h6 className="text-center fst-italic">{films.original_title_romanised}</h6>
                                        <h6 className="text-center">{films.original_title}</h6>
                                        <h6 className="text-center fw-bolder">{films.release_date}</h6>
                                        <p className="card-text">{films.description}</p>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        );
    } else if (contentLoaded === "people") {
        return (
            <>
                <div className="col-12 d-flex flex-wrap justify-content-center">
                    <img className="col-4-md" src="https://64.media.tumblr.com/a2c7267b99f34f1e9fbe2ca65f801ae1/3e6a8ea646afc9c3-7e/s540x810/b8533fb27d00270ad68233695f22c48f62a96f14.gifv" alt="Animal ears in tall grass" />
                </div>
                <h1 className="text-center m-5">Studio Ghibli</h1>
                <div className="container d-flex flex-wrap justify-content-center">
                    <div className="col-6-md d-flex justify-content-evenly">
                        <button type="button" className="btn btn-info text-light m-2" onClick={handleFilmButtonClick}>Films</button>
                        <button type="button" className="btn btn-info text-light m-2" onClick={handlePeopleButtonClick}>Characters</button>
                    </div>
                    <div>
                        <ul className="col-12 d-flex flex-wrap justify-content-evenly">
                            {peopleList.map((people) => (
                                <div key={`people-id-${people.id}`} className="card shadow p-3 mb-5 bg-body rounded col-4-md m-4">
                                    <div className="card-body">
                                        <h4 className="card-title text-center text-decoration-underline">{people.name}</h4>
                                        <p className="card-text">Age: {people.age}</p>
                                        <p className="card-text">Gender: {people.gender}</p>
                                        <a href={people.films} target="_blank" rel="noreferrer" className="m-1 btn btn-outline-info">Film Info</a>
                                        <a href={people.url} target="_blank" rel="noreferrer" className="m-1 btn btn-outline-info">Character Info</a>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        );
    };
};

export default App;