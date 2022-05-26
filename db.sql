DROP TABLE IF EXISTS WS;

USE WiseSaying;

SHOW TABLES;

CREATE TABLE WS(
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
regDate DATETIME NOT NULL,
wise_say TEXT NOT NULL,
`name` TEXT NOT NULL,
hit INT UNSIGNED NOT NULL,
good INT UNSIGNED NOT NULL,
dislike INT UNSIGNED NOT NULL
);

DESC WS;

INSERT INTO WS
SET regDate = NOW(),
wise_say = '삶이 있는 한 희망은 있다',
`name` = '키케로',
hit = 0,
good = 0,
dislike = 0;

INSERT INTO WS
SET regDate = NOW(),
wise_say = '산다는것 그것은 치열한 전투이다',
`name` = '로망로랑',
hit = 0,
good = 0,
dislike = 0;

INSERT INTO WS
SET regDate = NOW(),
wise_say = '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다',
`name` = '사무엘존슨',
hit = 0,
good = 0,
dislike = 0;

INSERT INTO WS
SET regDate = NOW(),
wise_say = '언제나 현재에 집중할수 있다면 행복할것이다',
`name` = '파울로 코엘료',
hit = 0,
good = 0,
dislike = 0;

INSERT INTO WS
SET regDate = NOW(),
wise_say = '진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해 ',
`name` = '찰리 채플린',
hit = 0,
good = 0,
dislike = 0;

INSERT INTO WS
SET regDate = NOW(),
wise_say = '직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다',
`name` = '엘버트 허버드',
hit = 0,
good = 0,
dislike = 0;

INSERT INTO WS
SET regDate = NOW(),
wise_say = '신은 용기있는자를 결코 버리지 않는다',
`name` = '켄러',
hit = 0,
good = 0,
dislike = 0;

SELECT * FROM WS;