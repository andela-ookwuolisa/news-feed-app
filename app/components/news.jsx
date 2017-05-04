var React = require('react');

var News = React.createClass({


  
  render: function () {

    function tick() {
  const element = (
    <div>
      
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

setInterval(tick, 1000);

    
    return (
      <div>
        <h2>The News in {setInterval(tick,1000)}</h2>
        

      </div>
    );
  }
});

module.exports = News;
