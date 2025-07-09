//OK, BIG GUY, TODAY WE SHALL LEARN ABOUT THE fetch() COMMAND.
//NOW, WE HAVE THE BASIC COMMAND KNOWN AND UNDER THE HOOD IT CREATES TWO OBJECTS
//i.e. THE response and the request. FOR REQUEST OBJECT, THE DEFAULT REQUEST IS GET...
/*
const urlTemp='https://openweathermap.org/';
const url='https://api.openweathermap.org/data/2.5/weather?lat=32.732998&lon=74.864273&appid=857024bfffbec84b0b7360555dfd3994';
async function getData()
{
    const r =await fetch(url);///THIS RETURNS THE META DATA ABOUT THE PROMISE THAT THE API RETURNS,MAYBE?
    console.log(r);
    // console.log("Hello there");
    // const dataTemp=r.json();
    // console.log(dataTemp);//SO WHEN YOU DO THIS YOU IMMEDIATELY RUN THE   RESULT WHICH FOR YOU KIND INFO IS STILL PENDING BY THE PROMISE FROM THE API.
    //WHEN I RUN THE ABOVE TWO IMMEDIATE LINES I GET THE ERROR THAT THE BODY HAS ALREADY BEEN READ. WHY?
    const data = await r.json();//SO YOU AWAIT IN THE PROMISE TO FINISH AND ACTUALLY FOR FUCK'S SAKE RETURN A RESULT...
    console.log(data);
}
getData();
*/

//OKAY BLUD, NOW JUST START WITH DOING THE MANUAL GET REQUEST ONES.
const url2='https://api.spotify.com/v1/artists/0spHbv2fw49lDMkbOAdaqX?si=5b33805020f5412f';
async function getData2()
{
    const request=new Request(url2,
    {
        headers:
        {
            'Authorization': 'Bearer ' + ' \'BQAxnnHA9omF3zlq3Jnyyq7xp-mHqpilm_gW0hEIK_lK4vUrbznVKjxM3RJYCZYX-L_0PgyfxRUC4CsyebMoEadau4tao1NfdYNJa1ew6dPG-b90IWFWTu3jQ_g1TYxbhTswKrdpgqd5jqjHHwRNozqXnPM8l3oVMh1Ku9PQvIBXGpaU2_7bZJ7oAawb2OxiZCN3xxHXaFqB_H8-3ezBB37bX5VpZ1Jo48GvlLN4vv_gTJJd-xEnY9Gmy8QgJB3mtSQ8vzZs0kXqaO7fVZNyz4d2cHkp5KD93kygMr_lMsA991oq7Zh3LtwYs65vfqBs'
        }
    })
    const response=await fetch(request);
    const data=await response.json();
    console.log(data);
}
getData2();


//'https://api.openweathermap.org/data/2.5/weather?lat=32.732998&lon=74.864273&appid=857024bfffbec84b0b7360555dfd3994