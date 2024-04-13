import React, { useState, useEffect } from "react";
import { Row, Col, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loaderSlice.js";
import { GetAllMovies } from "../../apicalls/movies.js";
import moment from "moment";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllMovies();
      if (response.success) {
        setMovies(response.data);
      } else {
        message.error(response.message);
      }
    } catch (err) {
      message.error(err.message);
    } finally {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(movies);

  return (
    <div>
      <Input
        style={{ width: "600px" }}
        type="text"
        placeholder="Search for movies"
        className="search-input"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <h1 className="text-md uppercase mb-2">Currently Available Movies</h1>
      {movies.length === 0 ? (
        <p>No movies are currently showing</p>
      ) : (
        <Row gutter={[20]} className="mt-2">
          {movies
            .filter((movie) =>
              movie.title.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((movie) => (
              <Col span={4}>
                <div
                  style={{ maxWidth: "190px" }}
                  className="card flex flex-col gap-3 cursor-pointer"
                  onClick={() =>
                    navigate(
                      `/movie/${movie._id}?date=${moment().format(
                        "YYYY-MM-DD"
                      )}`
                    )
                  }
                >
                  <img src={movie.poster} alt="" />

                  <div className="flex justify-center p-1">
                    <h1 className="text-md uppercase">{movie.title}</h1>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      )}
    </div>
  );
};

export default Home;
