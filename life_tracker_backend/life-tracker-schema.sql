CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  password    TEXT NOT NULL,
  username    TEXT NOT NULL UNIQUE,
  email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
  created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
  name        TEXT NOT NULL
);

CREATE TABLE exercise (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  category    TEXT NOT NULL,
  duration    INTEGER DEFAULT 1,
  intensity   INTEGER DEFAULT 1,
  user_id     INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE

);

CREATE TABLE nutrition (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  category    TEXT NOT NULL,
  quantity    INTEGER DEFAULT 1,
  calories    INTEGER DEFAULT 1,
  image       TEXT,
  user_id     INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE sleep (
  start_time  TIMESTAMP,
  end_time    TIMESTAMP,
  user_id     INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE feed (
  total_exercise_minutes  INTEGER,
  avg_sleep_hours         FLOAT,
  avg_daily_calories      FLOAT,
  max_hourly_calories     INTEGER,
  avg_exercise_intensity  FLOAT,
  total_hours_slept       INTEGER,
  user_id     INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE

);
