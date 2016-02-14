describe("Find titles test", function() {

	var titles;
	var key;
	var results;

	it("Should search for three titles and return an array of three titles", function() {
		titles = ["Breaking Bad", "Dexter", "Game of Thrones"];
		key = "title";
		results = findInTitles.unique(tvShows, titles, key);
		expect(results.length).toBe(3);
		expect(results[0].title).toBe("Breaking Bad");
		expect(results[1].title).toBe("Dexter");
		expect(results[2].title).toBe("Game of Thrones");
	});

	it("Should search for one title and return an array of one title", function() {
		titles = ["Marvel: Agents of Shield"];
		key = "title";
		results = findInTitles.unique(tvShows, titles, key);
		expect(results.length).toBe(1);
		expect(results[0].title).toBe("Marvel: Agents of Shield");
	});

	it("Should search for one title that doesn't exists and return an empty array", function() {
		titles = ["Match of the day"];
		key = "title";
		results = findInTitles.unique(tvShows, titles, key);
		expect(results.length).toBe(0);
	});

	it("Should search by array of titles", function() {
		titles = ["Marvel: Agents of Shield", "Making a Murderer"];
		key = "title";
		results = findInTitles.unique(tvShows, titles, key);
		expect(findInTitles.unique(results, titles, key).length).toBe(2);
		titles = ["Breaking Bad", "Dexter", "Making a Murderer"];
		expect(findInTitles.unique(results, titles, key).length).toBe(1);
		titles = ["Dexter"];
		expect(findInTitles.unique(results, titles, key).length).toBe(0);
	});

	it("Should search by a single string title", function() {
		titles = "The Sopranos";
		key = "title";
		results = findInTitles.unique(tvShows, titles, key);
		expect(findInTitles.unique(results, titles, key).length).toBe(1);
		titles = "Dexter";
		expect(findInTitles.unique(results, titles, key).length).toBe(0);
	});


	it("Should search via unique when no key specified", function() {
		titles = ["R6tGEEE3", "R7tGEEE3"];
		results = findInTitles.unique(tvShows, titles);
		expect(findInTitles.unique(tvShows, titles).length).toBe(2);
	});

	it("Should search by user rating when specified", function() {
		titles = 9.7;
		key = "userRating";
		results = findInTitles.multiple(tvShows, titles, key);
		expect(results.length).toBe(2);
	});

});