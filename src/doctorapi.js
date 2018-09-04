export class Doctor{
    constructor(){
  
    }
    static getData(name, condition, result, error){
        $.get(`https://api.betterdoctor.com/2016-03-01/doctors?
        name=${name}&query=
        ${condition}&location=wa-seattle&user_location=37.773%2C-122.413&sort=best-match-desc&skip=0&limit=100&
        user_key=${process.env.exports.apiKey}`)
        .then(function(response){
          result(response);
        }).fail(function(message){
          error(message);
        });
      };
  }