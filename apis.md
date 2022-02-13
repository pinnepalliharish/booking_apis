page 1
http://localhost:7943/cities      (to get the list of cities available)
https://booking-im.herokuapp.com/cities

------------------------------------------------------------------------------------------------------------------------------

page 2 
http://localhost:7943/hotels_list/13    (to get list hotels wrt city selected)
https://booking-im.herokuapp.com/hotels_list/13

filters 

>> category and cost

http://localhost:7943/filter/13?category_id=2&lcost=500&hcost=1000     (to get hotel wrt category and cost in selected city)
https://booking-im.herokuapp.com/filter/13?category_id=2&lcost=500&hcost=1000


>>category

http://localhost:7943/filter/13?category_id=5      (to get hotel wrt category in selected city)
https://booking-im.herokuapp.com/filter/13?category_id=5


>>cost

http://localhost:7943/filter/13?lcost=1000&hcost=2000    (to get hotels wrt to cost in selected city)
https://booking-im.herokuapp.com/filter/13?lcost=1000&hcost=2000


>>cost sorting from low to high

http://localhost:7943/filter/5?lcost=500&hcost=2500&sort=1
https://booking-im.herokuapp.com/filter/5?lcost=500&hcost=2500&sort=1


>>cost sorting from high to low

http://localhost:7943/filter/5?lcost=500&hcost=2500&sort=-1
https://booking-im.herokuapp.com/filter/5?lcost=500&hcost=2500&sort=-1


http://localhost:7943/select_hotel             (to select hotel)
https://booking-im.herokuapp.com/select_hotel
------------------------------------------------------------------------------------------------------------------------------

page 3

http://localhost:7943/selected_hotel      (to get the info of selected hotel)
https://booking-im.herokuapp.com/selected_hotel

http://localhost:7943/selected_hotel?email="pbharish@gmail.com"      (to get the info of selected hotel wrt mail given)
https://booking-im.herokuapp.com/?email="pbharish@gmail.com"

------------------------------------------------------------------------------------------------------------------------------

update hotel info
http://localhost:7943/updateInfo/62090b17e6ea653daa8e11f8?status=sucess  
https://booking-im.herokuapp.com/updateInfo/62090b17e6ea653daa8e11f8?status=failed


------------------------------------------------------------------------------------------------------------------------------

delete info of selected hotel
http://localhost:7943/delete_hotel 
https://booking-im.herokuapp.com/delete_hotel


------------------------------------------------------------------------------------------------------------------------------


github repo link
https://github.com/pinnepalliharish/booking_apis.git