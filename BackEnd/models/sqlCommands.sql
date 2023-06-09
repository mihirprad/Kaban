-- SQLite
SELECT 'DROP TABLE IF EXISTS "' || name || '";' as statement
FROM sqlite_master
WHERE type = 'table';

Drop table Boards;
Drop table Tasks;
Drop table Users;
