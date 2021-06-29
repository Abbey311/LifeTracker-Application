\echo 'Delete and recreate life_tracker db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE life_tracker;
CREATE DATABASE life_tracker;
\connect life_tracker

\i life-tracker-schema.sql
\i life-tracker-test.sql

\echo 'Delete and recreate life_tracker_test db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE IF EXISTS student_store_test;
CREATE DATABASE student_store_test;
\connect student_store_test

\i life-tracker-schema.sql
\i life-tracker-test.sql
