CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  slug VARCHAR(255) UNIQUE
);

CREATE TABLE units (
  id SERIAL PRIMARY KEY,
  course_id INTEGER REFERENCES courses(id),
  title VARCHAR(255),
  sequence_order INTEGER
);

CREATE TABLE mcq_questions (
  id SERIAL PRIMARY KEY,
  unit_id INTEGER REFERENCES units(id),
  question_text TEXT NOT NULL,
  options JSONB NOT NULL, -- Array of strings
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

CREATE TABLE final_tests (
  id SERIAL PRIMARY KEY,
  course_id INTEGER REFERENCES courses(id),
  questions JSONB -- Store questions for the final test
);

CREATE TABLE certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id INTEGER REFERENCES users(id),
  course_id INTEGER REFERENCES courses(id),
  score DECIMAL(5,2),
  issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  pdf_url TEXT
);

CREATE TABLE progress (
  user_id INTEGER REFERENCES users(id),
  course_id INTEGER REFERENCES courses(id),
  completed_units INTEGER[], -- Array of unit IDs
  is_completed BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (user_id, course_id)
);
