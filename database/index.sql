CREATE DATABASE vca_music;

create TABLE users(
    id bigserial primary key,
    full_name varchar(128) not null,
    username varchar(80) not null,
    telegram_id numeric default null,
    password varchar(64)
);

create table musics(
    id BIGSERIAL PRIMARY KEY,
    original_name VARCHAR(80) NOT NULL,
    path VARCHAR(250) NOT NULL,
    size INT NOT NULL,
    mine_type VARCHAR(80) NOT NULL,
    author_id numeric not null,
    date DATE DEFAULT CURRENT_DATE,
    constraint fk_author_id foreign key(author_id) references users(id),
);

CREATE TABLE likes(
    id BIGSERIAL PRIMARY KEY,
    music_id numeric not null,
    user_id numeric not null,
    constraint fk_music_id foreign key(music_id) references musics(id),
    constraint fk_user_id foreign key(user_id) references users(id),
)

CREATE TABLE dislikes(
    id BIGSERIAL PRIMARY KEY,
    music_id numeric not null,
    user_id numeric not null,
    constraint fk_music_id foreign key(music_id) references musics(id),
    constraint fk_user_id foreign key(user_id) references users(id),
)

select m.*,
    select jsonb_agg((row_to_json(l))
    from likes as l
    where m.id = l.music_id)
as likes
from musics as m;
