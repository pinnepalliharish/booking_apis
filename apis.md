page 1
http://localhost:7943/cities      (to get the list of cities available)

------------------------------------------------------------------------------------------------------------------------------

page 2 
http://localhost:7943/hotels_list/13    (to get list hotels wrt city selected)

filters 

>> category and cost
http://localhost:7943/filter/13?category_id=2&lcost=500&hcost=1000     (to get hotel wrt category and cost in selected city)

>>category
http://localhost:7943/filter/13?category_id=5      (to get hotel wrt category in selected city)

>>cost
http://localhost:7943/filter/13?lcost=1000&hcost=2000    (to get hotels wrt to cost in selected city)

>>cost sorting from low to high
http://localhost:7943/filter/5?lcost=500&hcost=2500&sort=1

>>cost sorting from high to low
http://localhost:7943/filter/5?lcost=500&hcost=2500&sort=-1


http://localhost:7943/select_hotel        (to select hotel)

------------------------------------------------------------------------------------------------------------------------------

page 3
http://localhost:7943/selected_hotel      (to get the info of selected hotel)

http://localhost:7943/selected_hotel?email="pbharish@gmail.com"      (to get the info of selected hotel wrt mail given)

------------------------------------------------------------------------------------------------------------------------------

update hotel info
http://localhost:7943/updateInfo/6208fd2759aa92487bb793e5?status=sucess  


------------------------------------------------------------------------------------------------------------------------------

delete info of selected hotel
http://localhost:7943/delete_hotel 


------------------------------------------------------------------------------------------------------------------------------
