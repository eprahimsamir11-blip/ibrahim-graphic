import { NextRequest, NextResponse } from 'next/server';

// Mock database for demo
const users: any[] = [
  {
    id: '1',
    email: 'ibrahim.graphic11@gmail.com',
    name: 'Ibrahim Admin',
    role: 'admin',
    password: 'admin123',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Missing email or password' },
        { status: 400 }
      );
    }

    // Find user
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create response user object without password
    const { password: _, ...userWithoutPassword } = user;

    // Generate token (simplified)
    const token = Buffer.from(JSON.stringify(userWithoutPassword)).toString('base64');

    return NextResponse.json(
      { user: userWithoutPassword, token },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
