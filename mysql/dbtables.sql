use rottentubedb;


drop table if exists channel;
drop table if exists review;

create table if not exists channels (
  id int not null auto_increment primary key,
  name text not null,
  url text not null,
  category  text not null,
  rating int not null

);


create table if not exists reviews (
    id int not null auto_increment primary key,
    username text not null,
    comment text not null,
    rating int not null,
    channel_id int not null

);


insert into channel (name, url, category, rating) values('You Suck at Cooking','https://www.youtube.com/channel/UCekQr9znsk2vWxBo3YiLq2w','Cooking', 8);
insert into channel (name, url, category, rating) values('How to Cook That','https://www.youtube.com/user/howtocookthat','Cooking', 6);
insert into channel (name, url, category) values('How to Make Sushi','https://www.youtube.com/channel/UCosny7dI3LVZE-GWR1RKxsg','Cooking',4);

insert into channel (name, url, category) values('JennaMarbles','https://www.youtube.com/user/JennaMarbles','Comedy',8);
insert into channel (name, url, category) values('Boburnham','https://www.youtube.com/user/boburnham','Comedy',7);
insert into channel (name, url, category) values('CollegeHumor','https://www.youtube.com/user/collegehumor','Comedy',4);



insert into channel (name, url, category) values('Matt Harding','https://www.youtube.com/channel/UC__TABIHzr7fUz5pQL2GU4w','Traveling',5);
insert into channel (name, url, category) values('Expoza Travel','https://www.youtube.com/channel/UC3o_gaqvLoPSRVMc2GmkDrg','Traveling',7);
insert into channel (name, url, category) values('Lonely Planet','https://www.youtube.com/user/LonelyPlanet','Traveling',9);



insert into review (username, comment, rating, channel_id) values ('Jillian B', 'BEST CHANNEL EVER', 10,  1);
insert into review (username, comment, rating, channel_id) values ('Samuel F', 'Its ok', 6,  1);
insert into review (username, comment, rating, channel_id) values ('Luke P', 'Hilarious', 9,  1);
insert into review (username, comment, rating, channel_id) values ('Jane J', 'Its really not my cup of tea at all...too rude', 3,  1);
insert into review (username, comment, rating, channel_id) values ('Shane Galvin', 'Shes funny lololololololol', 7, 4)
insert into review (username, comment, rating, channel_id) values ('Quinn K', 'A bit of a strange girl', 6, 4)


