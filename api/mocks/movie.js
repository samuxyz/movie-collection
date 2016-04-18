 'use strict';

    module.exports = {
      search: search
    };

    function search(req, res, next) {
	  console.log(111);
      res.json({
		movies: [
			{title: "Star Wars - The return of the Jedi", year: 1983}, 
			{title: "Star Wars - A new hope", year: 1977}
		]
	  });
    }