use rottentubedb;


drop table if exists channel;
drop table if exists review;

create table if not exists channel (
  id int not null auto_increment primary key,
  name text not null,
  url text not null,
  category  text not null,
  rating int not null

);


create table if not exists review (
    id int not null auto_increment primary key,
    username text not null,
    comment text not null,
    rating int not null,
    channel_id int not null

);


insert into channel (name, url, category, rating) values('You Suck at Cooking','https://www.youtube.com/channel/UCekQr9znsk2vWxBo3YiLq2w','Cooking', 8);
insert into channel (name, url, category, rating) values('How to Cook That','https://www.youtube.com/user/howtocookthat','Cooking', 6);

insert into channel (name, url, category, rating) values('You Suck at Cooking','https://www.youtube.com/channel/UCekQr9znsk2vWxBo3YiLq2w','Cooking', 8);
insert into channel (name, url, category, rating) values('How to Cook That','https://www.youtube.com/user/howtocookthat','Cooking', 6);
insert into channel (name, url, category) values('COOKING WITH SPEIRS','https://www.youtube.com/watch?v=LZV9phM_MUQ','Cooking',4);
insert into channel (name, url, category) values('How to Cook Perfect Roast Turkey','https://www.youtube.com/watch?v=I93nany8nQI','Cooking',8);
insert into channel (name, url, category) values('Slow Cooked Beef Short Ribs - Gordon Ramsay','https://www.youtube.com/watch?v=QnxLau7m600','Cooking',3);

insert into channel (name, url, category) values('Comedy Football ● Funny Fans & Fails in Stadium','https://www.youtube.com/watch?v=JYGht93k4z0','Comedy',7);
insert into channel (name, url, category) values('The Death Penalty - Daniel Fernandes Stand-Up Comedy','https://www.youtube.com/watch?v=6SBy9gUzFKQ','Comedy',4);
insert into channel (name, url, category) values('Seth MacFarlanes Cavalcade Of Cartoon Comedy Full Video','https://www.youtube.com/watch?v=FOI1IER-Eu4','Comedy',8);
insert into channel (name, url, category) values('Louis C.K. - Comedy Store (Completo SUB ITA) [2015]','https://www.youtube.com/watch?v=z6DjzOKM5vs','Comedy',3);
insert into channel (name, url, category) values('The No.1 Stand Up Comedian Show - Bill Burr Best Ever Comedy - Funnies','https://www.youtube.com/watch?v=0LddJbtXO98','Comedy',5);

insert into channel (name, url, category) values('Airplane Essentials | Tips for Traveling','https://www.youtube.com/watch?v=-QCkEtFg4O4','Traveling',5);
insert into channel (name, url, category) values('Traveling With Friends: Expectations Vs. Reality','https://www.youtube.com/watch?v=wqgsdWMATos','Traveling',7);
insert into channel (name, url, category) values('Tips for Traveling Alone','https://www.youtube.com/watch?v=67hiZr2jdes','Traveling',9);
insert into channel (name, url, category) values('Traveling Song','https://www.youtube.com/watch?v=rpGGlLgS46s','Traveling',3);
insert into channel (name, url, category) values('Tips and Tricks to Traveling with a Baby','https://www.youtube.com/watch?v=G0OAp2iA9PU','Traveling',5);

insert into review (username, comment, rating, channel_id) values ('Jillian B', 'BEST CHANNEL EVER', 10,  1);
insert into review (username, comment, rating, channel_id) values ('Samuel F', 'Its ok', 6,  1);


select * from channel;