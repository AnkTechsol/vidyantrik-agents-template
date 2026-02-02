-- Up
CREATE TABLE mcq_questions (
  id SERIAL PRIMARY KEY,
  unit_id INTEGER REFERENCES units(id),
  question_text TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_index INTEGER NOT NULL
);

CREATE TABLE mcq_responses (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  unit_id INTEGER REFERENCES units(id),
  score DECIMAL(5,2),
  passed BOOLEAN,
  attempted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Down
DROP TABLE mcq_responses;
DROP TABLE mcq_questions;
