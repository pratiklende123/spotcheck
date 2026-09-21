-- 1. exercises table
CREATE TABLE exercises (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    risk_tag TEXT,
    equipment TEXT,
    muscle_group TEXT,
    correct_video_id TEXT,
    mistake_video_id TEXT,
    aliases TEXT[] DEFAULT '{}',
    cues TEXT[] DEFAULT '{}',
    mistake_title TEXT,
    mistake_points TEXT[] DEFAULT '{}',
    why_it_matters TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. form_checks table
CREATE TABLE form_checks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID, -- Nullable for now, until Auth is implemented
    exercise_slug TEXT REFERENCES exercises(slug),
    reps INTEGER DEFAULT 0,
    metrics JSONB DEFAULT '{}'::jsonb,
    ai_feedback TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. suggestions table
CREATE TABLE suggestions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    exercise_name TEXT NOT NULL,
    notes TEXT,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS) - good practice, even if we open them for public read/write initially for prototyping
ALTER TABLE exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_checks ENABLE ROW LEVEL SECURITY;
ALTER TABLE suggestions ENABLE ROW LEVEL SECURITY;

-- Create policies for prototyping (Public read for exercises, public insert for suggestions/form_checks)
CREATE POLICY "Public read access for exercises" ON exercises FOR SELECT USING (true);
CREATE POLICY "Public insert access for form_checks" ON form_checks FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert access for suggestions" ON suggestions FOR INSERT WITH CHECK (true);
