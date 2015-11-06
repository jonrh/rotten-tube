use rottentubedb;

create table if not exists names (
  id int not null auto_increment primary key,
  name text not null
);

insert into names (name) values('Jill');
insert into names (name) values('Jón Rúnar');
insert into names (name) values('Yifei');
insert into names (name) values('Radha');

select * from names;