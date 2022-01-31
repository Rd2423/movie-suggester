import React from "react";

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      items: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=1469c0124feb2071e2822b7f4023b656&language=en-US&page=1`
    )
      .then(res => res.json())
      .catch((err) => {console.log(err)})
      .then((result) => {
        this.setState({ items: result.items, isLoaded: true });
      },
      
      (error) => {
          this.setState({
              isLoaded: true,
              error
          });
      }
      );
  }
  render() {
    const { error, items, isLoaded } = this.state;
    if (error){return <div>Error: {error.message}</div>} 
    else if (!isLoaded){
        return <div>Loading...</div>;
    }else{
        return (
          <div className="Movies_section">
            <h1>Fetching data</h1>
            {items
              ?.map((item) => {
                <div className="movies">
                  <h3 key={item.results}>{item.results}</h3>
                  {/* <img key={item.backdrop_path}>{item.backdrop_path}</img>
              <p key={item.overview}>{item.overview}</p>
              <p key={item.release_date}>Release Date: {item.release_date} </p> */}
                </div>;
              })
              .then(console.log(items.results[0].title))}
          </div>
        );
    }
  }
}

export default Movies;
