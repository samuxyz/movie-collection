'use strict;'
//Include crypto to generate the movie id
var crypto = require('crypto');

module.exports = function() {
	return {
		movieList : [],
		/*
		 * Save the movie inside the "db".
		 */
		save(movie) {
			movie.id = crypto.randomBytes(20).toString('hex'); // fast enough for our purpose
			this.movieList.push(movie);
			return 1;			
		},
		/*
		 * Retrieve a movie with a given id or return all the movies if the id is undefined.
		 */
		find(id) {
			if(id) {
				return this.movieList.find(element => {
						return element.id === id;
					});	
			}else {
				return this.movieList;
			}
		},
		/*
		 * Delete a movie with the given id.
		 */
		remove(id) {
			var found = 0;
			this.movieList = this.movieList.filter(element => {
					if(element.id === id) {
						found = 1;
					}else {
						return element.id !== id;
					}
				});
			return found;			
		},
		/*
		 * Update a movie with the given id
		 */
		update(id, movie) {
			var movieIndex = this.movieList.findIndex(element => {
				return element.id === id;
			});
			if(movieIndex !== -1) {
				this.movieList[movieIndex].title = movie.title;
				this.movieList[movieIndex].year = movie.year;
				return 1;
			}else {
				return 0;
			}
		}		
	}
};  