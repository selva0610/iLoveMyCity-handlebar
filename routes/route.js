exports.home=function(req,res){
  res.render('index',{
    sitename:'I Love My City',
    title:'I Love My City',
    headline:'Assignment using Handlebar view engine',
  });
}

exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading,sitename;
    var imageCount=4;
    

    if(cityName==='chennai'){
       title="Chennai";
       heading='Chennai is the capital of the Indian state of Tamil Nadu. Located on the Coromandel Coast off the Bay of Bengal, it is one of the biggest cultural, economic and educational centres in South India. According to the 2011 Indian census (adjusted for the new limits of Chennai city), it is the fourth-largest city and fourth-most populous urban agglomeration in India. The city together with the adjoining regions constitute the Chennai Metropolitan Area, which is the 36th-largest urban area by population in the world.[11] Chennai is among the most visited Indian cities by foreign tourists. It was ranked 43rd most visited city in the world for year 2015.[12] The Quality of Living Survey rated Chennai as the safest city in India.[13] Chennai attracts 45 percent of health tourists visiting India, and 30 to 40 percent of domestic health tourists.[14] As such, it is termed "India\'s health capital". As a growing metropolitan city in a developing country, Chennai confronts substantial pollution and other logistical and socio-economic problems.';
    }
    else if(cityName==='ooty'){
       title="Ooty";
       heading="Udagamandalam and abbreviated as Udhagai and Ooty is a town and municipality in the Indian state of Tamil Nadu. It is located 80 km north of Coimbatore and is the capital of the Nilgiris district. It is a popular hill station located in the Nilgiri Hills.";
    }
    else if(cityName==='mysore'){
       title="Mysuru";
       heading="Mysore officially renamed as Mysuru, is the third most populous and the third largest city[5] in the state of Karnataka, India. Located in the foothills of the Chamundi Hills about 146 km (91 mi) southwest of the state capital Bangalore, it is spread across an area of 128.42 km2 (50 sq mi). According to the provisional results of the 2011 national census of India, the population is 887,446. Mysore City Corporation is responsible for the civic administration of the city, which is also the headquarters of the Mysore district and the Mysore division.";
    }
    else if(cityName==='bengaluru'){
       title="Bengaluru";
       heading="Bangalore officially known as Bengaluru[11] ([ˈbeŋɡəɭuːɾu] ( listen)), is the capital of the Indian state of Karnataka. It has a population of about 8.42 million and a metropolitan population of about 8.52 million, making it the third most populous city and fifth most populous urban agglomeration in India.[5] It is located in southern India on the Deccan Plateau. Its elevation is over 900 m (3,000 ft) above sea level, the highest of India's major cities.";
    }
    
    sitename = title+' | I Love My City';
    res.render('city',{
        sitename:sitename,
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount});
  }
