-- Create quiz_leads table
CREATE TABLE IF NOT EXISTS public.quiz_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  empresa TEXT,
  respostas JSONB NOT NULL,
  score INTEGER NOT NULL,
  resultado TEXT NOT NULL,
  utm_source TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create supporting indexes
CREATE INDEX IF NOT EXISTS idx_quiz_leads_resultado ON public.quiz_leads (resultado);
CREATE INDEX IF NOT EXISTS idx_quiz_leads_created_at ON public.quiz_leads (created_at);

-- Enable Row Level Security
ALTER TABLE public.quiz_leads ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (required for unauthenticated quiz submissions)
DROP POLICY IF EXISTS quiz_leads_public_insert ON public.quiz_leads;
CREATE POLICY quiz_leads_public_insert
  ON public.quiz_leads
  FOR INSERT
  TO public
  WITH CHECK (true);