const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="images"
      />
      <h1 className="card-heading">Kiran V</h1>
      <p className="card-para">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="images"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
