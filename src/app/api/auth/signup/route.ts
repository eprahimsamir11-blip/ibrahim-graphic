import { NextRequest, NextResponse } from 'next/server';

// Mock database for demo
const users: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json();

    // Validation
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Determine role based on email
    const role = email === 'ibrahim.graphic11@gmail.com' ? 'admin' : 'client';

    // Create new user
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      role,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    users.push({ ...newUser, password });

    // Generate token (simplified)
    const token = Buffer.from(JSON.stringify(newUser)).toString('base64');

    return NextResponse.json(
      { user: newUser, token },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
