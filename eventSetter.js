// You're provided with an API that gives you a list of partners, their countries, and which dates they're available in ISO 8601 format.

// Another team will send out the invitations, but you need to tell them when we should host the event and who should attend by outcome.

// The date you send in for the country should be the starting date of the two day period where the most partners can make it for both days in a row. In case of multiple dates with the same number of partners, pick the earlier date. If there are no two days in a row when any partners can make it, return null.

// Here's a sample response with 10 partners:

const partners =  [
          {
            "firstName": "Darin",
            "lastName": "Daignault",
            "email": "ddaignault@hubspotpartners.com",
            "country": "United States",
            "availableDates": [
            "2017-05-03",
            "2017-05-06"
            ]
          },
          {
            "firstName": "Crystal",
            "lastName": "Brenna",
            "email": "cbrenna@hubspotpartners.com",
            "country": "Ireland",
            "availableDates": [
            "2017-04-27",
            "2017-04-29",
            "2017-04-30"
            ]
          },
          {
            "firstName": "Janyce",
            "lastName": "Gustison",
            "email": "jgustison@hubspotpartners.com",
            "country": "Spain",
            "availableDates": [
            "2017-04-29",
            "2017-04-30",
            "2017-05-01"
            ]
          },
          {
            "firstName": "Tifany",
            "lastName": "Mozie",
            "email": "tmozie@hubspotpartners.com",
            "country": "Spain",
            "availableDates": [
            "2017-04-28",
            "2017-04-29",
            "2017-05-01",
            "2017-05-04"
            ]
          },
          {
            "firstName": "Temple",
            "lastName": "Affelt",
            "email": "taffelt@hubspotpartners.com",
            "country": "Spain",
            "availableDates": [
            "2017-04-28",
            "2017-04-29",
            "2017-05-02",
            "2017-05-04"
            ]
          },
          {
            "firstName": "Robyn",
            "lastName": "Yarwood",
            "email": "ryarwood@hubspotpartners.com",
            "country": "Spain",
            "availableDates": [
            "2017-04-29",
            "2017-04-30",
            "2017-05-02",
            "2017-05-03"
            ]
          },
          {
            "firstName": "Shirlene",
            "lastName": "Filipponi",
            "email": "sfilipponi@hubspotpartners.com",
            "country": "Spain",
            "availableDates": [
            "2017-04-30",
            "2017-05-01"
            ]
          },
          {
            "firstName": "Oliver",
            "lastName": "Majica",
            "email": "omajica@hubspotpartners.com",
            "country": "Spain",
            "availableDates": [
            "2017-04-28",
            "2017-04-29",
            "2017-05-01",
            "2017-05-03"
            ]
          },
          {
            "firstName": "Wilber",
            "lastName": "Zartman",
            "email": "wzartman@hubspotpartners.com",
            "country": "Spain",
            "availableDates": [
            "2017-04-29",
            "2017-04-30",
            "2017-05-02",
            "2017-05-03"
            ]
          },
          {
            "firstName": "Eugena",
            "lastName": "Auther",
            "email": "eauther@hubspotpartners.com",
            "country": "United States",
            "availableDates": [
            "2017-05-04",
            "2017-05-09"
            ]
          }
            ]

// Function to group partners by country and sort their available dates
function groupPartnersByCountry(partners) {
    const countries = {};
    partners.forEach(partner => {
        if (!countries[partner.country]) {
            countries[partner.country] = [];
        }
        partner.availableDates.sort();
        countries[partner.country].push(partner);
    });
    return countries;
}

// Function to find the best date for each country
function findBestDateForCountry(partners) {
    const dates = {};
    let bestDate = null;
    let maxCount = 0;

    partners.forEach(partner => {
        for (let i = 0; i < partner.availableDates.length - 1; i++) {
            const date1 = partner.availableDates[i];
            const date2 = partner.availableDates[i + 1];

            // Check if the dates are consecutive
            if (new Date(date2).getTime() - new Date(date1).getTime() === 24 * 60 * 60 * 1000) {
                if (!dates[date1]) {
                    dates[date1] = [];
                }
                dates[date1].push(partner.email);

                if (dates[date1].length > maxCount) {
                    maxCount = dates[date1].length;
                    bestDate = date1;
                }
            }
        }
    });

    return {
        attendeeCount: maxCount,
        attendees: bestDate ? dates[bestDate] : [],
        name: partners[0].country,
        startDate: bestDate
    };
}

export function findBestDatesForEvents(partners) {
    const countries = groupPartnersByCountry(partners);
    const results = [];

    for (let country in countries) {
        const countryResult = findBestDateForCountry(countries[country]);
        results.push(countryResult);
    }

    return { countries: results };
}

console.log(findBestDatesForEvents(partners))

// expect an output in below format

// {
    //             "countries": [
    //           {
    //             "attendeeCount": 1,
    //             "attendees": [
    //             "cbrenna@hubspotpartners.com"
    //             ],
    //             "name": "Ireland",
    //             "startDate": "2017-04-29"
    //           },
    //           {
    //             "attendeeCount": 0,
    //             "attendees": [],
    //             "name": "United States",
    //             "startDate": null
    //           },
    //           {
    //             "attendeeCount": 3,
    //             "attendees": [
    //             "omajica@hubspotpartners.com",
    //             "taffelt@hubspotpartners.com",
    //             "tmozie@hubspotpartners.com"
    //             ],
    //             "name": "Spain",
    //             "startDate": "2017-04-28"
    //           }
    //             ]
    //           }
    