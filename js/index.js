var React = require('react');
var _ = require('underscore');

var keys = ["id", "details.name", "details.type", "details.price"];
var things = [
  {
    id: 1,
    details: {
      name: "coathanger",
      type: "household",
      price: "3"
    }
  },
  {
    id: 2,
    details: {
      name: "turkey",
      type: "country",
      price: "11"
    }
  },
  {
    id: 3,
    details: {
      name: "shank",
      type: "weapon",
      price: "1.5"
    }
  },
  {
    id: 4,
    details: {
      name: "banana",
      type: "weapon",
      price: "1.5"
    }
  },
  {
    id: 5,
    details: {
      name: "turkey",
      type: "animal",
      price: "50.4"
    }
  }
];

var List = React.createClass({
  render: function() {
    var results = this.props.results.map(function(e) {
      return (
        <li>{e}</li>
      )
    });
    return (
      <ul>
        {results}
      </ul>

    );
  }
});


var FusePlay = React.createClass({

  getInitialState: function() {
    return { results : [] };
  },

  handleChange: function(event) {
    var results = [];
    var input = event.target.value.split(" ");
    var options = { keys: [], id: "id", threshold: 0.4 };

    input.map(function(e) {

      if(e.indexOf(":") !== -1) {
        var e = e.split(":");

        if(keys.indexOf(e[0]) !== -1) {
          options.keys = [e[0]];

          var f = new Fuse(things, options);
          var result = f.search(e[1]);
          results.push(result);

        }

      }

    });
    results = _.intersection.apply(this, results)
    this.setState({ results: results });
    console.log(results);

  },

  render: function() {
    return (
      <div>
        <input placeholder={"Find a thing"} onChange={this.handleChange}></input>
        <List results={this.state.results} />
      </div>
    );
  }
});

React.render(
  <FusePlay />,
  document.getElementById('main')
);
