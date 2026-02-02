-- Up
CREATE TABLE certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id INTEGER REFERENCES users(id),
  course_id INTEGER REFERENCES courses(id),
  score DECIMAL(5,2),
  issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  pdf_url TEXT
);

-- Down
DROP TABLE certificates;
