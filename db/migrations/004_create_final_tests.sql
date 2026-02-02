-- Up
CREATE TABLE final_tests (
  id SERIAL PRIMARY KEY,
  course_id INTEGER REFERENCES courses(id),
  questions JSONB
);

CREATE TABLE progress (
  user_id INTEGER REFERENCES users(id),
  course_id INTEGER REFERENCES courses(id),
  completed_units INTEGER[],
  is_completed BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (user_id, course_id)
);

-- Down
DROP TABLE progress;
DROP TABLE final_tests;
