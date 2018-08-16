exports.home = function(req, res) {
    res.render('home', {
        title: 'iLoveMyCity',
        headline: 'We believe that every city have something to say'
    });
}


exports.city = function(req, res) {
    var cityName = req.params.city;
    var title, headline;
    var imageArray = [1, 2, 3, 4];

    if (cityName === 'hyderabad') {
        title = "Hyderabad";
        headline = "Hyderabad: Where love is in the air";
    } else if (cityName === 'pune') {
        title = "Pune";
        headline = "Pune: Good talkers are only found in Pune";
    } else if (cityName === 'mumbai') {
        title = "Mumbai";
        headline = "Mumbai: Buzz, Beautiful architecture and Football";
    } else if (cityName === 'delhi') {
        title = "Delhi";
        headline = "Delhi: Sparkling, Still, Food, Gorgeous";
    } else if (cityName === 'banglore') {
        title = "Banglore";
        headline = "Banglore: Come to Banglore to become someone new";
        imageCount = 6;
    }

    res.render('city', {
        title: title,
        headline: headline,
        city: cityName,
        imageArray: imageArray
    });
}