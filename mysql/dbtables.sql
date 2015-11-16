use rottentubedb;


drop table if exists channel;
drop table if exists review;

create table if not exists channel (
  id int not null auto_increment primary key,
  name text not null,
  url text not null,
  category  text not null

);


create table if not exists review (
    id int not null auto_increment primary key,
    username text not null,
    comment text not null,
    rating int not null,
    channel_id int not null

);


insert into channel (name, url, category) values('You Suck at Cooking','https://www.youtube.com/channel/UCekQr9znsk2vWxBo3YiLq2w','Cooking');
insert into channel (name, url, category) values('How to Cook That','https://www.youtube.com/user/howtocookthat','Cooking');
insert into review (username, comment, rating, channel_id) values ('Jillian B', 'BEST CHANNEL EVER', 10,  1);
insert into review (username, comment, rating, channel_id) values ('Samuel F', 'Its ok', 6,  1);


select * from channel;