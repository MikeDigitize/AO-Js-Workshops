var findInTitles = {
    unique : function(titles, targets, key = "unique") { 
        return (targets instanceof Array ? targets : [targets])
            .map(target => titles
            .find(title => target === title[key]))
            .filter(title => typeof title !== "undefined");
    },
    multiple : function(titles, targets, key = "userRating") {
        targets = targets instanceof Array ? targets : [targets];
        return titles
            .filter(title => targets
            .find(target => target === title[key]));
    }
};