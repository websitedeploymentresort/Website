-- Run this in the Supabase SQL Editor

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz default now()
);

create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  room text not null,
  check_in date not null,
  check_out date not null,
  guests integer default 1,
  notes text,
  status text default 'pending',
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table contact_messages enable row level security;
alter table bookings enable row level security;

-- Allow anonymous inserts (form submissions) but no reads
create policy "Allow anonymous insert on contact_messages"
  on contact_messages for insert
  to anon
  with check (true);

create policy "Allow anonymous insert on bookings"
  on bookings for insert
  to anon
  with check (true);
