import React from 'react';

function App() {
  return (
    <div className="App">
    <nav className="navbar navbar-default navbar-home">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand site-logo" href=" ">
        <img src="Images/logo.png" alt="logos"></img>
      </a>
      <div className="flags">
        <img src="Images/gh.svg" alt="ghana"></img>
        <img src="Images/ng.svg" alt="nigeria"></img>
        <img src="Images/ke.svg" alt="kenya"></img>
      </div>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        
        <li><a href="."><h3>ABOUT US</h3></a></li>
      </ul>
    </div>
  </div>
  </nav>
	
	<div className="container-fluid">
		<div className="row">
			<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="Images/li-lin-YlKQqhaNRZQ-unsplash.jpg" alt="Horizons Offices"></img>
          </div>

          <div className="item">
            <img src="Images/sasha-pleshco_-nBRHY7YZ3M0-unsplash.jpg" alt="Horizons Offices"></img>
          </div>

          <div className="item">
              <img src="Images/sean-pollock-PhYq704ffdA-unsplash.jpg" alt="Horizons Offices"></img>
          </div>

         
          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>



		<div className="container-fluid Plans">
      <div className="row">
        <h3 className="text-center"><h2>PLANS</h2></h3>

        <div className= "col-md-3" >
        <div className="thumbnail a">
          <img src="Images/adolfo-felix-PG8NyM_Mcts-unsplash.jpg" alt="VIRTUAL OFFICES"></img>
          <div className="caption">
            <h3  className="text-center">VIRTUAL OFFICES</h3>
            <p>Our meeting rooms offer a great location for your meeting with your clients or business partners.
               We provide presentation equipment and coffee. You also get to become a member of our community with benefits including 
               access to our meeting rooms. </p>    
          </div>
          </div>
        </div>
    
        <div className= "col-md-3" >
          <div className="thumbnail a">
          <img src="Images/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg" alt="CUSTOMIZED OFFICES"></img>
          <div className="caption">
            <h3  className="text-center">CUSTOMIZED OFFICES</h3>
            <p>Our meeting rooms offer a great location for your meeting with your clients or business partners.
               We provide presentation equipment and coffee. You also get to become a member of our community with benefits including 
               access to our meeting rooms. </p>    
          </div>
        </div>
        </div>
    
        <div className= "col-md-3">
        <div className="thumbnail a">
          <img src="Images/sean-pollock-PhYq704ffdA-unsplash.jpg" alt="SERVICED OFFICES"></img>
          <div className="caption">
            <h3  className="text-center">SERVICED OFFICES</h3>
            <p>Our meeting rooms offer a great location for your meeting with your clients or business partners.
               We provide presentation equipment and coffee. You also get to become a member of our community with benefits including 
               access to our meeting rooms </p>    
          </div>
        </div>	
        </div>
    
        <div className= "col-md-3">
        <div className="thumbnail a">
          <img src="Images/yann-maignan-rRiAzFkJPMo-unsplash.jpg" alt="MEETING ROOMS"></img>
          <div className="caption">
            <h3  className="text-center">MEETING ROOMS</h3>
            <p>Our meeting rooms offer a great location for your meeting with your clients or business partners.
               We provide presentation equipment and coffee. You also get to become a member of our community with benefits including 
               access to our meeting rooms. </p>    
          </div>	
        </div>
        </div>
    </div>
		</div>


        <div className="footer down">
          <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h3 className="text-center H">VISIT US IN KENYA</h3>
              <p className="text-center p1"><h5>Nairobi- Kenya</h5></p>
              <p className="text-center p2"><h4>Belgravia Centre,14 Riverside drive,
                 4th floor,Off Riverside Drive Hanover,
              14 Riverside Drive, 6th Floor,Off Riverside Drive</h4></p>

            </div>

            <div className="col-md-4">
              <h3 className="text-center H">VISIT US IN GHANA</h3>
              <p className="text-center p1"><h5>Accra -Ghana</h5></p>
              <p className="text-center p2"><h4>One Airpot Square.Airport City Accra</h4></p>
            </div>
            
            <div className="col-md-4">
              <h3 className="text-center H">VISIT US IN NIGERIA</h3>
              <p className="text-center p1"><h5>Lagos-Nigeria</h5></p>
              <p className="text-center p2"><h4>Sterling Bank Builging</h4></p>
            </div>

          </div>
          </div>
         </div>
        </div>
  );
}

export default App;
